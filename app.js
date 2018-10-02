$('ul').on('click', 'li', function() {
	$(this).toggleClass('done');
})

$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
})

$('input[type="text"').keypress(function(event) {
	if(event.which == 13) {
		let todoText = $(this).val();
		$(this).val('');
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
	}
})

$("#inputToggleIcon").on('click', function() {
	$(this).toggleClass('fa-plus');
	$('input[type="text"').fadeToggle(200);
})

