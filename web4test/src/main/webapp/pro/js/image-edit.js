$(function(){
//	var preX ;
//	var moveX;
//	var sLineWidthFinalInput;
//	var sLineFlag = false;
//	var spxLineWidthSize;
//	var snumLineWidthSize;
//	var i;
//	var objContent;
//	var middle;
//	
	//-투명도 값 스크롤 조정
	var iopSizeInput;
	var iopFlag = false;
	$(".image.opacity.size-scroll").on('mousedown', function(event){
		iopFlag = true;
		if(iopFlag == true){
		$(".image.opacity.size-scroll").on("mousemove", function(ev){
			console.log("ddd")
			iopSizeInput = $(ev.target).val();
			$(".image.opacity.size-box").val(iopSizeInput);
		}); 
		}
	})
	//-투명도 값 스크롤 조정
		$(".image.opacity.size-scroll").on('mousedown', function(event){
			iopFlag = true;
			if(iopFlag == true){
			$(".image.opacity.size-scroll").on("mousemove", function(ev){	
				iopSizeInput = $(ev.target).val();
				$(".image.opacity.size-box").val(iopSizeInput);
		    }); 
		  }
	    })
			
	//-투명도값 관리 
		$(".image.opacity.size-scroll").on("mouseup", function(){
		   objContent = $(".isFocus").children('.sl-block-content');
		   $(".image.opacity.size-box").val(iopSizeInput );
			objContent.css('opacity', iopSizeInput);		
			iopFlag = false;
		});
			
	//- 투명도값 직접 입력받기
	$(".image.opacity.size-scroll").on("dblclick", function(ev){
		objContent = $(".isFocus").children('.sl-block-content');
	  $(this).css("z-index", "0");
	  $(this).addClass("back");
	  $(".image.opacity.size-scroll").focus();
		  	$(".image.opacity.size-box").on('keyup', function(){
		  		iopSizeInput = $(".image.opacity.size-box").val();
				objContent.css('opacity', iopSizeInput);		
			});// 입력값 적용 
	 }); 
	
	 // - 투명도 직접 입력 받기 해제
	$(document).not($(".image.opacity.size-box")).click(function(){
      $("image.opacity.size-scroll").css("z-index", "16");
      $("image.opacity.size-scroll").removeClass("back");
	});

	//투명도값 적용
	$(".image.opacity.size-scroll").on('change', function(){	
	  $('.sl-block.isFocus .sl-block-content').css('opacity', $(this).val());
	});

//	// 디폴트 선 설정 및 적용
	$('.shape-checkbox').on('click', function(){
		if($('.shape-checkbox').prop('checked')){
			$(".sl-block.isFocus .sl-block-content").css('border-width','1px');
			$(".sl-block.isFocus .sl-block-content").css('border-style','solid');
			$(".sl-block.isFocus .sl-block-content").css('border-color','black');
		} else {
			$(".sl-block.isFocus .sl-block-content").css('border','');
		}
	});
	
	
// shape 박스 Border 관리
$(".shape.lineWidth.size-box").on('mousedown', function(){	
	objContent = $(".isFocus").children('.sl-block-content')
	spxLineWidthSize = objContent.css('border-width');
	snumLineWidthSize = pxRemove(spxLineWidthSize);
	$(".shape.lineWidth.size-box").val(snumLineWidthSize);
    preX = event.offsetX;
    i = parseInt($(".shape.lineWidth.size-box").val());
    sLineFlag = true;
    	
    	$(".shape.lineWidth.size-box").on('mousemove', function(ev){
    		if(sLineFlag == true){ // 마우스 무브 
    		moveX = ev.offsetX;
    		if(preX < moveX){
    				 if(i < 100){
    					 i = parseInt($(".shape.lineWidth.size-box").val());
    					 middle = $(".shape.lineWidth.size-box").val(i+1);
    					 objContent.css('border-width', middle + 'px');
    				 }// 증가 범위 설정
    				 else if (i > 100){
    					 $(".shape.lineWidth.size-box").val(100);
    				 } // 최고점 100 마지막 괄호
    		}// 오른쪽 으로 움직일 때 닫는 괄호
    		else if(moveX < preX){ // 왼쪽으로 움직일 때
    			if (i > 1){ // 일반적 감소
    				i = parseInt($(".shape.lineWidth.size-box").val());
    				middle = $(".shape.lineWidth.size-box").val(i -1);	    					 
    				objContent.css('border-width', middle + 'px'); 				
    				}// 감소할 때 값 마지막 괄호
    			else if (i <= 1){
    				i = parseInt($(".shape.lineWidth.size-box").val());
    				$(".shape.lineWidth.size-box").val(1);
    				}// 감소 최저값
    		} // 왼쪽으로 움직일 때 마지막 괄호
     }// 마우스 무브 열림 내용 닫는 괄호
});// 마우스 무브 마지막 괄호
    	
});

$(".shape.lineWidth.size-box").on('mouseup', function(){
	sLineFlag = false;
	preX = '0';
	$(".shape.lineWidth.size-box").blur();
	sLineWidthFinalInput = $(".shape.lineWidth.size-box").val();
	objContent.css('border-width', sLineWidthFinalInput + 'px');
});// 마우스 업일 때 동작 해제

$(".shape.lineWidth.size-box").on('dblclick', function(){ // 직접 입력받기
	$("shape.lineWidth.size-box").focus();
	sLineWidthFinalInput = $("shape.lineWidth.size-box").val();
	objContent.css('border-width', sLineWidthFinalInput +'px');
}); // 직접 입력 받기
		

$('.shape-border-colorinput').on('change', function(){
	sBorderColor = $(this).val();
    var sBorderColorCheck = rgb2hex(sBorderColor); 
    if(sBorderColorCheck == '#ffffff'){ //투명값일 경우
    	$('.shape-checkbox').prop('checked', false) // 체크박스에 표시 안되게 해야함
    } else {
    	$('.shape-checkbox').prop('checked', 'true') // 체크박스에 표시하기 
    }
	$('.sl-block.isFocus .sl-block-content').css('border-color', sBorderColorCheck);			
});
		
	
});

function pxRemove(inputVal){
	var inputNum = inputVal.slice(0, -2);
    return  parseInt(inputNum);
}

