define([
    'jquery',
    'underscore',
    'backbone',
    '../../models/profile/ProfileModel',
    'text!templates/profile/profileTemplate.html'
], function ($, _, Backbone, ProfileModel, profileTemplate) {


    var ProfileView = Backbone.View.extend({
        el: $("#page"),
        render: function (options) {
            var that = this;
            if(options.name) {
                console.log(" Success options.id");
                that.profile = new ProfileModel({id: options.name});
                that.profile.fetch({
                    success: function (profile) {
                        console.log(profile);
                        var template = _.template(profileTemplate, {profile: profile.attributes.user});
                        that.$el.html(template);
                    }
                })
            }else {
                console.log("no options.id");
                var profile = new Profile({name: "bob"});
                var template = _.template(profileTemplate, {profile: profile});
                that.$el.html(template);
            }
        }
    });

    return ProfileView;
});