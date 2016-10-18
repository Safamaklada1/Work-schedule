(function(){
	angular.module("Work-schedule").controller("getWorkersList",getWorkersList);
	
	function getWorkersList($scope){
		// $scope.number;
		// $scope.shift=1;
		// $scope.name="safa";
		
		$scope.workerr=function(){
			var item=$scope.number;
			$scope.workerrr= localStorage.getItem(item);
			$scope.parseWorker= JSON.parse($scope.workerrr);
			
			$scope.name1=$scope.parseWorker.name;
			$scope.shift1=$scope.parseWorker.shift;
		};
		
		
	}
	
})();
