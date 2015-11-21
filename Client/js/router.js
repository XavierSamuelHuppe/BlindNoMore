define([
    'jquery',
    'underscore',
    'backbone',
    'views/login/LoginView',
    'views/profile/ProfileView',
    'models/profile/ProfileModel'
], function($, _, Backbone, LoginView, ProfileView, ProfileModel) {

    var Router = Backbone.Router.extend({
        routes: {
            "bla": "showLogin",
            "hello": "showLogin",
            "profile": "showProfile"
        }
    });
    var initialize = function() {

        var loginView = new LoginView();
        var profileView = new ProfileView();

        Backbone.View.prototype.destroyView = function() {
            this.undelegateEvents();
            this.$el.empty();
            delete this;
        };

        var viewCleanup = function (lastView) {
            if(lastView) {
                lastView.destroyView();
            }
        };
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
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});