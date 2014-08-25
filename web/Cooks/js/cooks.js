$(function(){
	$(".disc").click(function(){
		index=$(this).attr("picIndex");
		showFlashImage();
	});
	setInterval("showFlashImage()",3000);

	$(".current").hover(function(){
		$(this).find(".sub-menu").css("display","block")
	},function(){
		$(this).find(".sub-menu").css("display","")
	});

	$(".one").hover(function(){
		$(this).find(".ph").css({
			"background-color":"#FFF",
			"color":"#333"
		});
	},function(){
		$(this).find(".ph").css({
			"background-color":"",
			"color":""
		});		
	});
});

var index=2
function showFlashImage(){
	$("#beijing").css("background-image",'url("images/'+index+'.png")');
	$(".disc").removeClass("active");
	$("#controlSpan"+index).addClass("active");
	index++;
	if (index==5) {
		index=1
	};
}