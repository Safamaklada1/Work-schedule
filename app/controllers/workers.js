(function(){
	
	angular.module("Work-schedule").controller("workers",workers)
	function workers($scope)
	{
		var worker;
		var Worker= function(name,jobTitle){
			var name=name
			var jobTitle=jobTitle
			var shift1;
			var shift2;
			var shift3;
			var shift4;
			
			function setShifts(shift1,shift2,shift3,shift4)
			{
				this.shift1=shift1;
				this.shift2=shift2;
				this.shift3=shift3;
				this.shift4=shift4;
			}
			function getShifts(){return [this.shift1,this.shift2,this.shift3,this.shift4]};
			function getName(){return name};
			function getJobTitle(){return jobTitle};
			
			return{
				setShifts:setShifts,
				getName:getName,
				getJobTitle:getJobTitle
			}
			
		}
		
		$scope.createWorker=function(name,jobTitle){
			
			 worker= new Worker(name,jobTitle)
		}
		$scope.setWorkerShifts=function(shift1,shift2,shift3,shift4){
			
			worker.setShifts(shift1,shift2,shift3,shift4)
		}
		
		$scope.save=function(){
			//save to localStrage in array
		}
	}
	
})()
