(function(){
	angular.module("Work-schedule").controller("workersList",workersList);
	
	function workersList($scope){
		$scope.workers={name:$scope.name,jobTitle:$scope.jobTitle};
		// console.log($scope.workers.name)
		
	}
})();
