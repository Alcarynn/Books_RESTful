$('form').submit(function(event) {
	event.preventDefault();
	var action = $(this).attr('action');
	var method = $(this).attr('method');
	
	if ($(this).children('input').attr('class') == "name") {
		var data = JSON.stringify({
			"name" : input
		});
	} else {
		var data = bookToJSON();
	}

	if (method == "get") {
		var input = $(this).children('input').val();
		var url = action + input;
		search(url);
	}
	if (method == "post") {
		if($('#id').val()==""){
			create(action, data);
		}
		else{
			update(action, data);
		}
		
	}
});
$('document').ready(function(){
	
})
$('input.autocomplete').keyup(function() {
var list = [];
	
	$.getJSON(url, function(jsonArray) {
		$.each(jsonArray, function(i, json) {
			list.push({
				label : json.name,
				value : json.id
			});
		});
	});
	var name = $(this).attr('name');
	var url = 'rest/' + name;
	var id = '#' + name;
		$(id).autocomplete({
			source : list,
			minLength : 1,
			maxShowItems: 5
		});
});

function bookToJSON() {
	return JSON.stringify({
		"id" : $('#id').val(),
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
