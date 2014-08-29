$(function(){
	$(".inputTxt").click(function(){
		$(this).attr("placeholder","");
		return false;
	});
	$(document).click(function(){
		$("*").find(".inputTxt").attr("placeholder","搜索邮件");
	});
	$(".btn").click(function(){
		var tx=$("*").find(".inputTxt").val();
		if(tx==""){
			$("*").find(".inputTxt").attr("placeholder","搜索邮件");
			$(".wui_TipInfoBar").show();

		};
		setTimeout("hide()",2000);
		return false;
	});

	/*高级搜索*/
	$(".more").click(function(){
		$(".wui_Dialog").show();
		$(".mb").show();
	});
	$(".close").click(function(){
		$(".wui_Dialog").hide();
		$(".mb").hide();
	});
	$( ".wui_Dialog" ).draggable({ handle: ".head" });

	$(".mailbtn").click(function(){
		var ttx=$(".iptxt").val();
		if(ttx==""){
			$(".wui_TipInfoBar").show();

		};
		setTimeout("hide()",2000);
	});

	$(".default2").click(function(){
		var yon=$(this).attr("yon");
		if(yon==1){
			$(this).parent().parent().find(".normal").hide();
			$(this).attr("yon",0);
			$(this).parent().find(".ff_nodeopen").css("background-position","-15px 0");
			$(this).parent().parent().find(".normalLine").hide();
		}else{
			$(this).parent().parent().find(".normal").show();
			$(this).attr("yon",1);
			$(this).parent().find(".ff_nodeopen").css("background-position","");
			$(this).parent().parent().find(".normalLine").show();
		}
	});



});

function hide(){
	$(".wui_TipInfoBar").hide();

}
