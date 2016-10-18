(function(){
	angular.module("Work-schedule").controller("createWorkers",createWorkers);
	
	function createWorkers($scope){
		$scope.number;
		$scope.shift;
		$scope.name;
		
		$scope.worker=function(){
			var workerr={shift:$scope.shift,name:$scope.name};
			// console.log("shift:",$scope.shift,"name:",$scope.name);
			localStorage.setItem($scope.number,JSON.stringify(workerr));
		};
		$scope.getList=function(){
			var item=$scope.number;
			$scope.getWorker=localStorage.getItem(item);
			$scope.parsedWorkerList=JSON.parse($scope.getWorker);
			
		};
		for (numb=0; numb < 100; numb++) {
		  $scope.number=$scope.number+numb;
		};
	}
	
})();
