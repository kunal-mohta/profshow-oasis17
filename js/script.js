$(document).ready(function(){

	var mainWrapper = document.getElementById("main-wrapper");
	var artistCount = mainWrapper.childElementCount;
    var scrollBar = document.getElementsByClassName("complete")[0];
	var counter = 0;
    var animationrunning =0;

	$('#main-wrapper').mousewheel(function(e, delta) {
        //sthis.scrollLeft -= (delta*50);
        e.preventDefault();
        if(animationrunning<0){return false;}

        else{
            if(delta>0){
                if(counter <= 0){}

                    else{
                        animationrunning--;
                  
                        $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},1000);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.webkitAnimation = "scrollUpper 1s linear reverse";
                        a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.webkitAnimation = "scrollLower 1s linear reverse";
                        b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);
                    counter--;
                    }

                    scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            }
            
            else if(delta<0){
                if(counter >= (artistCount-1)){}

                    else{
                        animationrunning--;

                        $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},1000);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.webkitAnimation = "scrollUpper 1s linear";
                        x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.webkitAnimation = "scrollLower 1s linear";
                        y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        counter++;
                    }

                    scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            }
        }
        //$('#main-wrapper').mousewheel(function(e,delta){return false;})

    });
   
	var x1;
	document.body.addEventListener("touchstart", function(e){
		x1 = e.changedTouches[0].pageX;
	}, false);

    document.body.addEventListener("touchend", function(e){
        var delta = e.changedTouches[0].pageX - x1;

        if(delta > 0){
			if(counter <= 0){return false;}

                else{
                    animationrunning--;
                    
                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},1000);

                	var a = document.getElementsByClassName("artist-info")[counter];
                	a.style.webkitAnimation = "scrollUpper 1s linear reverse";                  
                	a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var b = document.getElementsByClassName("artist-pic")[counter];
                	b.style.webkitAnimation = "scrollLower 1s linear reverse";
                	b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);
                	counter--;
                	}
                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";        	
        }

        else if(delta < 0){
        	if(counter >= (artistCount-1)){return false;}

                else{
                    animationrunning--;

                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},1000);

                	var x = document.getElementsByClassName("artist-info")[counter+1];
                	x.style.webkitAnimation = "scrollUpper 1s linear";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter+1];
                	y.style.webkitAnimation = "scrollLower 1s linear";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                	counter++;
                }

                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
        }
    }, false);

	$(document).keydown(function (e) {

        if(animationrunning<0){return false;}
        else{
        var keyCode = e.keyCode || e.which,
        arrow = {left: 37, up: 38, right: 39, down: 40 };

        switch (keyCode) {

            case arrow.left: 

                if(counter <= 0){return false;}

                else{
                    animationrunning--;
                    
                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},1000);

                	var a = document.getElementsByClassName("artist-info")[counter];
                	a.style.webkitAnimation = "scrollUpper 1s linear reverse";                  
                	a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var b = document.getElementsByClassName("artist-pic")[counter];
                	b.style.webkitAnimation = "scrollLower 1s linear reverse";
                	b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);
                	counter--;
                	}
                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            break;

            case arrow.right: 
                
                if(counter >= (artistCount-1)){return false;}

                else{
                    animationrunning--;

                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},1000);

                	var x = document.getElementsByClassName("artist-info")[counter+1];
                	x.style.webkitAnimation = "scrollUpper 1s linear";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter+1];
                	y.style.webkitAnimation = "scrollLower 1s linear";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                	counter++;
                }

                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            break;
        }
    }

    });

    $('.artist-info').on('click',function(){
    this.style.height = "70vh";
    this.style.width = "48vw";
    this.style.top="10%";
    var parent = this.parentNode;
    var infoPic = parent.childNodes[3];
    infoPic.style.transform="translateY(-65vh)";
    var x = document.getElementsByClassName("close")[0];
    x.style.opacity="100";
    animationrunning=-1;
    });

    $('.close').on('click',function(){
    animationrunning=0;
    this.style.opacity="0";
    for(i=0;i<artistCount;i++)
    {   var x = document.getElementsByClassName("artist-info")[i];
        x.style.height="35vh";
        x.style.top="25%";
        x.style.width="40vw";
        var y = document.getElementsByClassName("artist-pic")[i];
        y.style.transform="translateY(0vh)";
    }
    });

});