'use strict';

angular.module('ialDashboardApp')
  .controller('DashboardCtrl', function ($scope, $routeParams) {
  	var categories = {
  		"team-wellness"        : "Team Wellness",
  		"tecnique+stragegy"    : "Tecnique & Stragegy",
  		"coaching-craft"       : "Coaching Craft",
  		"operations"           : "Operations",
  		"fitness+conditioning" : "Fitness & Conditioning"
  	};

  	var notes = [
  		{
  			dates    : "Sept 28 - Nov 1",
  			desc     : "Assessing the mood...",
  			interval : "Practice Session",
  			unit     : "Rating",
  			calc     : "Most recent",
  			comp     : "Avg. for Wk/Losomething",
  			note     : "This is a note!"
  		},
  		{
  			dates    : "Sept 30 - Nov 15",
  			desc     : "Coching Stagg...",
  			interval : "Scrimmage",
  			unit     : "Rating",
  			calc     : "Most recent",
  			comp     : "Avg. for Wk/Losomething",
  			note     : "This is the other note!"
  		}
  	];

  	$scope.notes = notes;

  	var noteIndex; //tracking active note index
  	$scope.getNote = function(index){
  		noteIndex = index;
  		$scope.activeNote = $scope.notes[index].note;
  	}

  	$scope.saveNote = function(){
  		console.log(noteIndex, $scope.activeNote);
  		$scope.notes[noteIndex].note = $scope.activeNote;
  	}

  	if($routeParams.category){
  		$scope.category = categories[$routeParams.category];
  	}

  });
