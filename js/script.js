$(document).ready(function(){

	var mainWrapper = document.getElementById("main-wrapper");
	var artistCount = mainWrapper.childElementCount;
	var counter = 0;

	/*$('#main-wrapper').mousewheel(function(e, delta) {
		this.scrollLeft -= (delta * 5);
    	e.preventDefault();
    	console.log(delta);

	});*/

	$('#main-wrapper').on("scroll", function(){
		
	});

	$(document).keydown(function (e) {
        var keyCode = e.keyCode || e.which,
        arrow = {left: 37, up: 38, right: 39, down: 40 };

        switch (keyCode) {

            case arrow.left: 

                if(counter <= 0){}

                else{
                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},1000);

                	var x = document.getElementsByClassName("artist-info")[counter];
                	x.style.webkitAnimation = "scrollUpper 1s linear reverse";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter];
                	y.style.webkitAnimation = "scrollLower 1s linear reverse";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);
                counter--;
                }

            break;

            case arrow.right: 
                
                if(counter >= (artistCount-1)){}
                //else if(counter == (artistCount-1)){
                //	$('#main-wrapper').animate({scrollLeft: mainWrapper.innerWidth()},1000);
                //	counter++;
                //}
                else{
                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},1000);

                	var x = document.getElementsByClassName("artist-info")[counter+1];
                	x.style.webkitAnimation = "scrollUpper 1s linear";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter+1];
                	y.style.webkitAnimation = "scrollLower 1s linear";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                	counter++;
                }

            break;
        }
    });

});