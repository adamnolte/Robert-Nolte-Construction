var menuOpen = false;
var navChangeDist = 1.5;
$(document).ready(function() {
	$(window).load(function(){
		setScrollReveal();
		setMenuButtonClick();
		setContactForm();
	});
});

$(window).on("scroll load resize", function(){
	checkScroll();
});

function checkScroll(){
    var startY = $('.navbar').height() * navChangeDist; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("navbar-scrolled");
		$('.navbar').removeClass("navbar-noscroll");
    }else if(!menuOpen){
		$('.navbar').addClass("navbar-noscroll");
        $('.navbar').removeClass("navbar-scrolled");		
    }
}

function setScrollReveal(){
	window.sr = new ScrollReveal({duration: 1000, scale: 1, distance: '40px', easing: 'ease'});
	if($(window).width() >= 768){
		sr.reveal('.reveal-left', {origin: 'left'});
		sr.reveal('.reveal-right', {origin: 'right'});
		sr.reveal('.reveal-bottom', {origin: 'bottom'});
	}
	else {
		sr.reveal('.reveal-left', {origin: 'bottom'});
		sr.reveal('.reveal-right', {origin: 'bottom'});
		sr.reveal('.reveal-bottom', {origin: 'bottom'});
	}
}

function setMenuButtonClick() {
	$('.menu-button').click(function () {
		var startY = $('.navbar').height() * navChangeDist;
		console.log('got here');
		if($(window).scrollTop() <= startY && menuOpen){
			$('.navbar').addClass("navbar-noscroll");
			$('.navbar').removeClass("navbar-scrolled");
			menuOpen = false;
		}
		else{
			$('.navbar').addClass("navbar-scrolled");
			$('.navbar').removeClass("navbar-noscroll");
			if(menuOpen){
				menuOpen = false;
			}
			else{
				menuOpen = true;
			}
		}
	});
	
}

function setContactForm(){
	$(".contact-form").submit(function(){
		$('.contact-wrapper').hide();
		$('.contact-sending').show();
		var data = {
			name : $('#myname').val(),
			email : $('#myemail').val(),
			subject : $('#mysubject').val(),
			message : $('#mymessage').val()
		};
		console.log(data);
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: data,
			success: function(e){
				if(e === 'success'){
					$('.contact-sending').hide();
					$('.contact-success').show();
				}
				else{
					$('.contact-sending').hide();
					$('.contact-wrapper').show();
					alert(e);
				}
			}
		});
		return false;
	});
}