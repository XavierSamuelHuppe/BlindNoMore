define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    var ProfileModel = Backbone.Model.extend({

            urlRoot: 'http://localhost:8082/',

        parse: function (data) {
            var result;
            if(_.has(data, 'results')) {
                result = data.results[0];
            } else {
                return {};
            }
            console.log(result);
            result['name'] = result.profileName;
            return result;
        }
    });

    return ProfileModel;
});

(function() {
    TaskModel = Backbone.Model.extend({
        defaults: {
            task: ''
        },
        parse: function(response) {
            // Make sure the id is valid.
            this.id = response.id;
            return response;
        },
        validate: function (attrs) {
            if (!attrs.task || attrs.task === "") {
                return 'Please enter a valid task.';
            }
        }
    });
})();