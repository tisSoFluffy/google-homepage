$(document).ready(function(){
	// for (var i = 0; i <= 25; i++) {
	// 	var curOpt = '<option value=' + i + '>' + i + '</option>';
	// 	console.log(curOpt);
	// 	$('.checkListReps').append(curOpt);
	// };
    $('#button').click(function(){
        var toAdd = $("#checkListItem").val();
        var reps = $("#checkListReps").val();
        $('.list').append('<li class="item">' + toAdd + "  |  " + reps +'</li>')
        
    });
    $(document).on('click','.item', function(){
        $(this).remove();
    });
    $('ol').sortable();
});