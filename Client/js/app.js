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

    var Profile = Backbone.Model.extend({
        urlRoot: 'http://localhost:8082/'
    });

    var LoginView = Backbone.View.extend({
        el: '.page',

        render: function() {
            var that = this;
            var template = _.template($('#login-template').html(), {});
            that.$el.html(template);

            $('#connexion-button').click(function () {
                var bla = $('#connexion-input').val();
                $("#connexion-button").attr("href", "#/profile/"+bla);
            });
        }
    });

    var ProfileView = Backbone.View.extend({
        el: '.page',
        render: function (options) {
            var that = this;
            if(options.name) {
                console.log(" Success options.id");
                that.profile = new Profile({id: options.name});
                that.profile.fetch({
                    success: function (profile) {
                        console.log(profile);
                        var template = _.template($('#profile-template').html(), {profile: profile.attributes});
                        that.$el.html(template);
                        $('.question-tooltip').tooltip({
                            //use 'of' to link the tooltip to your specified input
                            position: { of: '#myInput', my: 'left center', at: 'left center' }
                        });

                        $('.myBtn').click(function () {
                            $('.question-tooltip').tooltip('open');
                        });
                    }
                })
            }
        }
    });
    var loginView = new LoginView();
    var profileView = new ProfileView();

    var Router = Backbone.Router.extend({
        routes: {
            "": "showLogin",
            "profile/:name": "showProfile",
        }
    });
    var router = new Router;
    router.on('route:showLogin', function () {
        console.log("Has been routed to loginView");
        loginView.render();
    });
    router.on('route:showProfile', function(name) {
        console.log("Has been routed to showProfile");
        console.log(name);
        profileView.render({name: name});
    })
    Backbone.history.start();

});