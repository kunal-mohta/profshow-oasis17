$(document).ready(function(){

	var mainWrapper = document.getElementById("main-wrapper");
	var artistCount = mainWrapper.childElementCount;
    var scrollBar = document.getElementsByClassName("complete")[0];
	var counter = 0;
    var animationrunning =0;

    document.getElementsByClassName("artist-wrap")[0].style.webkitAnimation = "afterload 1s linear forwards";
    document.getElementsByClassName("artist-wrap")[0].style.webkitAnimationDelay = "2s";
    document.getElementById("prof-text").style.webkitAnimation = "afterload 1s linear forwards";
    document.getElementById("prof-text").style.webkitAnimationDelay = "0.5s";

    document.getElementsByClassName("artist-wrap")[0].style.mozAnimation = "afterload 1s linear forwards";
    document.getElementsByClassName("artist-wrap")[0].style.mozAnimationDelay = "2s";
    document.getElementById("prof-text").style.mozAnimation = "afterload 1s linear forwards";
    document.getElementById("prof-text").style.mozAnimationDelay = "0.5s";

    document.getElementsByClassName("artist-wrap")[0].style.animation = "afterload 1s linear forwards";
    document.getElementsByClassName("artist-wrap")[0].style.animationDelay = "2s";
    document.getElementById("prof-text").style.animation = "afterload 1s linear forwards";
    document.getElementById("prof-text").style.animationDelay = "0.5s";    

	$('#main-wrapper').mousewheel(function(e, delta) {
        
        e.preventDefault();
        if(animationrunning<0){return false;}

        else{
            if(delta>0){
                if(counter <= 0){}

                    else{
                        animationrunning--;
                  
                        $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},1000);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.webkitAnimation = "scrollUpper 0.9s linear reverse";
                        a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;console.log(animationrunning);}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.webkitAnimation = "scrollLower 0.9s linear reverse";
                        b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.mozAnimation = "scrollUpper 0.9s linear reverse";
                        a.addEventListener('mozAnimationEnd', function(){a.style.mozAnimation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.mozAnimation = "scrollLower 0.9s linear reverse";
                        b.addEventListener('mozAnimationEnd', function(){b.style.mozAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.animation = "scrollUpper 0.9s linear reverse";
                        a.addEventListener('animationend', function(){a.style.animation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.animation = "scrollLower 0.9s linear reverse";
                        b.addEventListener('animationend', function(){b.style.animation = ""}, false);
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
                        x.style.webkitAnimation = "scrollUpper 0.9s linear";
                        x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.webkitAnimation = "scrollLower 0.9s linear";
                        y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.mozAnimation = "scrollUpper 0.9s linear";
                        x.addEventListener('mozAnimationEnd', function(){x.style.mozAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.mozAnimation = "scrollLower 0.9s linear";
                        y.addEventListener('mozAnimationEnd', function(){y.style.mozAnimation = ""}, false);

                        
                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.animation = "scrollUpper 0.9s linear";
                        x.addEventListener('animationend', function(){x.style.animation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.animation = "scrollLower 0.9s linear";
                        y.addEventListener('animationend', function(){y.style.animation = ""}, false);
                        counter++;
                    }

                    scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            }
        }

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
                	a.style.webkitAnimation = "scrollUpper 0.9s linear reverse";                  
                	a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var b = document.getElementsByClassName("artist-pic")[counter];
                	b.style.webkitAnimation = "scrollLower 0.9s linear reverse";
                	b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);

                    var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.mozAnimation = "scrollUpper 0.9s linear reverse";
                        a.addEventListener('mozAnimationEnd', function(){a.style.mozAnimation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.mozAnimation = "scrollLower 0.9s linear reverse";
                        b.addEventListener('mozAnimationEnd', function(){b.style.mozAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.animation = "scrollUpper 0.9s linear reverse";
                        a.addEventListener('animationend', function(){a.style.animation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.animation = "scrollLower 0.9s linear reverse";
                        b.addEventListener('animationend', function(){b.style.animation = ""}, false);
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
                	x.style.webkitAnimation = "scrollUpper 0.9s linear";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter+1];
                	y.style.webkitAnimation = "scrollLower 0.9s linear";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.mozAnimation = "scrollUpper 0.9s linear";
                        x.addEventListener('mozAnimationEnd', function(){x.style.mozAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.mozAnimation = "scrollLower 0.9s linear";
                        y.addEventListener('mozAnimationEnd', function(){y.style.mozAnimation = ""}, false);

                        
                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.animation = "scrollUpper 0.9s linear";
                        x.addEventListener('animationend', function(){x.style.animation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.animation = "scrollLower 0.9s linear";
                        y.addEventListener('animationend', function(){y.style.animation = ""}, false);
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
                	a.style.webkitAnimation = "scrollUpper 0.9s linear reverse";                  
                	a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var b = document.getElementsByClassName("artist-pic")[counter];
                	b.style.webkitAnimation = "scrollLower 0.9s linear reverse";
                	b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);

                    var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.mozAnimation = "scrollUpper 0.9s linear reverse";
                        a.addEventListener('mozAnimationEnd', function(){a.style.mozAnimation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.mozAnimation = "scrollLower 0.9s linear reverse";
                        b.addEventListener('mozAnimationEnd', function(){b.style.mozAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.animation = "scrollUpper 0.9s linear reverse";
                        a.addEventListener('animationend', function(){a.style.animation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.animation = "scrollLower 0.9s linear reverse";
                        b.addEventListener('animationend', function(){b.style.animation = ""}, false);
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
                	x.style.webkitAnimation = "scrollUpper 0.9s linear";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter+1];
                	y.style.webkitAnimation = "scrollLower 0.9s linear";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.mozAnimation = "scrollUpper 0.9s linear";
                        x.addEventListener('mozAnimationEnd', function(){x.style.mozAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.mozAnimation = "scrollLower 0.9s linear";
                        y.addEventListener('mozAnimationEnd', function(){y.style.mozAnimation = ""}, false);

                        
                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.animation = "scrollUpper 0.9s linear";
                        x.addEventListener('animationend', function(){x.style.animation = ""; animationrunning=0; console.log(animationrunning)}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.animation = "scrollLower 0.9s linear";
                        y.addEventListener('animationend', function(){y.style.animation = ""}, false);


                	counter++;
                }

                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            break;
        }
    }

    });

    $('.artist-info').on('click',function(){

    if(screen.width >= 1025 || (window.matchMedia("(orientation: landscape)").matches)){
        this.style.height = "70vh";
        this.style.width = "48vw";
        this.style.top="10%";
        var parent = this.parentNode;
        var infoPic = parent.childNodes[3];
        infoPic.style.transform="translateY(-60vh)";
        infoPic.style.webkitTransform="translateY(-60vh)";
        infoPic.style.mozTransform="translateY(-60vh)";
        var x = document.getElementsByClassName("close")[0];
        x.style.opacity="100";
        animationrunning=-1;
    }
    else{
        this.style.height = "50vh";
        this.style.width = "80vw";
        this.style.top="25%";
        var parent = this.parentNode;
        var infoPic = parent.childNodes[3];
        infoPic.style.transform="translateY(-50vh)";
        infoPic.style.webkitTransform="translateY(-50vh)";
        infoPic.style.mozTransform="translateY(-50vh)";
        var x = document.getElementsByClassName("close")[0];
        x.style.opacity="100";
        animationrunning=-1;
    }
    });

    $('.close').on('click',function(){
    if(screen.width >= 1025 || (window.matchMedia("(orientation: landscape)").matches)){
        animationrunning=0;
        this.style.opacity="0";
        for(i=0;i<artistCount;i++)
        {   var x = document.getElementsByClassName("artist-info")[i];
            x.style.height="40vh";
            x.style.top="30vh";
            x.style.width="45vw";
            var y = document.getElementsByClassName("artist-pic")[i];
            y.style.transform="translateY(0vh)";
            y.style.webkitTransform="translateY(0vh)";
            y.style.mozTransform="translateY(0vh)";
        }
    }
    else{
        animationrunning=0;
        this.style.opacity="0";
        for(i=0;i<artistCount;i++)
        {   var x = document.getElementsByClassName("artist-info")[i];
            x.style.height="30vh";
            x.style.top="33vh";
            x.style.width="75vw";
            var y = document.getElementsByClassName("artist-pic")[i];
            y.style.transform="translateY(0vh)";
            y.style.webkitTransform="translateY(0vh)";
            y.style.mozTransform="translateY(0vh)";
        }
    }
    });

    $('.show-artists').on('click',function(){
        for(i=0,delay=0;i<artistCount;i++,delay+=0.1){
            document.getElementsByClassName("name")[i].style.webkitAnimation = "appear 0.4s ease-out forwards";
            document.getElementsByClassName("name")[i].style.webkitAnimationDelay = delay+"s";

            document.getElementsByClassName("name")[i].style.mozAnimation = "appear 0.4s ease-out forwards";
            document.getElementsByClassName("name")[i].style.mozAnimationDelay = delay+"s";

            document.getElementsByClassName("name")[i].style.animation = "appear 0.4s ease-out forwards";
            document.getElementsByClassName("name")[i].style.animationDelay = delay+"s";
        }
    });

    $('.name').on('click',function(){
        this.id = "temp";

        for(i=0;i<artistCount;i++){
            if(document.getElementsByClassName("name")[i].id == "temp"){
                break;
            }
        }

        $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(i)},1000);
        this.removeAttribute("id");
        counter = i;
        scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
    }); 

    $('.s').on('click',function(){
        document.getElementById("schedule").style.top = "-10vh";
    });

    $('.c').on('click',function(){
        document.getElementById("contact-us").style.top = "-10vh";
    });
});
    