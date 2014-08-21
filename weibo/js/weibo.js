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
		var a=$(this).attr("emid");
		/*$(this).parent().parent().next().find(".posul").animate({"left":"-380px"},1000);*/
		$("#remen"+a).animate({"left":"-380px"},1000);
		$("#spmid"+a).html("2/2");
		$("#leftem"+a).css("background-position"," -175px -100px");
		$("#rightem"+a).css("background-position"," -183px -112px");
	});
	$(".spleft").click(function(){
		var b=$(this).attr("emid");
		/*$(this).parent().parent().next().find(".posul").animate({"left":"-0px"},1000);*/
		$("#remen"+b).animate({"left":"0px"},1000);
		$("#spmid"+b).html("1/2");
		$("#leftem"+b).css("background-position"," -175px -112px");
		$("#rightem"+b).css("background-position"," -183px -100px");
	});
});