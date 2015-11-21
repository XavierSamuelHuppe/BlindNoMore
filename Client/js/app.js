define([
    'jquery',
    'underscore',
    'backbone',
    'views/login/LoginView',
    'views/profile/ProfileView',
], function($, _, Backbone, LoginView, ProfileView){

    var WelcomeView = Backbone.View.extend({
        el: '.page',
        render: function () {
            var that = this;
            var template = _.template($('#welcome-template').html());
            that.$el.html(template);
        }
    });

    var welcomeView = new WelcomeView();
    var loginView = new LoginView();
    var profileView = new ProfileView();

    var Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "hello" : "showLogin",
            "profile": "showProfile",
        }
    });
    var router = new Router;
    router.on('route:showLogin', function () {
        console.log("Has been routed to loginView");
        loginView.render();
    });
    router.on('route:showProfile', function() {
        console.log("Has been routed to showProfile");
        console.log(name);
        profileView.render({name: "bob"});
    })
    router.on('route:home', function() {
        welcomeView.render();
    })
    Backbone.history.start();
});
