define([
    'jquery',
    'underscore',
    'backbone',
    '../../models/profile/ProfileModel',
    'text!templates/profile/profileTemplate.html'
], function ($, _, Backbone, ProfileModel, profileTemplate) {

    var ProfileView = Backbone.View.extend({
        el: $("#page"),

        template: _.template(profileTemplate),

        initialize: function(model) {
            var self = this;
            this.model = model,
                console.log("profile view!!")
                console.log(model);
            this.model.fetch({
                success: function () {
                    self.render();
                }
            });

            return this;
        },

        render: function() {
            this.$el.html(profileTemplate);
        }
    });

    return ProfileView;
});