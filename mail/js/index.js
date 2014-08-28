$(function(){
	$(".inputTxt").click(function(){
		$(this).attr("placeholder","");
		return false;
	});
	$(document).click(function(){
		$("*").find(".inputTxt").attr("placeholder","搜索邮件");
	});
	$(".btn").click(function(){
		var tx=$("*").find(".inputTxt").attr("placeholder");
		if(tx==""){

			
			$("*").find(".inputTxt").attr("placeholder","搜索邮件");
			alert("请输入关键字");
		};
		return false;
	});
});