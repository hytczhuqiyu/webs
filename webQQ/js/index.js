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

	$(".friend").click(function(){
		var friendId=$(this).attr("friendID");
		var friendName=$(this).attr("friendName")

		var html="";
		html += '		<div class="chatArea" >';
		html += '			<div class="chatheader">';
		html += '				<div class="chatHfirst"></div>';
		html += '				<div class="chatName">'+friendName+'</div>';
		html += '				<div class="chatthird">关闭</div>';
		html += '			</div>';
		html += '			<div class="chatcontent"></div>';
		html += '			<div class="chatFooter">';
		html += '				<div class="face"></div>';
		html += '				<textarea class="chattext"></textarea>';
		html += '				<div class="dianji">发送</div>';
		html += '			</div>';
		html += '		</div>';

		$(".wrap").append(html);

		$(".chatthird").click(function(){
			$(this).parent().parent().remove();
		});


	});

	$(".span32").click(function(){
		$("*").find(".xx").show();

	});
});
