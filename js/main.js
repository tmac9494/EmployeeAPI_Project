$(document).ready(function() {

	$.ajax({
	  url: 'https://randomuser.me/api/?results=12&nat=us',
	  dataType: 'json',
	  success: function(data) {
	    console.log(data);
	    data.results.map(function(v,i,arr) {
	    	$name = '<h2>'+ v.name.first +' '+ v.name.last +'</h2>';
	    	$email = '<p>'+ v.email +'</p>';
	    	$city = '<p>'+ v.location.city +'</p>';
	    	$tel = '<p>'+ v.cell +'</p>';
	    	$address = '<p>'+ v.location.street+' '+ v.location.city +', '+v.location.state+' '+v.location.postcode+'</p>';
	    	$dob = '<p>Birthday: '+v.dob.substring(0, v.dob.indexOf(' '));+'</p>';
				$('.employee-direct').append('<div class="employee"><div class="content"> <img src="'+ v.picture.medium +'" />'+$name+''+$email+''+$city+'</div><div class="employee-info"> <img src="'+ v.picture.large +'"/>'+$name+''+$email+''+$city+'<div class="gray-line"></div>'+$tel+''+$address+''+$dob+' </div></div>');
			});
	  }
	});

	$('.employee-direct').on('click', '.employee',function() {
		$('.overlay').fadeIn();
		$('.employee-info').fadeOut();
		$(this).find('.employee-info').fadeIn();
		console.log('click')
	})

	

});//close JS
      