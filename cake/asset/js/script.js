var feelings = [
	'happy',
	'sad',
	'thirsty',
	'creepy',
	'bored',
	'hungry',
	'horny',
	'nerveous',
	'thrilled',
	'weired',
	'terrified'
]


$('.candle').draggable();
$(".candle").on("click mouseenter", function() {
	$(this).children().addClass("light");
	$(".cube").addClass("stop");
	$(".cube2").addClass("stop");
	$(".cube3").addClass("stop");
});

$('.candle').each(function() {
	$(this).css({
		height: Math.floor((Math.random() * 10) + 40) + "px", // max 50px
	});
});

var feeling = feelings[Math.floor(Math.random() * feelings.length)];
$('<a class="feeling" href="asset/img/image.jpeg" download="image.jpeg">' + feeling + '? </a>').css({
	'color': "white"
}).appendTo("h1");

var txt = $(".feeling").text();

var timer = setInterval(function() {
	var feeling = feelings[Math.floor(Math.random() * feelings.length)];

	if($(".feeling:contains(txt)")) {
		$(".feeling").text(feeling+"?");
	}
}, 1000);

$(".feeling").on("mouseenter", function() {
	clearInterval(timer);
})



