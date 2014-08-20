$(function(){
	/*发送消息*/
	$(document).on("click",".dianji",function(){
		var ssss=$(this).attr("ss");
		var tt=$("#text"+ssss).val();
		$("#lt"+ssss).html(tt);
		var liaotian="";
		liaotian += ' <div class="chatxx">我：'+tt+'</div>';
		$(this).parent().parent().find(".chatcontent").append(liaotian);
		$("#text"+ssss).val("");
			
	});
	/*最小化*/
	$(document).on("click",".chathide",function(){
		var zxid=$(this).attr("ppid");
		var zxmz=$(this).attr("mz");
		var yrned=$(this).attr("yrned");
		if(yrned==0){
			$(this).parent().parent().hide();
			var hide="";
			hide +='  <div id="yc'+zxid+'" class="suoxiao" sxid="pengyouId" sxmz="'+zxmz+'" zxid="'+zxid+'" orc="0">与'+zxmz+'聊天中</div>   ';
			$(".ycq").append(hide);
			$(this).attr("yrned","1");
		}else{
			$(this).parent().parent().hide();
		};
		
	});
	/*放大*/
	$(document).on("click",".suoxiao",function(){
		var zxid=$(this).attr("zxid");
		var orc=$(this).attr("orc");
		if(orc==0){
			$("#chat"+zxid).show();
			$(this).attr("orc","1")
		}
		else{
			$("#chat"+zxid).hide();
			$(this).attr("orc","0");
		}
	});
	/*关闭*/
	$(document).on("click",".chatclose",function(){
			$(this).parent().parent().remove();
			var ppid=$(this).attr("ppid");
			$("#yc"+ppid).remove();
			$("#pengyouA"+ppid).attr("zd","0");
	});


	$(".XhS").click(function(){
		$(".XHS").removeClass("active");
		$(this).addClass("active");
		var m=$(this).attr("pid");
		$(".first").removeClass("active1");
		$(".moban"+m).addClass("active1");
	});


	$(".menu").click(function(){
		var a=$(this).next().attr("yon");
		if(a==0){
			$(this).next().slideDown();
			$(this).next().attr("yon",1)
		}
		else{
			$(this).next().slideUp();
			$(this).next().attr("yon",0)
		}
	});

	$(".pengyou").click(function(){
		var pengyouId=$(this).attr("pengyouId");
		var pengyouName=$(this).attr("pengyouName");
		var chatDivID="chat" + pengyouId;

		var zd=$(this).attr("zd");
		if(zd==0){
			var html="";
			html += '		<div class="chatArea" id="'+chatDivID+'">';
			html += '			<div class="chatheader">';
			html += '				<div class="chatHfirst"></div>';
			html += '				<div class="chatName">'+pengyouName+'</div>';
			html += '				<div class="chathide" mz="'+pengyouName+'" ppid="'+pengyouId+'" yrned="0">最小化</div>';
			html += '				<div pengyouAId="pengyouA'+pengyouId+'" chatDivID="'+chatDivID+'" class="chatclose" ppid="'+pengyouId+'">关闭</div>';
			html += '			</div>';
			html += '			<div class="chatcontent"></div>';
			html += '			<div class="chatFooter">';
			html += '				<div class="face"></div>';
			html += '				<textarea class="chattext" id="text'+pengyouId+'"></textarea>';
			html += '				<div class="dianji" ss="'+pengyouId+'">发送</div>';
			html += '			</div>';
			html += '		</div>';

			$(".wrap").append(html);
			$(this).attr("zd",1);


			var hh=$(this).attr("hh");
			if(hh==0){
				var phid=$(this).attr("phid");	
				var huihua="";
				huihua +='			<li class="friend" id="friend1">';
				huihua +='				<div class="PH">';
				huihua +='					<img src="images/lol/l'+phid+'.png">';
				huihua +='              </div> ';
				huihua +='		        <p>'+pengyouName+'</p>';
				huihua +='		        <p class="xinxi" id="lt'+pengyouId+'"></p>';
				huihua +='		  	 </li>';
		
				$(".contentUl").prepend(huihua);
				$(this).attr("hh",1);
			};
			
			$(".chatArea").draggable();
		}else{
			$(".chatArea").css("z-index","15");
			$("#"+chatDivID).css("z-index","16");
		};

		$(".chatArea").click(function(){
			$(".chatArea").css("z-index","15");
			$(this).css("z-index","16");
		});

	/*	$(".dianji").click(function(){
			var tt=$("#text"+pengyouId).val();
			alert("3");
			var liaotian="";
			liaotian += ' <div class="chatxx">我：'+tt+'</div>';
			$(this).parent().parent().find(".chatcontent").append(liaotian);
			
		});*/


/*		$(".chathide").click(function(){
			$(this).parent().parent().hide();
			var hide="";
			hide +='  <div class="suoxiao" sxid="pengyouId">与'+pengyouName+'聊天中</div>   ';
			$(".ycq").append(hide);
		});*/
	});
	
	$(".group3").click(function(){
		$("*").find(".xx").show();

	});



	$(".LXsapn").click(function(){
		$("*").find(".friendUl").hide();
		$(this).next().show();
		$("*").find(".LXsapn").removeClass("active2");
		$(this).addClass("active2");
	});


	$(".list-group").click(function(){
		var h=$(this).next().attr("yn");
		if(h==0){
			$(this).next().show();
			$(this).next().attr("yn","1");
			$(this).css("background-image",'url("images/down.png")');
		}
		else{
			$(this).next().hide();
			$(this).next().attr("yn","0")
			$(this).css("background-image",'url("images/up.png")');
		}
	});
	/*背景图*/
	var p=25;
	$(".huantu").click(function(){
		if(p<30){
			p=p+1;
			$("body").css("background-image",'url("images/'+p+'.jpg")');
			
		}else{
			$("body").css("background-image",'url("images/'+p+'.jpg")');
		}
	});
	$(".huantu1").click(function(){
		if(p>20){
			p=p-1;
			$("body").css("background-image",'url("images/'+p+'.jpg")');
			
		}else{
			$("body").css("background-image",'url("images/'+p+'.jpg")');
		}
	});

/*状态*/
	$(".zt1").click(function(){
		var zt=$(this).attr("wz");
		$("*").find(".icon1").css("background-position","0px 0px");
		$(this).parent().hide();
	});
	$(".zt2").click(function(){
		var zt=$(this).attr("wz");
		$("*").find(".icon1").css("background-position","-72px 0px");
		$(this).parent().hide();
	});
	$(".zt3").click(function(){
		var zt=$(this).attr("wz");
		$("*").find(".icon1").css("background-position","-18px 0px");
		$(this).parent().hide();
	});
	$(".zt4").click(function(){
		var zt=$(this).attr("wz");
		$("*").find(".icon1").css("background-position","-36px 0px");
		$(this).parent().hide();
	});
	$(".zt5").click(function(){
		var zt=$(this).attr("wz");
		$("*").find(".icon1").css("background-position","-108px 0px");
		$(this).parent().hide();
	});
	$(".zt6").click(function(){
		var zt=$(this).attr("wz");
		$("*").find(".icon1").css("background-position","-54px 0px");
		$(this).parent().hide();
	});
	$(".zt7").click(function(){
		var zt=$(this).attr("wz");
		$("*").find(".icon1").css("background-position","-90px 0px");
		$(this).parent().hide();
	});

	$(".xxheader-left").click(function(){
		$(".xx").hide();
	});
});
