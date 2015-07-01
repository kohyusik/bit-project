//$(function(){
//
//	
//	$(".global-header").on('mouseover', function(){
//		$("div.nav-item").show();
//		
//	});
//	
//	$(".global-header").on('mouseout', function(){
//		$("div.nav-item").hide();
//	});
//		
//});

//$(function(){
//
//	$(".wrapper").on('mouseover', function(){
//		$("div.nav-item").css('visibility', 'visible');
//		
//	});
//	
//	$(".wrapper").on('mouseout', function() {
//		$("div.nav-item").css('visibility', 'hidden');
//	});
//		
//});
//$( document ).on( "mousemove", function( event ) {
//  $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
//});

// - font-size 관리 변수
var fontSizeInput;

// -font-size 스크롤 조정
$(".font.size-scroll").on("mousemove", function(ev) {
	fontSizeInput = $(ev.target).val();
	$(".font.size-box").val(fontSizeInput);
});

// TEXT - font 사이즈 관리
// -font-size 스크롤 완료
$(".font.size-scroll").on("mouseup", function() {
	$(".font.size-box").val(fontSizeInput);

});
// - font size 직접 입력받기
$(".font.size-scroll").on("dblclick", function(ev) {
	$(this).css("z-index", "0");
	$(this).addClass("back");
	$(".font.size-box").focus();
	fontSizeInput = $(".font.size-box").val();
});
// - font size 입력 완료
$(document).not($(".font.size-box")).click(function() {
	$(".font.size-scroll").css("z-index", "2");
	$(".font.size-scroll").removeClass("back");
});

//	
$(function() {

	$(".wrapper").hover(function() {
		$("div.nav-item").css('visibility', 'visible');
	}, function() {
		$("div.nav-item").css('visibility', 'hidden');
	});

	$("div.nav-item").hover(function() {
		$("div.nav-item").css('visibility', 'visible');
	}, function() {
		$("div.nav-item").css('visibility', 'hidden');
	});

	// text
	$(".toolbar-text").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".text-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".text-list")).click(function() {
		$(".text-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".text-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".text-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".text-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".text-list .toolbar-select .text-toolbar-select-trigger").hover(
			function() {
				if (!$(".text-toolbar-panel").hasClass("open")) {
					$(".text-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".text-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".text-toolbar-panel").css('visibility', 'hidden');
				$(".text-toolbar-panel").removeClass("open");
			});

	$(".text-toolbar-select-item1").click(
			function() {
				$(".text-toolbar-select-trigger").text(
						$(".text-toolbar-select-item1").text());
			});
	$(".text-toolbar-select-item2").click(
			function() {
				$(".text-toolbar-select-trigger").text(
						$(".text-toolbar-select-item2").text());
			});
	$(".text-toolbar-select-item3").click(
			function() {
				$(".text-toolbar-select-trigger").text(
						$(".text-toolbar-select-item3").text());
			});

	$(".text-toolbar-panel").hover(function() {
		$(".text-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".text-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".text-toolbar-panel")).click(function() {
		if ($(".text-toolbar-panel").hasClass("open")) {
			$(".text-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".text-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".text-list")).click(function() {
		$(".text-list").css('visibility', 'hidden');
		$(".text-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// image
	$(".toolbar-image").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".image-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".image-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".image-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".image-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".image-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".image-list .toolbar-select .image-toolbar-select-trigger").hover(
			function() {
				if (!$(".image-toolbar-panel").hasClass("open")) {
					$(".image-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".image-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".image-toolbar-panel").css('visibility', 'hidden');
				$(".image-toolbar-panel").removeClass("open");
			});

	$(".image-toolbar-select-item1").click(
			function() {
				$(".image-toolbar-select-trigger").text(
						$(".image-toolbar-select-item1").text());
			});
	$(".image-toolbar-select-item2").click(
			function() {
				$(".image-toolbar-select-trigger").text(
						$(".image-toolbar-select-item2").text());
			});
	$(".image-toolbar-select-item3").click(
			function() {
				$(".image-toolbar-select-trigger").text(
						$(".image-toolbar-select-item3").text());
			});

	$(".image-toolbar-panel").hover(function() {
		$(".image-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".image-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".image-toolbar-panel")).click(function() {
		if ($(".image-toolbar-panel").hasClass("open")) {
			$(".image-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".image-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".image-list")).click(function() {
		$(".image-list").css('visibility', 'hidden');
		$(".image-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// shape
	$(".toolbar-shape").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".shape-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".shape-list")).click(function() {
		$(".shape-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".shape-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".shape-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".shape-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".shape-list .toolbar-select .shape-toolbar-select-trigger").hover(
			function() {
				if (!$(".shape-toolbar-panel").hasClass("open")) {
					$(".shape-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".shape-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".shape-toolbar-panel").css('visibility', 'hidden');
				$(".shape-toolbar-panel").removeClass("open");
			});

	$(".shape-toolbar-select-item1").click(
			function() {
				$(".shape-toolbar-select-trigger").text(
						$(".shape-toolbar-select-item1").text());
			});
	$(".shape-toolbar-select-item2").click(
			function() {
				$(".shape-toolbar-select-trigger").text(
						$(".shape-toolbar-select-item2").text());
			});
	$(".shape-toolbar-select-item3").click(
			function() {
				$(".shape-toolbar-select-trigger").text(
						$(".shape-toolbar-select-item3").text());
			});

	$(".shape-toolbar-panel").hover(function() {
		$(".shape-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".shape-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".shape-toolbar-panel")).click(function() {
		if ($(".shape-toolbar-panel").hasClass("open")) {
			$(".shape-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".shape-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".shape-list")).click(function() {
		$(".shape-list").css('visibility', 'hidden');
		$(".shape-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// iframe
	$(".toolbar-iframe").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".iframe-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".iframe-list")).click(function() {
		$(".iframe-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".iframe-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".iframe-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".iframe-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".iframe-list .toolbar-select .iframe-toolbar-select-trigger").hover(
			function() {
				if (!$(".iframe-toolbar-panel").hasClass("open")) {
					$(".iframe-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".iframe-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".iframe-toolbar-panel").css('visibility', 'hidden');
				$(".iframe-toolbar-panel").removeClass("open");
			});

	$(".iframe-toolbar-select-item1").click(
			function() {
				$(".iframe-toolbar-select-trigger").text(
						$(".iframe-toolbar-select-item1").text());
			});
	$(".iframe-toolbar-select-item2").click(
			function() {
				$(".iframe-toolbar-select-trigger").text(
						$(".iframe-toolbar-select-item2").text());
			});
	$(".iframe-toolbar-select-item3").click(
			function() {
				$(".iframe-toolbar-select-trigger").text(
						$(".iframe-toolbar-select-item3").text());
			});

	$(".iframe-toolbar-panel").hover(function() {
		$(".iframe-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".iframe-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".iframe-toolbar-panel")).click(function() {
		if ($(".iframe-toolbar-panel").hasClass("open")) {
			$(".iframe-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".iframe-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".iframe-list")).click(function() {
		$(".iframe-list").css('visibility', 'hidden');
		$(".iframe-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	
	
	
	
	// code
	$(".toolbar-code").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".code-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".code-list")).click(function() {
		$(".code-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".code-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".code-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".code-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".code-list .toolbar-select .code-toolbar-select-trigger").hover(
			function() {
				if (!$(".code-toolbar-panel").hasClass("open")) {
					$(".code-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".code-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".code-toolbar-panel").css('visibility', 'hidden');
				$(".code-toolbar-panel").removeClass("open");
			});

	$(".code-toolbar-select-item1").click(
			function() {
				$(".code-toolbar-select-trigger").text(
						$(".code-toolbar-select-item1").text());
			});
	$(".code-toolbar-select-item2").click(
			function() {
				$(".code-toolbar-select-trigger").text(
						$(".code-toolbar-select-item2").text());
			});
	$(".code-toolbar-select-item3").click(
			function() {
				$(".code-toolbar-select-trigger").text(
						$(".code-toolbar-select-item3").text());
			});

	$(".code-toolbar-panel").hover(function() {
		$(".code-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".code-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".code-toolbar-panel")).click(function() {
		if ($(".code-toolbar-panel").hasClass("open")) {
			$(".code-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".code-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".code-list")).click(function() {
		$(".code-list").css('visibility', 'hidden');
		$(".code-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// math
	$(".toolbar-math").click(function() {
		$(".toolbar-list").css('visibility', 'hidden');
		$(".math-list").css('visibility', 'visible');
	});

	$(".page-wrapper").not($(".math-list")).click(function() {
		$(".math-list").css('visibility', 'hidden');
		$(".toolbar-list").css('visibility', 'visible');
	});

	$(".math-toolbar-group-trigger").click(function() {
		if (!$(this).hasClass("open")) {
			$(".math-toolbar-group-options").css({
				'height' : '274px',
				'visibility' : 'visible',
				'opacity' : '1'
			});
			$(this).addClass("open");
		} else if ($(this).hasClass("open")) {
			$(".math-toolbar-group-options").css({
				'height' : '0px',
				'visibility' : 'hidden',
				'opacity' : '0'
			});
			$(this).removeClass("open");
		}
	});
	$(".math-list .toolbar-select .math-toolbar-select-trigger").hover(
			function() {
				if (!$(".math-toolbar-panel").hasClass("open")) {
					$(".math-toolbar-panel").css({
						'visibility' : 'visible',
						'top' : (event.pageY - 10)
					});
					$(".math-toolbar-panel").addClass("open");

				}
			}, function() {
				$(".math-toolbar-panel").css('visibility', 'hidden');
				$(".math-toolbar-panel").removeClass("open");
			});

	$(".math-toolbar-select-item1").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item1").text());
			});
	$(".math-toolbar-select-item2").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item2").text());
			});
	$(".math-toolbar-select-item3").click(
			function() {
				$(".math-toolbar-select-trigger").text(
						$(".math-toolbar-select-item3").text());
			});

	$(".math-toolbar-panel").hover(function() {
		$(".math-toolbar-panel").css('visibility', 'visible');
	}, function() {
		$(".math-toolbar-panel").css('visibility', 'hidden');
	});

	$(".page-wrapper").not($(".math-toolbar-panel")).click(function() {
		if ($(".math-toolbar-panel").hasClass("open")) {
			$(".math-toolbar-panel").css({
				'visibility' : 'hidden',
			});
			$(".math-toolbar-panel").removeClass("open");
		}
	});

	$(".page-wrapper").not($(".math-list")).click(function() {
		$(".math-list").css('visibility', 'hidden');
		$(".math-toolbar-group-options").css({
			'height' : '0px',
			'visibility' : 'hidden',
			'opacity' : '0'
		});
		$(this).removeClass("open");
	});

	// $(".page-wrapper").not($(".image-list")).click(
	// function() {
	// $(".math-list").css('visibility', 'hidden');
	// $(".toolbar-list").css('visibility', 'visible');
	// }
	// );

	// \$( "div.nav-item" ).onclick(
	// function() {
	// $(".toolbars .toolbar .toolbar-list").css('visibility', 'visible');
	// }, function() {
	// $(".toolbars .toolbar .text-list").css('visibility', 'hidden');
	// }
	// );

});