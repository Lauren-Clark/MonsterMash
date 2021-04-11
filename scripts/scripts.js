$(document).ready(function() {
	var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
	// these parameters in ms that pass thru setTimeout and alternate flashes of lightning
	lightning1(4000);
	lightning2(5000);
	lightning3(7000);

	$("#head").click(function() {
		if (headclix < 9 ) {
			$(this).animate({left:"-=367px"},500);
			headclix += 1;}
		else {$(this).animate({left:"0px"},500);
			 headclix = 0;
		}
	});

	$("#eyes").click(function() {
		if (eyeclix < 9 ) {
				$(this).animate({left:"-=367px"},500);
				eyeclix += 1;
			}
		else {
				$(this).animate({left:"0px"},500);
				eyeclix = 0;
		}
	});

	$("#nose").click(function() {
		if (noseclix < 9 ) {
				$(this).animate({left:"-=367px"},500);
				noseclix += 1;
		}
		else {
				$(this).animate({left:"0px"},500);
				noseclix = 0;
		}
	});

	$("#mouth").click(function() {
		if (mouthclix < 9 ) {
				$(this).animate({left:"-=367px"},500);
				mouthclix += 1;}
		else {
				$(this).animate({left:"0px"},500);
				mouthclix = 0;
		}
	});

});
//end doc.onready function


/* NOTES */
// fades in lightning1 at fast rate
//$("lightning1").fadeIn("fast");

//fades in at 1 second aka 1000 milisec
//$("lightning1").fadeIn(1000);

//method chain
// fades in at 1/25th of second and fades out in 1/25th sec


//timed lightning func for 1st lightning image
function lightning1(t){
	$("#container #lightning1").fadeIn(250).fadeOut(250);
	setTimeout("lightning1()",t);
};

function lightning2(t){
	$("#container #lightning2").fadeIn(250).fadeOut(250);
		setTimeout("lightning2()",t);
};

function lightning3(t){
	$("#container #lightning3").fadeIn(250).fadeOut(250);
		setTimeout("lightning3()",t);
}; 

/* **********************************************/
$("#my_div").animate({top: "150"}, "slow")

$("#my_div").animate({left:"100px"});

//$("head").animate({left:""});

$("p").animate({
	marginLeft:"150px",
	marginRight:"150px"
});

$("#my_div").animate({width: "30%"}, 250)

$("my_div").animate({right: "0"}, 500)


$("#my_div").animate({
	padding: "200px",
	width: "30%"
}, "slow")

//$("#box").animate({left:"+=20"});

//$("img").animate({height: "20px"}, "fast")

//$("div").animate({borderWidth:30}, "slow");

