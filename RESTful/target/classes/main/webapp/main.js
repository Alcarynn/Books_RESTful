function search(url){	 
	  $("#results").empty();
	  $.get(url,functionPutBookInTable);
}

function create(URL, input){	 
	 $.post({
	        contentType: 'application/json',
	        url: URL,
	        data: input,
	        success: function(data, textStatus, jqXHR){
	        	var result = "";
	        	$.each(data, function(index,value){
	        		result+= value + " ";
	        	})
	            alert('Item ' + result + ' created successfully');
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            alert('Create error: ' + textStatus);
	        }
	    });
}
function update(URL, input){	 
	 $.ajax({
		 	type: 'put',
	        contentType: 'application/json',
	        url: URL,
	        data: input,
	        success: function(data, textStatus, jqXHR){
	        	var result = "";
	        	$.each(data, function(index,value){
	        		result+= value + " ";
	        	})
	            alert('Item ' + result + ' updated successfully');
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            alert('Update error: ' + textStatus);
	        }
	    });
}

function functionPutBookInTable(response) {
    var string = '';
    $.each(response, function( index, value ) {
      string += '<tr><td>' + value.id
      + '</td><td>' + value.title
      + '</td><td>' + value.price
      + '</td><td>' +value.nbpage + '</td><td>';
      if(value.publisher != undefined){
          string +=  value.publisher.name;
      }
      string +=  '</td><td>'
      if(value.authors != undefined){
          var virgule = '';
          $.each(value.authors, function( index, valueauthors ) {
              string +=  virgule + valueauthors.name;
              virgule = ', ';
              })
      }
      string += '</td><td>'
      string += '<button type="button" onclick="deleteBook(' + value.id + ')">X</button>'
      string += '</td></tr>';
    });
    $("#results").append(string);
}

function deleteBook (id) {
    $.ajax({
                url: 'rest/book/' + id,
                type: 'DELETE'
        });
};


