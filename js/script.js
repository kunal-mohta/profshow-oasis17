window.onclick = function(){document.documentElement.webkitRequestFullscreen();}
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

                        $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},500);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.webkitAnimation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; setTimeout(function(){animationrunning=0}, 1000);}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.webkitAnimation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.mozAnimation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('mozAnimationEnd', function(){a.style.mozAnimation = ""; setTimeout(function(){animationrunning=0}, 1000);}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.mozAnimation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('mozAnimationEnd', function(){b.style.mozAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.animation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('animationend', function(){a.style.animation = ""; setTimeout(function(){animationrunning=0}, 1000);}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.animation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('animationend', function(){b.style.animation = ""}, false);
                    counter--;

                    // $('.name').css('color','#347f6c');
                    // document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
                    }

                    scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            }

            else if(delta<0){
                if(counter >= (artistCount-1)){}

                    else{
                        animationrunning--;

                        $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},500);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.webkitAnimation = "scrollUpper 0.5s linear";
                        x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; setTimeout(function(){animationrunning=0}, 1000);}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.webkitAnimation = "scrollLower 0.5s linear";
                        y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.mozAnimation = "scrollUpper 0.5s linear";
                        x.addEventListener('mozAnimationEnd', function(){x.style.mozAnimation = ""; setTimeout(function(){animationrunning=0}, 1000);}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.mozAnimation = "scrollLower 0.5s linear";
                        y.addEventListener('mozAnimationEnd', function(){y.style.mozAnimation = ""}, false);


                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.animation = "scrollUpper 0.5s linear";
                        x.addEventListener('animationend', function(){x.style.animation = ""; setTimeout(function(){animationrunning=0}, 1000);}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.animation = "scrollLower 0.5s linear";
                        y.addEventListener('animationend', function(){y.style.animation = ""}, false);
                        counter++;

                    //     $('.name').css('color','#347f6c');
                    // document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
                    }

                    scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            }
        }

    });

	var x1;
	document.body.addEventListener("touchstart", function(e){
        e.preventDefault();
		x1 = e.changedTouches[0].pageX;
	}, false);

    document.body.addEventListener("touchend", function(e){
        e.preventDefault();
        var delta = e.changedTouches[0].pageX - x1;
        if(animationrunning<0){return false;}

        if(delta > 0){
			if(counter <= 0){return false;}

                else{
                    animationrunning--;

                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},500);

                	var a = document.getElementsByClassName("artist-info")[counter];
                	a.style.webkitAnimation = "scrollUpper 0.5s linear reverse";
                	a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var b = document.getElementsByClassName("artist-pic")[counter];
                	b.style.webkitAnimation = "scrollLower 0.5s linear reverse";
                	b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);

                    var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.mozAnimation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('mozAnimationEnd', function(){a.style.mozAnimation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.mozAnimation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('mozAnimationEnd', function(){b.style.mozAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.animation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('animationend', function(){a.style.animation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.animation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('animationend', function(){b.style.animation = ""}, false);
                	counter--;

                    // $('.name').css('color','#347f6c');
                    // document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
                	}
                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
        }

        else if(delta < 0){
        	if(counter >= (artistCount-1)){return false;}

                else{
                    animationrunning--;

                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},500);

                	var x = document.getElementsByClassName("artist-info")[counter+1];
                	x.style.webkitAnimation = "scrollUpper 0.5s linear";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter+1];
                	y.style.webkitAnimation = "scrollLower 0.5s linear";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.mozAnimation = "scrollUpper 0.5s linear";
                        x.addEventListener('mozAnimationEnd', function(){x.style.mozAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.mozAnimation = "scrollLower 0.5s linear";
                        y.addEventListener('mozAnimationEnd', function(){y.style.mozAnimation = ""}, false);


                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.animation = "scrollUpper 0.5s linear";
                        x.addEventListener('animationend', function(){x.style.animation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.animation = "scrollLower 0.5s linear";
                        y.addEventListener('animationend', function(){y.style.animation = ""}, false);
                	counter++;

                    // $('.name').css('color','#347f6c');
                    // document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
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

                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},500);


                	var a = document.getElementsByClassName("artist-info")[counter];
                	a.style.webkitAnimation = "scrollUpper 0.5s linear reverse";
                	a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var b = document.getElementsByClassName("artist-pic")[counter];
                	b.style.webkitAnimation = "scrollLower 0.5s linear reverse";
                	b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);

                    var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.mozAnimation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('mozAnimationEnd', function(){a.style.mozAnimation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.mozAnimation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('mozAnimationEnd', function(){b.style.mozAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.animation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('animationend', function(){a.style.animation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.animation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('animationend', function(){b.style.animation = ""}, false);
                	counter--;

                    // $('.name').css('color','#347f6c');
                    // document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
                	}
                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            break;

            case arrow.right:

                if(counter >= (artistCount-1)){return false;}

                else{
                    animationrunning--;

                	$('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},500);

                	var x = document.getElementsByClassName("artist-info")[counter+1];
                	x.style.webkitAnimation = "scrollUpper 0.5s linear";
                	x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                	var y = document.getElementsByClassName("artist-pic")[counter+1];
                	y.style.webkitAnimation = "scrollLower 0.5s linear";
                	y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.mozAnimation = "scrollUpper 0.5s linear";
                        x.addEventListener('mozAnimationEnd', function(){x.style.mozAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.mozAnimation = "scrollLower 0.5s linear";
                        y.addEventListener('mozAnimationEnd', function(){y.style.mozAnimation = ""}, false);


                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.animation = "scrollUpper 0.5s linear";
                        x.addEventListener('animationend', function(){x.style.animation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.animation = "scrollLower 0.5s linear";
                        y.addEventListener('animationend', function(){y.style.animation = ""}, false);


                	counter++;

                    // $('.name').css('color','#347f6c');
                    // document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
                }

                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            break;
        }
    }

    });

    $('.left-arrow').on('click',function(){
        if(animationrunning<0){return false;}

        else{
            if(counter <= 0){return false;}

                else{
                    animationrunning--;

                    $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter-1)},500);

                    var a = document.getElementsByClassName("artist-info")[counter];
                    a.style.webkitAnimation = "scrollUpper 0.5s linear reverse";
                    a.addEventListener('webkitAnimationEnd', function(){a.style.webkitAnimation = ""; animationrunning=0;}, false);

                    var b = document.getElementsByClassName("artist-pic")[counter];
                    b.style.webkitAnimation = "scrollLower 0.5s linear reverse";
                    b.addEventListener('webkitAnimationEnd', function(){b.style.webkitAnimation = ""}, false);

                    var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.mozAnimation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('mozAnimationEnd', function(){a.style.mozAnimation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.mozAnimation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('mozAnimationEnd', function(){b.style.mozAnimation = ""}, false);

                        var a = document.getElementsByClassName("artist-info")[counter];
                        a.style.animation = "scrollUpper 0.5s linear reverse";
                        a.addEventListener('animationend', function(){a.style.animation = ""; animationrunning=0;}, false);

                        var b = document.getElementsByClassName("artist-pic")[counter];
                        b.style.animation = "scrollLower 0.5s linear reverse";
                        b.addEventListener('animationend', function(){b.style.animation = ""}, false);
                    counter--;

                    // $('.name').css('color','#347f6c');
                    // document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
                    }
                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
        }
    });

    $('.right-arrow').on('click',function(){
        if(animationrunning<0){return false;}

        else{
            if(counter >= (artistCount-1)){return false;}

                else{
                    animationrunning--;

                    $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(counter+1)},500);

                    var x = document.getElementsByClassName("artist-info")[counter+1];
                    x.style.webkitAnimation = "scrollUpper 0.5s linear";
                    x.addEventListener('webkitAnimationEnd', function(){x.style.webkitAnimation = ""; animationrunning=0;}, false);

                    var y = document.getElementsByClassName("artist-pic")[counter+1];
                    y.style.webkitAnimation = "scrollLower 0.5s linear";
                    y.addEventListener('webkitAnimationEnd', function(){y.style.webkitAnimation = ""}, false);

                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.mozAnimation = "scrollUpper 0.5s linear";
                        x.addEventListener('mozAnimationEnd', function(){x.style.mozAnimation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.mozAnimation = "scrollLower 0.5s linear";
                        y.addEventListener('mozAnimationEnd', function(){y.style.mozAnimation = ""}, false);


                        var x = document.getElementsByClassName("artist-info")[counter+1];
                        x.style.animation = "scrollUpper 0.5s linear";
                        x.addEventListener('animationend', function(){x.style.animation = ""; animationrunning=0;}, false);

                        var y = document.getElementsByClassName("artist-pic")[counter+1];
                        y.style.animation = "scrollLower 0.5s linear";
                        y.addEventListener('animationend', function(){y.style.animation = ""}, false);


                    counter++;

                //     $('.name').css('color','#347f6c');
                //     document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
                }

                scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
        }
    });


    var infoopen = 0;
    $('.artist-info').on('click',function(){
    if(infoopen == 1){return false;}

    else if(screen.width >= 1025 || (window.matchMedia("(orientation: landscape)").matches)){
        this.style.height = "70vh";
        this.style.width = "48vw";
        this.style.top="10%";
        var parent = this.parentNode;
        var infoPic = parent.childNodes[3];
        infoPic.style.transform="translateY(-60vh)";
        infoPic.style.webkitTransform="translateY(-60vh)";
        infoPic.style.mozTransform="translateY(-60vh)";
        animationrunning=-1;

        for(i=0;i<artistCount;i++){
            document.getElementsByClassName("close")[i].style.display = "block";
            document.getElementsByClassName("more-info")[i].style.display = "block";
            document.getElementsByClassName("discover-more")[i].style.display = "none";

        }
        infoopen = 1;
    }
    else{
        this.style.height = "50vh";
        this.style.width = "80vw";
        this.style.top="25%";
        var parent = this.parentNode;
        var infoPic = parent.childNodes[3];
        infoPic.style.transform="translateY(-55vh)";
        infoPic.style.webkitTransform="translateY(-55vh)";
        infoPic.style.mozTransform="translateY(-55vh)";
        var x = document.getElementsByClassName("close")[0];
        x.style.display="block";
        animationrunning=-1;

        for(i=0;i<artistCount;i++){
            document.getElementsByClassName("close")[i].style.display = "block";
            document.getElementsByClassName("more-info")[i].style.display = "block";
            document.getElementsByClassName("discover-more")[i].style.display = "none";

        }
        infoopen = 1;
    }
    });

    $('.close').on('click',function(e){
        //prevent the call of external div click funtion and give priority to inside div click event
        if (!e) var e = window.event;
        if (e.stopPropagation) e.stopPropagation();

    if(screen.width >= 1025 || (window.matchMedia("(orientation: landscape)").matches)){

        animationrunning=0;
        this.style.display="none";
        for(i=0;i<artistCount;i++)
        {   var x = document.getElementsByClassName("artist-info")[i];
            x.style.height="40vh";
            x.style.top="27vh";
            x.style.width="45vw";
            var y = document.getElementsByClassName("artist-pic")[i];
            y.style.transform="translateY(0vh)";
            y.style.webkitTransform="translateY(0vh)";
            y.style.mozTransform="translateY(0vh)";

            document.getElementsByClassName("more-info")[i].style.display = "none";
            document.getElementsByClassName("close")[i].style.display = "none";
            document.getElementsByClassName("discover-more")[i].style.display = "block";

        }
        infoopen = 0;
    }
    else{
        animationrunning=0;
        this.style.display="none";
        for(i=0;i<artistCount;i++)
        {   var x = document.getElementsByClassName("artist-info")[i];
            x.style.height="40vh";
            x.style.top="25.8vh";
            x.style.width="75vw";
            var y = document.getElementsByClassName("artist-pic")[i];
            y.style.transform="translateY(0vh)";
            y.style.webkitTransform="translateY(0vh)";
            y.style.mozTransform="translateY(0vh)";

            document.getElementsByClassName("more-info")[i].style.display = "none";
            document.getElementsByClassName("close")[i].style.display = "none";
            document.getElementsByClassName("discover-more")[i].style.display = "block";

        }
        infoopen = 0;
    }
    });

    document.addEventListener("click", function(){
        if(!document.querySelectorAll(".artist-info")[counter].contains(event.target) && infoopen == 1){
            document.querySelectorAll(".close")[counter].click();
            infoopen = 0;
        }
    });//click outside to close the info

    $('.show-artists').on('click',function(){
        for(i=0,delay=0;i<artistCount;i++,delay+=0.1){
            document.getElementsByClassName("name")[i].style.display = "block";

            document.getElementsByClassName("name")[i].style.webkitAnimation = "appear 0.4s ease-out forwards";
            document.getElementsByClassName("name")[i].style.webkitAnimationDelay = delay+"s";

            document.getElementsByClassName("name")[i].style.mozAnimation = "appear 0.4s ease-out forwards";
            document.getElementsByClassName("name")[i].style.mozAnimationDelay = delay+"s";

            document.getElementsByClassName("name")[i].style.animation = "appear 0.4s ease-out forwards";
            document.getElementsByClassName("name")[i].style.animationDelay = delay+"s";
        }

        document.getElementsByClassName("name")[counter].style.color = "#70c5b0";
    });

    $('.name').on('click',function(){
        if(animationrunning<0){return false;}

        else
        {
            this.id = "temp";
            $('.name').css('color','#347f6c');
            for(i=0;i<artistCount;i++){
                if(document.getElementsByClassName("name")[i].id == "temp"){
                    break;
                }
            }

            $('#main-wrapper').animate({scrollLeft: ((mainWrapper.scrollWidth)/artistCount)*(i)},500);
            this.removeAttribute("id");
            counter = i;
            scrollBar.style.width = ((60/(artistCount-1))*(counter))+"vw";
            document.getElementsByClassName("name")[i].style.color = "#70c5b0";
        }
    });

    $('.a').on('click',function(){
        document.getElementById("artists").style.top = "-10vh";
    });

    $('.s').on('click',function(){
        document.getElementById("schedule").style.top = "-10vh";
    });

    $('.c').on('click',function(){
        document.getElementById("contact-us").style.top = "-10vh";
    });

    $('.artist-close').on('click',function(){
        document.getElementById("artists").style.top = "-100vh";
    });

    $('.schedule-close').on('click',function(){
        document.getElementById("schedule").style.top = "-100vh";
    });

    $('.contact-close').on('click',function(){
        document.getElementById("contact-us").style.top = "-100vh";
    });

    $('.artist-info').mousewheel(function(e,delta){
        if(infoopen == 1){
            for(i=0;i<artistCount;i++){
                document.getElementsByClassName("artist-info")[i].scrollTop += (-delta*5);
            }
        }
    });
});
