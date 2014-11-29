/**
 * Created by varun.sheth on 11/26/14.
 */
(function(){

    var app = angular.module('notifications', []);

    app.controller('NotificationsController', ['$http', function($http){
        var notifications = this;

        notifications.userNotifications = [];

        $http.get('js/notifications.json').success(function(data){
            notifications.userNotifications = data;
        });

        this.notification = {};

        this.addNotification = function(notification){
            notifications.userNotifications.push(this.notification);
            this.notification = {};
        };

    }]);

    app.directive('notificationsContainer', function(){
       return {
           restrict: 'E',
           templateUrl: 'notifications-container.html',
           controller: function(){

               this.setContainerClass = function(setClass){
                   switch(setClass) {
                       case 1: this.containerClass = "notify danger-border";
                           break;
                       case 2: this.containerClass = "notify info-border";
                           break;
                       case 3: this.containerClass = "notify warning-border";
                           break;
                       case 4: this.containerClass = "notify success-border";
                           break;
                       default: this.containerClass = "notify unknown-border";
                           break;
                   }

                   return this.containerClass;
               };

               this.setTitleClass = function(setClass){
                   switch(setClass) {
                       case 1: this.titleClass = "danger";
                           break;
                       case 2: this.titleClass = "info";
                           break;
                       case 3: this.titleClass = "warning";
                           break;
                       case 4: this.titleClass = "success";
                           break;
                       default: this.titleClass = "unknown";
                           break;
                   }

                   return this.titleClass;
               };
           },
           controllerAs: 'notificationsContainer'
       };
    });

    app.directive('notificationsForm', function(){
        return {
          restrict: 'E',
          templateUrl: 'notifications-form.html'
        };
    })

})();