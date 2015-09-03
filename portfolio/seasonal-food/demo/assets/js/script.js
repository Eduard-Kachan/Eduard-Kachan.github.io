var fruts = 1;
var vegetables1 = 2;
var vegetables2 = 3;

function intro(){

	
}




$("#goToFruits").click(function(){
	if(fruts === 0){//from left to center
		$("#fruts")
			//.animate({left: "-50%"}, 750)
			.animate({left:"50%"}, 1000);
		$("#vegetables1")
			//.animate({left: "50%"}, 750)
			.animate({left:"150%"}, 1000);
		$("#vegetables2")
			//.animate({left: "150%"}, 750)
			.animate({left:"250%"}, 1000);
	}
	if(fruts === -1){//from far left to center
		$("#fruts")
			//.animate({left: "-150%"}, 750)
			.animate({left:"50%"}, 1000);
		$("#vegetables1")
			//.animate({left: "-50%"}, 750)
			.animate({left:"150%"}, 1000);
		$("#vegetables2")
			//.animate({left: "50%"}, 750)
			.animate({left:"250%"}, 1000);
	}
	fruts = 1;
	vegetables1 = 2;
	vegetables2 = 3;
	
	// $("#fruts .chart")
	// 	.addClass("rotate transition");
		
	
})
$("#goToVegies1").click(function(){
	if(vegetables1 === 2){//from right to center
		//Title outro
		// $("#fruts .title")
		// 	.addClass("title-animation-outro");
		// $("#fruts .chart")
		// 	.addClass("chart-animation-outro");
		// $("#fruts .list")
		// 	.animate({opacity: "0"}, 750);
		//Wheel Transition
		$("#fruts")
			//.animate({left: "50%"}, 750)
			.animate({left:"-50%"}, 1000);
		$("#vegetables1")
			//.animate({left: "150%"}, 750)
			.animate({left:"50%"}, 1000);
		$("#vegetables2")
			//.animate({left: "250%"}, 750)
			.animate({left:"150%"}, 1000);
		//Title intro
		// $("#vegetables1 .title")
		// 	.addClass("title-animation-intro");
		// $("#vegetables1 .chart")
		// 	.addClass("chart-animation-intro");
		// $("#vegetables1 .list")
		// 	.animate({opacity: "0"}, 750)
		// 	.animate({opacity: "1"}, 1000);
	}
	if(vegetables1 === 0){//from left to center
		$("#fruts")
			//.animate({left: "-150%"}, 750)
			.animate({left:"-50%"}, 1000);
		$("#vegetables1")
			//.animate({left: "-50%"}, 750)
			.animate({left:"50%"}, 1000);
		$("#vegetables2")
			//.animate({left: "50%"}, 750)
			.animate({left:"150%"}, 1000);
	}
	
	fruts = 0;
	vegetables1 = 1;
	vegetables2 = 2;
	// $("#fruts .chart")
	// 	.addClass("rotate transition");
		
	// $("#fruts .list")
	// 	.animate({opacity: "0"}, 750);
})
$("#goToVegies2").click(function(){
	if(vegetables2 === 3){//from far right to center
		$("#fruts")
			//.animate({left:"50%"}, 750)
			.animate({left:"-150%"}, 1000);
		$("#vegetables1")
			//.animate({left:"150%"}, 750)
			.animate({left:"-50%"}, 1000);
		$("#vegetables2")
			//.animate({left:"250%"}, 750)
			.animate({left:"50%"}, 1000);
	}
	if(vegetables2 === 2){//from right to center
		$("#fruts")
			//.animate({left:"-50%"}, 750)
			.animate({left:"-150%"}, 1000);
		$("#vegetables1")
			//.animate({left:"50%"}, 750)
			.animate({left:"-50%"}, 1000);
		$("#vegetables2")
			//.animate({left:"150%"}, 750)
			.animate({left:"50%"}, 1000);
	}
	fruts = -1;
	vegetables1 = 0;
	vegetables2 = 1;
	// $("#fruts .chart")
	// 	.addClass("rotate transition");
		
	// $("#fruts .list")
	// 	.animate({opacity: "0"}, 750);
})