$(function(){
	$("#top-logo").hover(function(){
		$(".link").css("display","block");
	},function(){
		$(".link").css("display","none");
	});

	/*搜索框*/
	$(".seach-input").click(function(){
		$(".plus").show();
		$(this).attr("placeholder","");
		$(".ssan").css("background-position","-474px -5px");
		return false;
	});
	$(".plusp").hover(function(){
		$(".plusp").removeClass("spcp");
		$(this).addClass("spcp");
		$(".ssan").css("background-position","-474px -5px");
	},function(){
		$(".ssan").css("background-position","-499px -5px");
	});
	$(".plusp").click(function(){
		//$(".seach-input").trigger("focus");
		var tt=$(this).attr("neirong");
		$(".seach-input").attr("placeholder",tt);
		$(".plus").hide();
		$(".ssan").css("background-position","-450px -5px");
		return false;
	});

	$("body").click(function(){
		$(".plus").hide();
		$(".seach-input").attr("placeholder","大家正在热搜：房祖名已吸毒8年");
		$(".ssan").css("background-position","-450px -5px");
	});

	/*失去焦点*/
	// $(".seach-input").blur(function(){
	// 	$(".plus").hide();
	// 	$(this).attr("placeholder","大家正在热搜：房祖名已吸毒8年");
	// });
	/*person*/
	$(".gn_setting").hover(function(){
		$(this).find(".gn-all").show();
		$(this).css("background-color","#FFF");
		$(this).find(".er").css("background-position","-323px -6px");
		$(this).find(".san").css("background-position","-374px -6px");
		$(this).find(".si").css("background-position","-423px -6px");
	},function(){
		$(this).find(".gn-all").hide();
		$(this).css("background-color","");
		$(this).find(".er").css("background-position","");
		$(this).find(".san").css("background-position","");
		$(this).find(".si").css("background-position","");
	});

	/*下拉右*/
	$(".app").hover(function(){
		$(this).find(".appspan").css("background-position","-1595px -3px")
	},function(){
		$(this).find(".appspan").css("background-position","")
	});

	$(".app").hover(function(){
		$(this).find(".appspan1").css("background-position","-1505px -3px")
	},function(){
		$(this).find(".appspan1").css("background-position","")
	});

	$(".app").hover(function(){
		$(this).find(".appspan2").css("background-position","-1016px -3px")
	},function(){
		$(this).find(".appspan2").css("background-position","")
	});
	$(".app").hover(function(){
		$(this).find(".appspan3").css("background-position","-1050px -3px")
	},function(){
		$(this).find(".appspan3").css("background-position","")
	});
	$(".app").hover(function(){
		$(this).find(".appspan4").css("background-position","-1342px -3px")
	},function(){
		$(this).find(".appspan4").css("background-position","")
	});
	$(".app").hover(function(){
		$(this).find(".appspan5").css("background-position","-1391px -3px")
	},function(){
		$(this).find(".appspan5").css("background-position","")
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
		clearInterval(Time);
		var a=$(this).attr("emid");
		/*$(this).parent().parent().next().find(".posul").animate({"left":"-380px"},1000);*/
		$("#remen"+a).stop().animate({"left":"-380px"},1000);
		$("#spmid"+a).html("2/2");
		$("#leftem"+a).css("background-position"," -175px -100px");
		$("#rightem"+a).css("background-position"," -183px -112px");
		Time = setInterval("shouPic()",3000);
		return false;
	});
	$(".spleft").click(function(){
		clearInterval(Time);
		var b=$(this).attr("emid");
		/*$(this).parent().parent().next().find(".posul").animate({"left":"-0px"},1000);*/
		$("#remen"+b).stop().animate({"left":"0px"},1000);
		$("#spmid"+b).html("1/2");
		$("#leftem"+b).css("background-position"," -175px -112px");
		$("#rightem"+b).css("background-position"," -183px -100px");
		Time = setInterval("shouPic()",3000);
		return false;
	});
	Time = setInterval("shouPic()",3000);

});

index=0;
function shouPic(){
	if(index==0)
	{
		$(".spright").trigger("click");
		index=1;
	}
	else
	{
		$(".spleft").trigger("click");
		index=0;
	}
}

