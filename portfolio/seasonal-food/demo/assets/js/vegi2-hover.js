$("#vegetables2 .mushrooms").hover(
  function() {
  	console.log("advjba")
  	allVegi2("0.3");
    $(".list .mushrooms").css("opacity", "1");
    $(".line .mushrooms").css("opacity", "1");
    $(".chart .mushrooms").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .mushrooms").css("opacity", "0");
  }
);
$("#vegetables2 .onions").hover(
  function() {
  	allVegi2("0.3");
    $(".list .onions").css("opacity", "1");
    $(".line .onions").css("opacity", "1");
    $(".chart .onions").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .onions").css("opacity", "0");
  }
);
$("#vegetables2 .parsnips").hover(
  function() {
  	allVegi2("0.3");
    $(".list .parsnips").css("opacity", "1");
    $(".line .parsnips").css("opacity", "1");
    $(".chart .parsnips").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .parsnips").css("opacity", "0");
  }
);
$("#vegetables2 .peppers").hover(
  function() {
  	allVegi2("0.3");
    $(".list .peppers").css("opacity", "1");
    $(".line .peppers").css("opacity", "1");
    $(".chart .peppers").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .peppers").css("opacity", "0");
  }
);
$("#vegetables2 .potatoes").hover(
  function() {
  	allVegi2("0.3");
    $(".list .potatoes").css("opacity", "1");
    $(".line .potatoes").css("opacity", "1");
    $(".chart .potatoes").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .potatoes").css("opacity", "0");
  }
);
$("#vegetables2 .pumpkin").hover(
  function() {
  	allVegi2("0.3");
    $(".list .pumpkin").css("opacity", "1");
    $(".line .pumpkin").css("opacity", "1");
    $(".chart .pumpkin").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .pumpkin").css("opacity", "0");
  }
);
$("#vegetables2 .radicchio").hover(
  function() {
  	allVegi2("0.3");
    $(".list .radicchio").css("opacity", "1");
    $(".line .radicchio").css("opacity", "1");
    $(".chart .radicchio").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .radicchio").css("opacity", "0");
  }
);
$("#vegetables2 .radishes").hover(
  function() {
  	allVegi2("0.3");
    $(".list .radishes").css("opacity", "1");
    $(".line .radishes").css("opacity", "1");
    $(".chart .radishes").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .radishes").css("opacity", "0");
  }
);
$("#vegetables2 .rapini").hover(
  function() {
  	allVegi2("0.3");
    $(".list .rapini").css("opacity", "1");
    $(".line .rapini").css("opacity", "1");
    $(".chart .rapini").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .rapini").css("opacity", "0");
  }
);
$("#vegetables2 .rutabaga").hover(
  function() {
  	allVegi2("0.3");
    $(".list .rutabaga").css("opacity", "1");
    $(".line .rutabaga").css("opacity", "1");
    $(".chart .rutabaga").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .rutabaga").css("opacity", "0");
  }
);
$("#vegetables2 .spinach").hover(
  function() {
  	allVegi2("0.3");
    $(".list .spinach").css("opacity", "1");
    $(".line .spinach").css("opacity", "1");
    $(".chart .spinach").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .spinach").css("opacity", "0");
  }
);
$("#vegetables2 .sprouts").hover(
  function() {
  	allVegi2("0.3");
    $(".list .sprouts").css("opacity", "1");
    $(".line .sprouts").css("opacity", "1");
    $(".chart .sprouts").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .sprouts").css("opacity", "0");
  }
);
$("#vegetables2 .squash").hover(
  function() {
  	allVegi2("0.3");
    $(".list .squash").css("opacity", "1");
    $(".line .squash").css("opacity", "1");
    $(".chart .squash").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .squash").css("opacity", "0");
  }
);
$("#vegetables2 .sweetpotatoes").hover(
  function() {
  	allVegi2("0.3");
    $(".list .sweetpotatoes").css("opacity", "1");
    $(".line .sweetpotatoes").css("opacity", "1");
    $(".chart .sweetpotatoes").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .sweetpotatoes").css("opacity", "0");
  }
);
$("#vegetables2 .tomatoes").hover(
  function() {
  	allVegi2("0.3");
    $(".list .tomatoes").css("opacity", "1");
    $(".line .tomatoes").css("opacity", "1");
    $(".chart .tomatoes").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .tomatoes").css("opacity", "0");
  }
);
$("#vegetables2 .zucchini").hover(
  function() {
  	allVegi2("0.3");
    $(".list .zucchini").css("opacity", "1");
    $(".line .zucchini").css("opacity", "1");
    $(".chart .zucchini").css("opacity", "1");
  }, function() {
    allVegi2("1");
    $(".line .zucchini").css("opacity", "0");
  }
);
function allVegi2(x){
	var num = x;
	$(".list .mushrooms").css("opacity", num);
	$(".chart .mushrooms").css("opacity", num);
	$(".list .onions").css("opacity", num);
	$(".chart .onions").css("opacity", num);
	$(".list .parsnips").css("opacity", num);
	$(".chart .parsnips").css("opacity", num);
	$(".list .peppers").css("opacity", num);
	$(".chart .peppers").css("opacity", num);
	$(".list .potatoes").css("opacity", num);
	$(".chart .potatoes").css("opacity", num);
	$(".list .pumpkin").css("opacity", num);
	$(".chart .pumpkin").css("opacity", num);
	$(".list .radicchio").css("opacity", num);
	$(".chart .radicchio").css("opacity", num);
	$(".list .radishes").css("opacity", num);
	$(".chart .radishes").css("opacity", num);
	$(".list .rapini").css("opacity", num);
	$(".chart .rapini").css("opacity", num);
	$(".list .rutabaga").css("opacity", num);
	$(".chart .rutabaga").css("opacity", num);
	$(".list .spinach").css("opacity", num);
	$(".chart .spinach").css("opacity", num);
	$(".list .sprouts").css("opacity", num);
	$(".chart .sprouts").css("opacity", num);
	$(".list .squash").css("opacity", num);
	$(".chart .squash").css("opacity", num);
	$(".list .sweetpotatoes").css("opacity", num);
	$(".chart .sweetpotatoes").css("opacity", num);
	$(".list .tomatoes").css("opacity", num);
	$(".chart .tomatoes").css("opacity", num);
	$(".list .zucchini").css("opacity", num);
	$(".chart .zucchini").css("opacity", num);
}