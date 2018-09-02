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
		 create(action,  formToJSON());
	 }
	 
});
var publishers=[];
$(document).ready(function() {
	$.getJSON('rest/publisher',function(jsonArray){
		  $.each(jsonArray, function(i,json) {
			  publishers.push({label:json.name, value:json.id});
		  });
	});  
$(function() {
$('#publisherid').autocomplete({
	source: publishers
	});});

       
});

function formToJSON() {
    return JSON.stringify({
        "title": $('#title').val(),
        "price": $('#price').val(),
        "nbpage": $('#nbpage').val(),
        "publisher":{"id":$('#publisherid').val()},
        "authors":[{"id":$('#authors').val()}]
        });
}

