$.fn.shuffleChildren = function() {
  $.each(this.get(), function(index, el) {
    var $el = $(el);
    var $find = $el.children();

    $find.sort(function() {
      return 0.5 - Math.random();
    });

    $el.empty();
    $find.appendTo($el);
  });
};

$(".one").click(function() {
  $(".hide").toggle();
  $(".hide").shuffleChildren();
});

$(".two").click(function() {
  $(".hide2").toggle();
  $(".hide2").shuffleChildren();
});

$(".three").click(function(){
	$(".hide3").toggle();
    $(".hide3").shuffleChildren();
});

$(".four").click(function(){
	$(".hide4").toggle();
	$(".hide4").shuffleChildren();
});

$(".five").click(function(){
	$(".hide5").toggle();
	$(".hide5").shuffleChildren();
});

$(".six").click(function(){
	$(".hide6").toggle();
	$(".hide6").shuffleChildren();
});


$(".ten").click(function(){
	$(".hide10").toggle();
	$(".hide10").shuffleChildren();
});

$(".seventeen").click(function(){
	$(".hide17").toggle();
	$(".hide17").shuffleChildren();
});

$(".eighteen").click(function(){
	$(".hide18").toggle();
	$(".hide18").shuffleChildren();
});