$(document).ready(function(){

//attach animation function to click event 
	

	$(ball).click(function(){
		console.log("clicked!");
		$(this).toggle( "explode", 
                      {pieces: 9}, 1000 );	
		$("#result").append("<h2>you got the DISCO BALL </br>you win 10 points</h2></br>  <button id = 'button'>Dont let the fun end here. Play again. Why not?</button>");
		
		var button = document.getElementById("button");
		
		$(button).click(function(){
			javascript:location.reload(true); 
			
		});
			
	
	});


	// work out new position - now this works
	
	var makeNewPosition = function(){   
		
		var $container1 = ($container1 || $(window));
		var h = $container1.height() - 20;
		var w = $container1.width() - 20;
		
		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w); 
		
		 return [nh, nw];
		 console.log('tootlt');

	};
	
	//move it to this position
	
	function animateDiv() {
    	var $target1 = $('#ball');
    	var newq = makeNewPosition($target1.parent());
    	var oldq = $target1.offset();
    	var speed = calcSpeed([oldq.top, oldq.left], newq);
    	
    	console.log('this ran' + oldq);

    	$('#ball').animate({
        	top: newq[0],
        	left: newq[1]
    	},  2000, function() {
        	animateDiv();
    		});

	};
	
	//speed something 
	
	function calcSpeed(prev, next) {

    	var x = Math.abs(prev[1] - next[1]);
    	var y = Math.abs(prev[0] - next[0]);

    	var greatest = x > y ? x : y;

    	var speedModifier = 0.1;

    	var speed = Math.ceil(greatest / speedModifier);

    	return speed;
		}

	animateDiv(); 
	makeNewPosition(); 

	// refresh button 
	
		
	



});
