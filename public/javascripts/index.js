var mainModule = angular.module('mainModule', []);

mainModule.controller( 'lyricsApp', ['$scope', '$window', '$http', function($scope, $window, $http) {
	$scope.title = "Lyricism";
	$scope.subtitle = "Enter the name of your favorite artist to find their most influential lyrics";
	$scope.searchTerm = "";
	$scope.songs = {};
	$scope.url = $window.location.origin;
	
	$scope.sendRequest = function() {
		var options = {
			url: $scope.url + '/searchArtist',
			method: "POST",
			data: { "query" : $scope.searchTerm }
		}
		
		$http(options).then(
			function success(res) {
				alert(JSON.stringify(res));
			}, function error(res) {
				alert(JSON.stringify(res));
			}
		)
	}
}]);