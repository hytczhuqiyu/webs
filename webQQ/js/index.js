$(function(){
	$(".XhS").click(function(){
		$(".XHS").removeClass("active");
		$(this).addClass("active");
		var m=$(this).attr("pid");
		$(".first").removeClass("active");
		$(".moban"+m).addClass("active");
	});


	$(".menu").click(function(){
		var a=$(this).find(".menuUl").attr("yon");
		if(a==0){
			$(this).find(".menuUl").slideDown();
			$(this).find(".menuUl").attr("yon",1)
		}
		else{
			$(this).find(".menuUl").slideUp();
			$(this).find(".menuUl").attr("yon",0)
		}
	});

});
