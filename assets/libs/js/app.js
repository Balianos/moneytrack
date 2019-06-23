var app = angular.module('mtApp', []);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['mtApp'])
})


function dateFr() {
   var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
   var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
   var date = new Date();
   var message = jours[date.getDay()] + " ";   // nom du jour
   message += date.getDate() + " ";   // numero du jour
   message += mois[date.getMonth()] + " ";   // mois
   message += date.getFullYear();
   return message;
}

app.controller('HomeController', function($scope, $http) {
  $scope.today = dateFr();

  $scope.getBalance = function() {
    $http.get("https://private-6b36d-testtechniquefront.apiary-mock.com/balance")
    .then(function(response) {
      $scope.myBalance = response.data.balance;
    });
  }

  $scope.getPaiements = function() {
    $http.get("http://private-6b36d-testtechniquefront.apiary-mock.com/payments")
    .then(function(response) {
      console.log(response.data);
      $scope.myPaiements = response.data;
    });
  }

  $scope.getProducts = function() {
    $http.get("https://private-6b36d-testtechniquefront.apiary-mock.com/articles")
    .then(function(response) {
      console.log(response.data);
      $scope.myProducts = response.data;
    });
  }

  $scope.getBalance();
  $scope.getPaiements();
  $scope.getProducts();
});
