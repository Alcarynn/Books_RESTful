function search(url) {
	$("#results").empty();
	$.get(url, function(jsonArray) {
		var string = '';
		$.each(jsonArray, function(index, json) {
			string += bookToHtmlForm(json);
		});
		$("#results").append(string);
	});
}

function create(URL, input) {
	$.post({
		contentType : 'application/json',
		url : URL,
		data : input,
		success : function(data, textStatus, jqXHR) {
			var result = "";
			$.each(data, function(index, value) {
				result += value + " ";
			})
			alert('Item ' + result + ' created successfully');
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('Create error: ' + textStatus);
		}
	});
}
function update(URL, input) {

	$.ajax({
		type : 'put',
		contentType : 'application/json',
		url : URL,
		data : input,
		success : function(data, textStatus, jqXHR) {
			var result = "";
			$.each(data, function(index, value) {
				result += value + " ";
			})
			alert('Item ' + result + ' updated successfully');
		},
		error : function(jqXHR, textStatus, errorThrown) {
			alert('Update error: ' + textStatus);
		}
	});
}

function bookToHtmlForm(json) {
	var string = '';
	//string += '<form action="rest/book" method="post">';
	string += '<tr><td>';
	string += json.id;
	string += '</td><td>';
	string += valueToHTmlInput(json.title, "input", "text", "title");
	string +='</td><td>';
	string += valueToHTmlInput(parseFloat(json.price), "input", "number", "price");
	string +='</td><td>';
	string += valueToHTmlInput(parseInt(json.nbpage), "input", "number", "nbpage");
	string +='</td><td>';
	if (json.publisher != undefined) {
		string += json.publisher.name;
	}
	string += '</td><td>'
	if (json.authors != undefined) {
		var virgule = '';
		$.each(json.authors, function(index, jsonauthors) {
			string += virgule + jsonauthors.name;
			virgule = ', ';
		})
	}
	string += '</td><td>';
	string += valueToHTmlInput("Update", "input", "submit", "update" + json.id);
	//string += '</td><td><button type="button" onclick="updateBook(' + json.id	+ ')" value="OK"/>'
	string += '</td><td><button type="button" onclick="deleteBook(' + json.id
			+ ')">X</button>'
	string += '</td></tr>';
	return string;
}

function valueToHTmlInput(value, tag, type, id){
	return '<' + tag + ' type="' + type + '" id="' + id + '" value="'+ value +'"/>';
}

function deleteBook(id) {
	$.ajax({
		url : 'rest/book/' + id,
		type : 'DELETE'
	});
};

function fillUpdate() {
	$("#update").empty();
	var string = '<td><input type="text" name="title" id="title" /></td>'
			+ '<td><input type="number" name="price" id="price" /></td>'
			+ '<td><input type="number" name="nbpage" id="nbpage" /></td>'
			+ '<td><input class="autocomplete" type="text" name="publisher"'
			+ 'id="publisher" placeholder="Search.."></td>'
			+ '<td><input class="autocomplete" type="text" name="author"'
			+ 'id="author" placeholder="Search.." /></td>';
	$("#update").append(string);
}

function deleteBook (id) {
    $.ajax({
                url: 'rest/book/' + id,
                type: 'DELETE'
        });
};
