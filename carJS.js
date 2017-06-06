$(document).ready(function(){

	var dir = "uploads/";
	var png = ".png";
	var jpg = ".jpg";
	var gif = ".gif";

	$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //find all image files in folder
        				if($(data).find("a:contains(" + png  + ")")){
				        	$(data).find("a:contains(" + png  + ")").each(function() {

        					var filename = this.href.replace(window.location.host, "").replace("http:///", "").
        					replace("JQuery/Carousel/", "");

        					$("ul").append($("<li><a href='#'><img src=" + dir + filename + "></img></a></li>"));
        					});
        				}

        				if($(data).find("a:contains(" + jpg  + ")")){
        					$(data).find("a:contains(" + jpg  + ")").each(function() {

        					var filename = this.href.replace(window.location.host, "").replace("http:///", "").
        					replace("JQuery/Carousel/", "");

        					$("ul").append($("<li><a href='#'><img src=" + dir + filename + "></img></a></li>"));
        					});
        				}

        				if($(data).find("a:contains(" + gif  + ")")){
        					$(data).find("a:contains(" + gif  + ")").each(function() {

        					var filename = this.href.replace(window.location.host, "").replace("http:///", "").
        					replace("JQuery/Carousel/", "");

        					$("ul").append($("<li><a href='#'><img src=" + dir + filename + "></img></a></li>"));
        					});
        				}
			}
	});

		$(document).bind("ajaxComplete", function() {
			$('#jquery-carousel li').first().addClass('active');

			$('#jquery-carousel .next a').on("click",function(e){
				e.preventDefault();
				e.stopPropagation();
				next();
			});


			$('#jquery-carousel .prev a').on("click",function(e){
				e.preventDefault();
				e.stopPropagation();
				prev();
			});

			var auto = setInterval(function() { 
				next()	}, 6000);
	});
});

function next (){

	var currentSlide = $('#jquery-carousel li.active');
	var nextSlide = $('#jquery-carousel li.active').next();

	currentSlide.removeClass('active');

	if (nextSlide.length === 0) {
		nextSlide = $('#jquery-carousel li').first();
	}
	nextSlide.addClass('active');
}

function prev (){
	var currentSlide = $('#jquery-carousel li.active');
	var prevSlide = $('#jquery-carousel li.active').prev();

	currentSlide.removeClass('active');

	if (prevSlide.length === 0) {
		prevSlide = $('#jquery-carousel li').last();
	}
	prevSlide.addClass('active');
}