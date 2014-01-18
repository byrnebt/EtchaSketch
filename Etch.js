$(document).ready(function(){

	var cursor_var = 1;
	var cursor_on = 1;

	create_board(32, 32);
	$(".board").mouseenter(function() {
		if (cursor_on == 1) {
			if (cursor_var == 1)
			{
				$(this).addClass("fill");
			}
			if (cursor_var == -1)
			{
				$(this).removeClass("fill");
			}
		}
	}); //fill function

	$(document).bind('keyup', function(keypress) {
		if (keypress.which == 69) {//user pressed e
			cursor_var *= -1; //toggle erasing
		}
		if (keypress.which == 67) { //user pressed c
			$(".fill").removeClass("fill");
		}
		if (keypress.which == 84) { //user pressed t
			cursor_on *= -1;
			console.log("pressed t");
		}
	});

	$("#clear").click(function() {
		$(".fill").removeClass("fill");
	});//clear function

	$("#eraser").click(function() {
		cursor_var *= -1;
	});

	$("#resize").click(function() {
		if (!$("#i_value").val()) {
			var i = 32;
		}
		else {
			var i = $("#i_value");
		}
		if (!$("#j_value").val())
		{
			var j = 32;
		}
		else {
			var j = $("j_value");
		}
		$(".board").remove();
		create_board(i, j);
	});
});

function create_board (i, j) {
	for (var i=0; i < 32; i++) {
		for (var j=0; j < 32; j++) {
			$('#board').append("<div class='height_"+ i +" width_"+ j +" board left'></div>");
		}
	}
	$('.width_0').addClass("clear"); //start new line	
}