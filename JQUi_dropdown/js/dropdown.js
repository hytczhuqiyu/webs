(function($){
	$.fn.dropdown = function(userArgus){
		var defaultArgus = {
			width:500
		};
		var finalArgus = $.extend(defaultArgus,userArgus);
		this.each(function(){
			var h3=$(this).find("h3");
			var ul=$(this).find("ul");
			var lis=$(this).find("li");

			$(this).addClass("All");
			var title=h3.attr("title");
			h3.attr("openFlag","flase");
			$(this).css("width",finalArgus.width+"px");
			h3.html(title);
			h3.click(function(){
				var openFlag =$(this).attr("openFlag");
				if (openFlag == "true") {
					ul.hide();
					h3.attr("openFlag","false");
				}else{
					ul.show();
					h3.attr("openFlag","true");
				}

			});
			lis.click(function(){
				var selectTxt =$(this).html();
				h3.html(selectTxt);
				ul.hide();
				h3.attr("openFlag","false");
			});
		});
	};
})(jQuery);