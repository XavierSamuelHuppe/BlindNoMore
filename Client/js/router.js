define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/HomeView'
], function($, _, Backbone, HomeView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '/login': 'loginPage',
            // Default
            '*actions': 'defaultAction'
        }
    });

    var initialize = function(){

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

        var app_router = new AppRouter;

        app_router.on('route:defaultAction', function (actions) {
            var homeView = new HomeView();
            homeView.render();
        });


        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});