$(function(){
	$(".TitleFR").mouseover(function(){
		$(this).parent().parent().next().hide();
/*		$("*").find(".lm2commomL2Hide1").hide();
		$("*").find(".lm2commomL2Hide2").show();*/
		$(this).parent().parent().next().next().show();
		$(this).css({
			"color":"rgb(69,143,206)",
			"font-weight":"bold",
			"border-top":"2px solid rgb(69,143,206)",
			"border-right":"1px solid rgb(189,215,242)",
			"border-bottom":"0px",
			"background-image":'url("CSS/images/vH2Select.png")',
			"text-decoration":"underline"
			});
		$("*").find(".TitleFL").css({
			"border-top":"0px",
			"font-weight":"normal"
			});

	});
	$(".TitleFL").mouseover(function(){
		/*$(this).parent().parent().next().hide();*/
		$("*").find(".lm2commomL2Hide1").show();
		$("*").find(".lm2commomL2Hide2").hide();
		$(this).css({
			"color":"rgb(69,143,206)",
			"font-weight":"bold",
			"border-top":"2px solid rgb(69,143,206)",
			"border-right":"1px solid rgb(189,215,242)",
			"border-bottom":"0px",
			"background-image":'url("CSS/images/vH2Select.png")',
			"text-decoration":"underline"
			});
		$("*").find(".TitleFR").css({
			"border-top":"0px",
			"font-weight":"normal",
			"text-decoration":"none"
			});
	});
	$(".STitleFR").mouseover(function(){
		$("*").find(".lmRContent2Hide1").hide();
		$("*").find(".lmRContent2Hide2").show();
		$(this).css({
			"color":"rgb(69,143,206)",
			"font-weight":"bold",
			"border-top":"2px solid rgb(69,143,206)",
			"border-right":"1px solid rgb(189,215,242)",
			"border-bottom":"0px",
			"background-image":'url("CSS/images/vH2Select.png")',
			"text-decoration":"underline"
			});
		$("*").find(".STitleFL").css({
			"border-top":"0px",
			"font-weight":"normal",
			"text-decoration":"none"
			});

	});
	$(".STitleFL").mouseover(function(){
		/*$(this).parent().parent().next().hide();*/
		$("*").find(".lmRContent2Hide1").show();
		$("*").find(".lmRContent2Hide2").hide();
		$(this).css({
			"color":"rgb(69,143,206)",
			"font-weight":"bold",
			"border-top":"2px solid rgb(69,143,206)",
			"border-right":"1px solid rgb(189,215,242)",
			"border-bottom":"0px",
			"background-image":'url("CSS/images/vH2Select.png")',
			"text-decoration":"underline"
			});
		$("*").find(".STitleFR").css({
			"border-top":"0px",
			"font-weight":"normal",
			"text-decoration":"none"
			});

 	});




 	/*更换频道*/
 	$("#lm2ll4").hover(function(){
 		$("*").find(".activeP").show();
 	},function(){
 		$("*").find(".activeP").hide();
 	});

 	$(".orderLayout").hover(function(){
 		$("*").find(".orderContent").show();
 	},function(){
 		$("*").find(".orderContent").hide();
 	});
 	$(".ordershut").click(function(){
 		$(this).parent().parent().hide();
 	});
});