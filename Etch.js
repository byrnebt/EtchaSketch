$(document).ready(function(){

	var stay_var = 1;

	create_board(32, 32);

	$(".board").mouseenter(function() {
		if (stay_var == 1)
		{
			$(this).toggleClass("fill");
		}
		if (stay_var == -1)
		{
			$(this).addClass("fill");
		}
	}); //base fill function


	$("#clear").click(function() {
		$(".fill").removeClass("fill");
	});//clear function

	$("#stay").click(function() {
		stay_var *= -1;
	});
});

function create_board (i, j) 
{
	for (var i=0; i < 32; i++)
	{
		for (var j=0; j < 32; j++)
		{
			$('#board').append("<div class='height_"+ i +" width_"+ j +" board left'></div>");
		}
	}
	$('.width_0').addClass("clear"); //start new line	
}