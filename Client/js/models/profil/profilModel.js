define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    var UserModel = Backbone.Model.extend({

        urlRoot: 'http://localhost:8080/users',

        parse: function (data) {
            var result;
            if(_.has(data, 'results')) {
                result = data.results[0];
            } else {
                return {};
            }

            result['id'] = result.userId;
            result['name'] = result.userName;
            return result;
        },

    });

    return UserModel;
});