'use strict'

angular
.module('goalList')
.component('goalList', {
    templateUrl : 'goal-list/goal-list.template.html',
    controller: ['$http', function PhoneListController($http) {
      var self = this;

      $http.get('goals/goals.json').then(function(response) {
        self.goals = response.data;
        self.goals.forEach(function(goal){
           goal.stacked = new Array();
            var types = ['success', 'info', 'warning', 'danger'];
            for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
            var index = Math.floor(Math.random() * 4);
            goal.stacked.push({
                value: Math.floor(Math.random() * 30 + 1),
                type: types[index]
             });
        }    
        goal.isCollapsed = true;
        })
      });
}]});