(function(){
	angular.module("Work-schedule").directive("createWorker",createWorker);
	
	function createWorker(){
		return{
			templateUrl:"app/templates/createWorker.html",
			link:function(scope,element,attr){
				
			scope.saveData = function() {
					console.log(scope.workerName)
					console.log(scope.jobTitle)
					
					var worker = {
						name : scope.name,
						jobTitle : scope.jobTitle
					}
					console.log(worker)
					var JSONworker = JSON.stringify(worker);
					localStorage.setItem("worker", JSONworker)

				}
				scope.getData = function() {
					var worker = localStorage.getItem("worker")
					var parseworker = JSON.parse(worker);
					alert(parseworker.name);
				}
			}
		
	};
	
	
}})();
