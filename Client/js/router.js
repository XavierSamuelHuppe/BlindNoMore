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
            "": "showLogin",
            "edit": "showLogin",
        }
    });
    var router = new Router;
    router.on('route:showLogin', function (actions) {
        var loginView = new LoginView();
        console.log("AHSIDAAAAAAAAAAAA");
        loginView.render();
    });

    router.on('route:showProfile', function(profileName){
        console.log("NIGGA");
        var profile = new ProfileModel({profileName: profileName});
        console.log("1231231231232133");
        var profileView = new ProfileView(profile);
        profileView.render();
    });
    Backbone.history.start();
});