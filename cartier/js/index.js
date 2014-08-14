$(function(){
	$(".duanxuan1").click(function(){
		$(this).parent().find(".smallC").removeClass("active");
		$(this).find(".smallC").addClass("active");
	});
	$(".footerpos").click(function(){
		
		var aaa=$("*").find(".sub-menu").attr("yon");
		if(aaa==1){
			$(this).next().animate({"top":"-245px","height":"245px"},500);
			$(this).next().attr("yon","2");
		}
		else{
			$(this).next().animate({"top":"0px","height":"0px"},500);
			$(this).next().attr("yon","1");
		}
		
	});

/*
	$(".menu2").click(function(){
		$(".Lmenu").animate({"top":"-43px"},500);
	});*/
/*
	for(var i=1;i<15;i++){
		$(".menu2").click(function(){
			$(".Lmenu").animate({"top":"-43px"},500);
		});

	};*/

	/*切换语言*/
	var i=0;
	$(".menu2").click(function(){
		if(i<5){
			i++;
			$(".Lmenu").animate({"top":-39*i+"px"},400);
			$(".menu1").show();
			if(i==5){
				$(this).hide();
			};
		};		 
	});
	$(".menu1").click(function(){		
		if(i>0){
			i=i-1;
			$(".Lmenu").animate({"top":-39*i+"px"},400);
			$(this).parent().next().next().show();
			if(i==0){
				$(".menu1").hide();
			};
		};
	});
/*随机验证码 */


	var hehe=Math.random();
	haha=Math.floor((hehe*10)/1)+1;
	$(".YZPH").css("background-image",'url("css/images/yanzhengma'+haha+'.png")');
	$(".YZPH").click(function(){
		var hehe=Math.random();
		haha=Math.floor((hehe*10)/1)+1;
		$(this).css("background-image",'url("css/images/yanzhengma'+haha+'.png")');
	});


});


