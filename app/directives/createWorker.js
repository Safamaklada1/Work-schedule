(function(){
	angular.module("Work-schedule").directive("createWorker",createWorker);
	
	function createWorker(){
		return{
			templateUrl:"app/templates/createWorker.html",
			controller:function($scope){
				$scope.save=function(){
					console.log("$scope",$scope)
				}
			},
			link:function(scope,element,attr){				
			scope.saveData = function() {
				var name1=scope.workerName;
				console.log(name1)
				console.log(element);
				console.log("fffff",scope);
					console.log(scope.workerName);
					console.log(scope.jobTitle);
					
					var worker = {
						name : scope.name,
						jobTitle : scope.jobTitle
					};
					console.log(worker);
					var JSONworker = JSON.stringify(worker);
					console.log(JSONworker)
					localStorage.setItem("worker", JSONworker);

			};
				scope.getData = function() {
					var worker = localStorage.getItem("worker");
					var parseworker = JSON.parse(worker);
					alert(parseworker.name);
				};
			}
		
	};
	
	
}})();
