$(document).ready(function() {

	$.ajax({
	  url: 'https://randomuser.me/api/?results=12&nat=us',
	  dataType: 'json',
	  success: function(data) {
	    data.results.map(function(v,i,arr) {
	    	$name = '<h2 class="cpt">'+ v.name.first +' '+ v.name.last +'</h2>';
	    	$email = '<p>'+ v.email +'</p>';
	    	$city = '<p class="cpt">'+ v.location.city +'</p>';
	    	$tel = '<p>'+ v.cell +'</p>';
	    	$address = '<p class="cpt">'+ v.location.street+' '+ v.location.city +', '+v.location.state+' '+v.location.postcode+'</p>';
	    	$dob = '<p>Birthday: '+v.dob.substring(0, v.dob.indexOf(' '));+'</p>';
				$('.employee-direct').append('<div class="employee"><div class="content"> <img src="'+ v.picture.medium +'" />'+$name+''+$email+''+$city+'</div><div class="employee-info"> <img src="'+ v.picture.large +'"/>'+$name+''+$email+''+$city+'<div class="gray-line"></div>'+$tel+''+$address+''+$dob+' </div></div>');
			});
	  }
	});

	function getOrder() {
		$nextInfo = $('.current-info').parent().nextAll('.employee:not(.hidden-usr)').first().find('.employee-info');
		$prevInfo = $('.current-info').parent().prevAll('.employee:not(.hidden-usr)').first().find('.employee-info');
	}

	$('.employee-direct').on('click', '.employee',function() {
		$('.overlay').fadeIn();
		$('.employee-info').fadeOut();
		$(this).find('.employee-info').addClass('current-info').fadeIn();
		console.log('click');
		getOrder();
	})

	//----controls
	//exit overlay
	$('.overlay-exit').click(function() {
		$('.overlay, .employee-info').fadeOut();
		$('.current-info').removeClass('current-info');
	});

	//search filter
	$('.search input').keyup(function() {
		$filter = $('.search input').val().toLowerCase();
		$('.employee .content h2').each(function(i,v) {
			if ($(this).text().indexOf($filter) >= 0) {
				if ($(this).parent().parent().hasClass('hidden-usr')) {
					$(this).parent().parent().removeClass('hidden-usr');
				}
			} else {
				$(this).parent().parent().addClass('hidden-usr');
			}
		});
	});

	//arrow click
	$('.arrow').click(function() {
			getOrder();
		if ($(this).hasClass('right-arrow') && $nextInfo.hasClass('employee-info')) {
			$('.current-info').removeClass('current-info').fadeOut();
			$nextInfo.addClass('current-info').fadeIn();
		} else if ($prevInfo.hasClass('employee-info')) {
			$('.current-info').removeClass('current-info').fadeOut();
			$prevInfo.addClass('current-info').fadeIn();
		}
	});

	//swipe
	$('.overlay').on('swipeleft', function() {
		getOrder();
		if ($nextInfo.hasClass('employee-info')) {
			$('.current-info').removeClass('current-info').fadeOut();
			$nextInfo.addClass('current-info').fadeIn();
		}
	});
	$('.overlay').on('swiperight', function() {
		getOrder();
		if ($prevInfo.hasClass('employee-info')) {
			$('.current-info').removeClass('current-info').fadeOut();
			$prevInfo.addClass('current-info').fadeIn();
		}
	});

	

});//close JS
      