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
	$(".close1").click(function(){
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
		var db1=$(this).parent().parent().parent().prev().length;
		if(db1==1){
			var db2=$(this).parent().parent().parent().prev().prev().length;
			if(db2==1){
				var sb1=$(this).parent().parent().parent().prev().prev().find(".default2").attr("yon")
				var sb2=$(this).parent().parent().parent().prev().find(".default2").attr("yon")
				var sb=$(this).attr("yon");
			}else{
				var sb=$(this).attr("yon");
				var sb1=$(this).parent().parent().parent().prev().find(".default2").attr("yon")
				var sb2=$(this).parent().parent().parent().next().find(".default2").attr("yon")
			};
		}else{
			var sb=$(this).attr("yon");
			var sb1=$(this).parent().parent().parent().next().next().find(".default2").attr("yon")
			var sb2=$(this).parent().parent().parent().next().find(".default2").attr("yon")
		};
		if(sb==0 && sb1==1 && sb2==1){
			$("*").find(".first").css("width","143px");
		}else{
			$("*").find(".first").css("width","");
		}
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
