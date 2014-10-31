//charsleft 

$('#description').bind('keyup', function(e) {
	var left = 200 - $(this).val().length;

	$('.charleft').text(left)
});


$(document).on('click', '.addtopic', function() {
	var $inputs = $('#addtopic :input');

    // not sure if you wanted this, but I thought I'd add it.
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    console.log(values)
    if (!values.title) {

    } else if(!values.skypeid) {

    } else {
    	$('#secondModal').foundation('reveal', 'open');
    }
	//
})

//validation