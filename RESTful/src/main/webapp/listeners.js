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
		create(action, data);
	}
});

$('input.autocomplete').keyup(function() {
	var list = [];
	var name = $(this).attr('name');
	var url = 'rest/' + name;
	var id = '#' + name;
	$(document).ready(function() {
		$.getJSON(url, function(jsonArray) {
			$.each(jsonArray, function(i, json) {
				list.push({
					label : json.name,
					value : json.id
				});
			});
		});
		$(id).autocomplete({
			source : list
		});
	});

});

function bookToJSON() {
	return JSON.stringify({
		"title" : $('#title').val(),
		"price" : $('#price').val(),
		"nbpage" : $('#nbpage').val(),
		"publisher" : {
			"id" : $('#publisher').val()
		},
		"authors" : [ {
			"id" : $('#author').val()
		} ]
	});
}
