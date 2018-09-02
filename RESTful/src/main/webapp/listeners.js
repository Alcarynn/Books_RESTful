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
		 create(action,input);
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