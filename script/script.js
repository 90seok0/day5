$('.namebox').click(function(){
	$(this).fadeOut();
})

$('.titlebox').click(function(){
	$(this).fadeOut();
})

$('.statementbox').click(function(){
	$(this).slideUp(3000);
})





var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

setInterval(setDate, 1000);
setDate();

function setDate() {
	var now = new Date();

	var mins = now.getMinutes(); 
	var minsDegrees = ((mins / 60) * 360) + 90;
	minHand.style.transform = `rotate(${minsDegrees}deg)`;

	var hours = now.getHours();
	var hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


function handleOnClick() {
	alert('다운로드하시겠습니까?');
}

$('.preface').click(function(){
	$(this).slideUp(1000);
})

$('.candle').click(function(){
	$('.light').show();
	$('.smoke').hide();
})

$('.candle2').click(function(){
	$('.light2').show();
	$('.smoke2').hide();
})

$('.candle3').click(function(){
	$('.light3').show();
	$('.smoke3').hide();
})


$('.who1').click(function(){
	$('.who1').hide();
})

$('.receipt').draggable();


$('.card').on('click',function(){
	$(this).addClass('cardRotate');

	if($(this).hasClass('cardRotate')) {
		$('.card').on("click", function() {
			$(this).removeClass('cardRotate').addClass('backRotate');
		});
	} else if($(this).hasClass('backRotate')) {
		$('.card').on("click", function() {
			$(this).removeClass('backRotate').addClass('cardRotate');
		});
	}
});

/**
$('.card').on('click',function(){
	$('.cardRotate').addClass('backRotate').removeClass('cardRotate');
	$(this).addClass('cardRotate').removeClass('backRotate');
});
**/

$('.iphone').click(function(){
	alert('전시장에서 직접 확인하세요.');
});

