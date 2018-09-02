$('form').submit(function(event){
	 event.preventDefault();
	 var action =  $(this).attr('action');
	 var method = $(this).attr('method');
	 var input = $(this).children('input').val();
	
	 if(method=="get"){
		 var url =  action + input;
		 search(url);
	 }
	 if(method=="post"){
		 $.ajax({
		        type: 'POST',
		        contentType: 'application/json',
		        url: action,
		        dataType: "json",
		        data: formToJSON(),
		        success: function(data, textStatus, jqXHR){
		            alert('Book created successfully');
		        },
		        error: function(jqXHR, textStatus, errorThrown){
		            alert('addBook error: ' + textStatus);
		        }
		    });
	 }
	 
});
$(function() {
$('#publisher').autocomplete({
	source: publishers
	});});
$(document).ready(function() {
	$.getJSON('rest/publisher',function(jsonArray){
		  $.each(jsonArray, function(i,json) {
			  publishers.push({label:json.name, value:json.id});
		  });
	});         
});

var publishers=[];