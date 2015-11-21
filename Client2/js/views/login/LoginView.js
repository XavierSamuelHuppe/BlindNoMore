define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/login/loginTemplate.html'
], function($, _, Backbone, loginTemplate){

    var LoginView = Backbone.View.extend({
        el: $("#page"),

        render: function() {
            console.log("has been rendered");
            var that = this;
            var template = _.template(loginTemplate, {});
            that.$el.html(template);
        }
    });
    return LoginView;
});