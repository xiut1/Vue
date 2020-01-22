// $(document).ready(function(){
	
// 	// 개별 리스트 클릭에 대한 active 부여
// 	var liLength = $("ul li").length;
// 	$("li").click(function(){
// 		if ($(this).hasClass("active")) {
// 			$(this).removeClass("active");
// 		} else {
// 			for(i=0;i<=liLength-1;i++){
// 				$("ul li").removeClass("active");
// 				console.log(i);
// 			}
// 			$(this).addClass("active");
// 		}	
// 	});
	
// 	// 아코디언
// 	$(".acd").click(function (){
// 		var acdTi = ".acd-title";
// 		var acdCont = ".acd-content";
// 		var acdArr = ".acd-arr";
		
// 		if($(acdCont).hasClass("active")) {
// 			$(this).find(acdCont).slideUp().removeClass("active");
// 			$(this).find(acdArr).css("transform", "translateY(-50%) rotate(90deg)");
// 		}
// 		else {
// 			$(this).find(acdCont).slideDown().addClass("active");
// 			$(this).find(acdArr).css("transform", "translateY(-50%) rotate(-90deg)");
// 		}
// 	});

// 	// top 버튼

// 	// list-practice
// 	var eachList = $('.list-practice li');

// 	eachList.each(function (item) {
// 		$(item).addClass('active');
// 	});

// });