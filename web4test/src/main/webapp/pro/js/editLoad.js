
$(document).ready(function(){
	var dataHTML;
	
	$.ajax({
		url: '/web4test/presentationInitLoad.do',
		method: 'GET',
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		dataType: 'json',
//		data: {
//			content: JSON.stringify($('section').html())
//		},
		success: function(data) {
			if (data.result == 'success') {// 저장된 프레젠테이션 로드할 시(<->new deck)
				console.log('result: ' + data);
				
				$('.slides').find('.initial').detach();
				dataHTML = $.parseHTML(data.content);
				$('.slides').append(dataHTML);
				
			}
			
			$.getScript('js/basic.js', function() {
				console.log('js/basic.js load');
				
				$.getScript('js/Edit.js', function() {
					console.log('js/Edit.js load');
				});
			});
			

		},
		error: function(e) {
			console.error('init load 에러[ajax]: ' + e);
		}
	});
	
    
});
