define([
    'underscore',
    'backbone',
    '../../models/profile/ProfileModel'
], function(_, Backbone) {
    var ProfileCollection = Backbone.Collection.extend({
        model: ProfileModel,

        parse: function (data) {
            return data;
        }
    });

    return ProfileCollection;
});