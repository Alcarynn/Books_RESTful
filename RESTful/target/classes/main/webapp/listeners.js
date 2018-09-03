$('form').submit(function(event) {
	event.preventDefault();
	var action = $(this).attr('action');
	var method = $(this).attr('method');
	var input = $(this).children('input').val();
	if ($(this).children('input').attr('class') == "name") {
		var data = JSON.stringify({
			"name" : input
		});
	} else {
		var data = bookToJSON();
	}

	if (method == "get") {
		
		var url = action + input;
		search(url);
	}
	if (method == "post") {
		if($('#id').val()!=""){
			update(action, data);
		}
		else{
			create(action, data);
		}
		
	}
});
$('document').ready(function(){
	
})
$('input.autocomplete').keyup(function() {
	var list = [];
	var name = $(this).attr('name');
	var url = 'rest/' + name;
	var id = '#' + name;
	
	$.getJSON(url, function(jsonArray) {
		$.each(jsonArray, function(i, json) {
			list.push({
				label : json.name,
				value : json.id
			});
		});
	});
	
	$(id).autocomplete({
			source : list,
			minLength : 1,
			maxShowItems: 5
		});
});

function bookToJSON() {
	return JSON.stringify({
		"id" : parseInt($('#id').val()),
		"title" : $('#title').val(),
		"price" : parseFloat($('#price').val()),
		"nbpage" : parseInt($('#nbpage').val()),
		"publisher" : {
			"id" : parseInt($('#publisher').val())
		},
		"authors" : [ {
			"id" : parseInt($('#author').val())
		} ]
	});
}


