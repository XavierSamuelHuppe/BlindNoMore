$(function () {
    $.fn.serializeObject = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    var correctUrl = "http://localhost:5000/";

    var Profile = Backbone.Model.extend({
        urlRoot: correctUrl
    });

    var Affinite = Backbone.Model.extend({
        url: correctUrl+':username/:type'
    });

    var LoginView = Backbone.View.extend({
        el: '.page',

        render: function() {
            var that = this;
            var template = _.template($('#login-template').html(), {});
            that.$el.html(template);

            $('#connexion-button').click(function () {
                var name = $('#connexion-input').val();
                $("#connexion-button").attr("href", "#/profile/"+name);
            });
        }
    });

    var ProfileView = Backbone.View.extend({
        el: '.page',
        render: function (options) {
            var that = this;
            if(options.name) {
                that.profile = new Profile({id: options.name});
                that.profile.fetch({
                    success: function (profile) {
                        var template = _.template($('#profile-template').html(), {profile: profile.attributes});
                        that.$el.html(template);
                        $('.question-tooltip').tooltip({
                            //use 'of' to link the tooltip to your specified input
                            position: { of: '#myInput', my: 'left center', at: 'left center' }
                        });

                        $('.myBtn').click(function () {
                            $('.question-tooltip').tooltip('open');
                        });

                        $("#chercher-gens").attr("href", "#/optimal/"+options.name);
                    }
                })
            }
        }
    });

    var OptimalView = Backbone.View.extend({
        el: '.page',
        render: function (options) {
        var that = this;
            that.affinite = new Affinite();
            that.affinite.url = that.affinite.url.replace(":username", options.name);
            that.affinite.url = that.affinite.url.replace(":type", "bests");
            that.affinite.fetch({
                success: function (affinite) {
                    var template = _.template($('#meet-template').html(), {affinites: affinite.attributes, name: options.name });
                    that.$el.html(template);
                    $("#different-button").attr("href", "#/different/"+options.name);
                }
            })
        }
    });

    var DifferentView = Backbone.View.extend({
        el: '.page',
        render: function (options) {
            var that = this;
            that.affinite = new Affinite();
            that.affinite.url = that.affinite.url.replace(":username", options.name);
            that.affinite.url = that.affinite.url.replace(":type", "opposites");
            that.affinite.fetch({
                success: function (affinite) {
                    var template = _.template($('#meet-template').html(), {affinites: affinite.attributes, name: options.name});
                    that.$el.html(template);
                    $("#optimal-button").attr("href", "#/optimal/"+options.name);
                }
            })
        }
    });

    var SelectedView = Backbone.View.extend({
        el: '.page',
        render: function (options) {
        var that = this;
            that.selected = new Affinite();
            that.selected.url = that.selected.url.replace(":username", options.name1);
            that.selected.url = that.selected.url.replace(":type", options.name2);
            that.selected.fetch({
                success: function (selected) {
                    console.log(selected);
                    var template = _.template($('#selected-template').html(), {selected: selected.attributes});
                    that.$el.html(template);
                    $('.question-tooltip').tooltip({
                        //use 'of' to link the tooltip to your specified input
                        position: { of: '#myInput', my: 'left center', at: 'left center' }
                    });
                    $('.myBtn').click(function () {
                        $('.question-tooltip').tooltip('open');
                    });
                    $('#enregistrer-commentaire').click(function () {
                        var data = {"text": $('#comment').val() };
                        $.ajax({
                            type: "POST",
                            url: that.selected.url,
                            data: JSON.stringify(data),
                            contentType: 'application/json',
                            processData: false
                        });
                    });
                    $('#ajout-ami').click(function () {
                        if ($('#ajout-ami').text() === "Ajouter comme ami"){
                            $.post( that.selected.url+"/add" )
                            $('#ajout-ami').text("Retirer comme ami");
                        }
                        else {
                            $.post( that.selected.url+"/unfriend" )
                            $('#ajout-ami').text("Ajouter comme ami");
                        }
                  });
                }
            })
        }
    });

    var selectedView = new SelectedView();
    var differentView = new DifferentView();
    var loginView = new LoginView();
    var profileView = new ProfileView();
    var optimalView = new OptimalView();

    var Router = Backbone.Router.extend({
        routes: {
            "": "showLogin",
            "optimal/:name": "showOptimal",
            "different/:name": "showDifferent",
            "profile/:name": "showProfile",
            "match/:name1/:name2": "showSelected",
        }
    });
    var router = new Router;
    router.on('route:showLogin', function () {
        console.log("Has been routed to loginView");
        loginView.render();
    });
    router.on('route:showProfile', function(name) {
        console.log("Has been routed to showProfile");
        profileView.render({name: name});
    })
    router.on('route:showOptimal', function(name) {
        console.log("Has been routed to optimal");
        optimalView.render({name: name});
    })
    router.on('route:showDifferent', function(name) {
        console.log("Has been routed to different");
        differentView.render({name: name});
    })
    router.on('route:showSelected', function(name1,name2) {
        console.log("Has been routed to selected");
        selectedView.render({name1: name1, name2:name2});
    })
    Backbone.history.start();

});