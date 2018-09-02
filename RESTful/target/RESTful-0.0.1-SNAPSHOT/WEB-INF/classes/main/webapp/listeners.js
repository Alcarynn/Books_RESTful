$('form').submit(function(event){
	 event.preventDefault();
	 var action =  $(this).attr('action');
	 var method = $(this).attr('method');
	 var input = $(this).children('input').val();
	 var dataArray = $(this).serializeArray();
	 
	 var dataJSON = {};
	    
	 $.each(dataArray, function() {
		 dataJSON[this.name] = this.value || '';
	    });
	 
	 if(method=="get"){
		 var url =  action + input;
		 search(url);
	 }
	 if(method=="post"){
		 create(action,dataJSON);
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