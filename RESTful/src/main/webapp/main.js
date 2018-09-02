function search(url){	 
	  $("#title-results").empty();
	  $.get(url,functionPutBookInTable);
}

function create(url, data){	 
	  $.post(url,data);
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
    $("#title-results").append(string);
}

function deleteBook (id) {
    $.ajax({
                url: 'rest/book/' + id,
                type: 'DELETE'
        });
};

