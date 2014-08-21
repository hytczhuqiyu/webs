$(function(){
	$("#top-logo").hover(function(){
		$(".link").css("display","block");
	},function(){
		$(".link").css("display","none");
	});


	$(".title").hover(function(){
		$(this).css("background-color","#FFF");
		$(this).find(".titleA").css("color","#000");
		$(this).find(".botlist").show();
	},function(){
		$(this).find(".botlist").hide();
		$(this).css("background-color","");
		$(this).find(".titleA").css("color","");
	});

	$(".spright").click(function(){
		$(this).parent().parent().next().find(".posul").animate({"left":"-380px"},1000);
	});
	$(".spleft").click(function(){
		$(this).parent().parent().next().find(".posul").animate({"left":"-0px"},1000);
	});
});