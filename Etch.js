$(document).ready(function(){
		for (var i=0; i < 32; i++)
		{
			for (var j=0; j < 32; j++)
			{
				$('#board').append("<div class='height_"+ i +" width_"+ j +" board left'></div>");
			}
		}
		$('.width_0').addClass("clear");

		$(".board").mouseenter(function(){
			$(this).toggleClass("fill");
		});
});