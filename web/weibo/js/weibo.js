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



$(function(){
	$(".input_detail ").click(function(){
		$(".key").hide();
		$(".key1").show();
		$(".send_btn").css("background-color","red");
		return false;
	});
	$("body").click(function(){
		$(".key").show();
		$(".key1").hide();
		$(".send_btn").css("background-color","");
	});

	$(".lev").hover(function(){
		$(this).css("background-color","rgb(230,230,230)");
	},function(){
		$(this).css("background-color","");
	});
	$(".levs").hover(function(){
		$(this).css("background-color","rgb(230,230,230)");
	},function(){
		$(this).css("background-color","");
	});

	$(".lev3").hover(function(){
		$(this).find(".lev3spa").css("color","rgb(10,140,210)");
	},function(){
		$(this).find(".lev3spa").css("color","");
	});

	/*dian zan*/
/*	$(".dianzan").click(function(){
		var zan=$(this).find(".wb_ziti1").attr("dian");
		var sf=$(this).find(".wb_ziti1").attr("sf");
		if(sf==0){
			zan=parseInt(zan)+1;
			$(this).find(".wb_ziti1").html('('+zan+')');
			$(this).find(".wb_ziti1").attr("sf","1");
			$(this).find(".wb_ziti1").attr("dian",zan);
		}else{
			zan=parseInt(zan)-1;
			$(this).find(".wb_ziti1").html('('+zan+')');
			$(this).find(".wb_ziti1").attr("sf","0");
			$(this).find(".wb_ziti1").attr("dian",zan);
		}
	});*/

	$(document).on("click",".dianzan",function(){
		var zan=$(this).find(".wb_ziti1").attr("dian");
		var sf=$(this).find(".wb_ziti1").attr("sf");
		if(sf==0){
			zan=parseInt(zan)+1;
			$(this).find(".wb_ziti1").html('('+zan+')');
			$(this).find(".wb_ziti1").attr("sf","1");
			$(this).find(".wb_ziti1").attr("dian",zan);
		}else{
			zan=parseInt(zan)-1;
			$(this).find(".wb_ziti1").html('('+zan+')');
			$(this).find(".wb_ziti1").attr("sf","0");
			$(this).find(".wb_ziti1").attr("dian",zan);
		}
	});

	/*头像*/
	/*$(".WB_face").mouseover(function(){
		var t1=$(document).scrollTop();
		var	t=$(this).offset().top;
		var t2=t-t1;
		var l=$(this).offset().left;
		var name=$(this).attr("name");
		var phid=$(this).attr("ph");
		$(".bigtou").css("background-image",'url("css/images/'+phid+'.jpg")');
		var html="";
		var tx=$(this).attr("tx");
		var rt=parseInt(tx);
		html +='<img src="css/images/'+rt+'.jpg" class="picborder_r" width="75px" height="75px">';
		$(".hdtx").html(html);
		if(t2>260){
			var t3=t-260;
			$("*").find(".W_layer").css({"top":t3,"left":l});
			$(".minzi").html(name);
			$("*").find(".W_layer").show();
		}
		else{
			var t4=t+50;
			$("*").find(".W_layer").css({"top":t4,"left":l});
			$("*").find(".W_layer").show();
		}
	});
	$(".WB_face").mouseleave(function(){
		$("*").find(".W_layer").hide();
	});*/

	$(".W_layer").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});

	$(document).on("mouseover",".WB_face",function(){
		var t1=$(document).scrollTop();
		var	t=$(this).offset().top;
		var t2=t-t1;
		var l=$(this).offset().left;
		var name=$(this).attr("name");
		var phid=$(this).attr("ph");
		$(".bigtou").css("background-image",'url("css/images/'+phid+'.jpg")');
		var html="";
		var tx=$(this).attr("tx");
		var rt=parseInt(tx);
		html +='<img src="css/images/'+rt+'.jpg" class="picborder_r" width="75px" height="75px">';
		$(".hdtx").html(html);
		if(t2>260){
			var t3=t-260;
			$("*").find(".W_layer").css({"top":t3,"left":l});
			$(".minzi").html(name);
			$("*").find(".W_layer").show();
		}
		else{
			var t4=t+50;
			$("*").find(".W_layer").css({"top":t4,"left":l});
			$("*").find(".W_layer").show();
		}
	});
	$(document).on("mouseleave",".WB_face",function(){
		$("*").find(".W_layer").hide();
	});

	$(".send_btn").click(function(){
		var xxi=$(".input_detail ").val();
		if(xxi==''){
			alert("不可为空!!!");
		}else{
			$(".input_detail ").val("");
			var d=new Date();
			var month=d.getMonth()+1;
			var	day=d.getDate();
			var house=d.getHours();
			var m=d.getMinutes(); 
			var se=d.getSeconds();
			var ss="";
			ss +='						<div class="WB_feed_type">';
			ss +='							<div class="WB_screen">';
			ss +='								<span class="W_ico12" ycsf="0"></span>';
			ss +='                              <div class="yincan">隐藏这条微博</div>';
			ss +='							</div>';
			ss +='							<div class="WB_feed_datail">';
			ss +='								<div class="WB_face" name="晴天的雨" ph="tt3" tx="3">';
			ss +='									<a href="#" class="W_face_radius" title="晴天的雨">';
			ss +='										<img src="css/images/qtdy.jpg" width50px height=50px>';
			ss +='									</a>';
			ss +='								</div>';
			ss +='								<div class="WB_detail">';
			ss +='									<div class="WB_info">';
			ss +='										<a href="#" class="WB_name">晴天的雨</a>';
			ss +='										<a href="#" class="zhuangtai" title="微博会员">';
			ss +='											<i class="W_ico16"></i>';
			ss +='										</a>';
			ss +='										<a href="#" class="zhuangtai" title="微博达人">';
			ss +='                                          <i class="W_ico16 daren"></i>';
			ss +='                                      </a>';
			ss +='									</div>';
			ss +='									<div class="WB_text">';
			ss +='                                 '+xxi+'</div>';
			ss +='									<ul class="WB_media_list">';
			ss +='									</ul>';
			ss +='									<div class="WB_func">';
			ss +='										<div class="WB_from">';
			ss +='											<a href="#" class="S_link2">'+month+'月'+day+'日'+house+':'+m+'</a>';
			ss +='											<span class="S_txt2">來自</span>';
			ss +='											<a href="#" class="S_link2">晴天的雨</a>';
			ss +='										</div>';
			ss +='										<div class="WB_handle">';
			ss +='											<span class="dianzan">';
			ss +='												<span class="wb_zan"></span>';
			ss +='												<span class="wb_ziti1" dian="0" sf="0">(0)</span>';
			ss +='											</span>';
			ss +='											<span>|</span>';
			ss +='											<span class="wb_ziti">转发</span>';
			ss +='											<span>|</span>';
			ss +='											<span class="wb_ziti">收藏</span>';
			ss +='											<span>|</span>';
			ss +='											<span class="wb_ziti lxpl">评论</span>';
			ss +='										</div>';
			ss +='									</div>';
			ss +='									<div class="feed_list_repeat" dk="0">';
			ss +='										<div class="pl_line">';
			ss +='											<div>';
			ss +='												<textarea class="pltx"></textarea>';
			ss +='											</div>';
			ss +='											<div class="action1">';
			ss +='												<span class="plface"></span>';
			ss +='												<input type="checkbox" class="box">';
			ss +='												<span class="plsap">同時轉發到我的微博</span>';
			ss +='											</div>';
			ss +='											<div class="plbtn">';
			ss +='												評論';
			ss +='											</div>';
			ss +='										</div>';
			ss +='										<div class="comment_lists">';
			ss +='										</div>';
			ss +='									</div>';
			ss +='								</div>';
			ss +='							</div>';
			ss +='						</div>';
			


			$("*").find(".WB_feed").prepend(ss);
		};
	});

	/*$(".lxpl").click(function(){
		var sbs=$(this).parent().parent().next().attr("dk");
		if(sbs==0){
			$(this).parent().parent().next().show();
			$(this).parent().parent().next().attr("dk","1");
		}else{
			$(this).parent().parent().next().hide();
			$(this).parent().parent().next().attr("dk","0");
		}
		
	});*/
	$(document).on("click",".lxpl",function(){
		var sbs=$(this).parent().parent().next().attr("dk");
		if(sbs==0){
			$(this).parent().parent().next().show();
			$(this).parent().parent().next().attr("dk","1");
		}else{
			$(this).parent().parent().next().hide();
			$(this).parent().parent().next().attr("dk","0");
		}
	});
	/*$(".plbtn").click(function(){
		var pl=$(this).parent().find(".pltx").val();
		$(this).parent().find(".pltx").val("");
		var pllist="";
		pllist +='											<dl class="comment_list ">';
		pllist +='												<dt class="comdt">';
		pllist +='													<a href="">';
		pllist +='														<img src="css/images/qtdy.jpg" width="30px" height="30px">';
		pllist +='													</a>';
		pllist +='												</dt>';
		pllist +='												<dd class="comdd">';
		pllist +='													<a href="" class="comdda">晴天的雨</a>';
		pllist +='													：'+pl+'  (刚刚)';
		pllist +='													<div clas="cominfo">';
		pllist +='														<span class="W_linkb">';
		pllist +='															<span>';
		pllist +='																<em class="wb_zan"></em>';
		pllist +='																(0)';
		pllist +='															</span>';
		pllist +='															<span class="com_span">|</span>';
		pllist +='															<span class="comhf">回覆</span>';
		pllist +='														</span>';
		pllist +='													</div>';
		pllist +='												</dd>';
		pllist +='											</dl>';

		$(this).parent().next().prepend(pllist);
	});*/

	$(document).on("click",".plbtn",function(){
		var pl=$(this).parent().find(".pltx").val();
		if(pl==''){
			alert("不可为空!!!");
		}else{
			$(this).parent().find(".pltx").val("");
			var pllist="";
			pllist +='											<dl class="comment_list ">';
			pllist +='												<dt class="comdt">';
			pllist +='													<a href="">';
			pllist +='														<img src="css/images/qtdy.jpg" width="30px" height="30px">';
			pllist +='													</a>';
			pllist +='												</dt>';
			pllist +='												<dd class="comdd">';
			pllist +='													<a href="" class="comdda">晴天的雨</a>';
			pllist +='													：'+pl+'  (刚刚)';
			pllist +='													<div clas="cominfo">';
			pllist +='														<span class="W_linkb">';
			pllist +='															<span>';
			pllist +='																<em class="wb_zan"></em>';
			pllist +='																(0)';
			pllist +='															</span>';
			pllist +='															<span class="com_span">|</span>';
			pllist +='															<span class="comhf">回覆</span>';
			pllist +='														</span>';
			pllist +='													</div>';
			pllist +='                                                  <div class="WB_media_expand "> ';
			pllist +='                                                 		<textarea class="ex_pl"></textarea>  ';
			pllist +='                                                   	<div class="action1">';
			pllist +='                                                      	<span class="plface"></span>';
			pllist +='                                                          <input type="checkbox" class="box">';
			pllist +='														</div>';
			pllist +='														<div class="plbtn2">';
			pllist +='															評論';
			pllist +='														</div>';
			pllist +='													</div>';
			pllist +='												</dd>';
	;		pllist +='											</dl>';


			$(this).parent().next().prepend(pllist);
		};
	});

/*回复的回复*/
	/*$(".comhf").click(function(){*/
	$(document).on("click",".comhf",function(){	
		var	hh=$(this).attr("hfyn");
		if(hh==0){
			$(this).parent().parent().next().show();
			$(this).attr("hfyn","1");
		}
		else{
			$(this).parent().parent().next().hide();
			$(this).attr("hfyn","0");	
		}
	});


/*	$(".plbtn2").click(function(){*/
   	$(document).on("click",".plbtn2",function(){
		var pl=$(this).parent().find(".ex_pl").val();
		if(pl==''){
			alert("不可为空!!!");
		}else{
			$(this).parent().find(".ex_pl").val("");
			var hfr=$(this).parent().parent().find(".comdda").text();
			var pllist="";
			pllist +='											<dl class="comment_list ">';
			pllist +='												<dt class="comdt">';
			pllist +='													<a href="">';
			pllist +='														<img src="css/images/qtdy.jpg" width="30px" height="30px">';
			pllist +='													</a>';
			pllist +='												</dt>';
			pllist +='												<dd class="comdd">';
			pllist +='													<a href="" class="comdda">晴天的雨</a>';
			pllist +='													:回覆@ '+hfr+'   '+pl+'  (刚刚)';
			pllist +='													<div clas="cominfo">';
			pllist +='														<span class="W_linkb">';
			pllist +='															<span>';
			pllist +='																<em class="wb_zan"></em>';
			pllist +='																(0)';
			pllist +='															</span>';
			pllist +='															<span class="com_span">|</span>';
			pllist +='															<span class="comhf">回覆</span>';
			pllist +='														</span>';
			pllist +='													</div>';
			pllist +='												</dd>';
			pllist +='											</dl>';

			$(this).parent().parent().parent().parent().prepend(pllist);
		};
	});

/*	$(".WB_feed_type").hover(function(){
		$(this).find(".W_ico12").show();
	},function(){
		$(this).find(".W_ico12").hide();
	});*/
	$(document).on("mouseover",".WB_feed_type",function(){
		$(this).find(".W_ico12").show();
	});
	$(document).on("mouseleave",".WB_feed_type",function(){
		$(this).find(".W_ico12").hide();
	});

	$(document).on("click",".W_ico12",function(){
		var yrn=$(this).attr("ycsf");
		if(yrn==0){
			$(this).next().show();
			$(this).attr("ycsf","1");
		}else{
			$(this).next().hide();
			$(this).attr("ycsf","0");
		};
	});

	$(document).on("click",".yincan",function(){
		alert("关闭成功");
		$(this).parent().parent().hide();
	});

	$(".bigcursor").click(function(){
		$(this).parent().parent().hide();
		$(this).parent().parent().next().show();
	});
	$(".bigcursor2").click(function(){
		$(this).parent().parent().hide();
		$(this).parent().parent().parent().find(".WB_media_list").show();
	});
})
