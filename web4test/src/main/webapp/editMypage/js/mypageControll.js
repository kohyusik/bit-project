$(function(){
	console.log("요청 로드 시작")
	var ip = '127.0.0.1:9999/web4test'
	
	$.ajax('http://' + ip + '/mypageLoad.do', {
		method: 'POST',
		dataType: 'json',
		data: {
//			email: 'rabbit622hyein@gmail.com'// 이메일 정보 로그인 페이지에서 빼오기
			email : 'hyeinlee622@gmail.com'
		},
		success: function(result) {
			console.log("받아오기")
			console.log(result.empty);
			var s1i1 = "최근 작업 내용이 없습니다."
			var s1i2 = "저장한 내용이 없습니다."
			var s2i1 = "즐겨찾기 등록 내용이 없습니다."
			var s2i2 = "전체공개로 설정된 슬라이드가 없습니다."
			var sectionOneinnerOne =  $(".section.one.inner.one div.inside-list ul.inside-list.latest");
			var sectionOneinnerTwo = $(".section.one.inner.two div.inside-list ul.inside-list.whole");
			var sectionTwoinnerOne = $(".section.two.inner.one div.inside-list ul.inside-list.Favoriteshare");
			var sectionTwoinnerTwo = $(".section.two.inner.two div.inside-list ul.inside-list.share");									
				
			if (result.myEmpty == 'yes'){
				// 저장된 데이터가 없음을 표시
				emptyCase(sectionOneinnerOne, s1i1);
				emptyCase(sectionOneinnerTwo, s1i2);
				
			} else {
			// 최근 작업 슬라이드
			var latest = result.latestData; // latestData : 최근 작업한 슬라이드 한개 뽑아서 저장
			drawInnerMyList(sectionOneinnerOne, latest);  // drawInnerMyList 함수로 li 내용 그리고 appendTo까지 하기
			
			// 전체 목록 불러오기
			var whole = result.wholeData; // wholeData : 사용자의 전체 슬라이드 저장한 내용
			drawWholeList(sectionOneinnerTwo, whole);
		    }
			
			
			// 즐겨찾기 슬라이드 불러오기
				if(result.favoriteEmpty == "yes"){// 즐겨찾기한 내용 없을 경우
					// 즐겨찾기 한 내용이 없습니다. 표시
					emptyCase(sectionTwoinnerOne, s2i1);
					console.log("dih")

				} else {// 즐겨찾기한 내용이 있을 경우
			    var favoriteList = result.favoriteList; // favoriteList : 즐겨찾기한 내용을 셀렉해와 저장한 내용
			    drawShareList(sectionTwoinnerOne, favoriteList);
				}
			
			// 전체 공개 공유 슬라이드 나열
			var shareList = result.shareList;
				if(result.shareListEmpty == "yes"){
					// 전체 공개로 된 슬라이드 없음을 표시 혹시 모르니까
					emptyCase(sectionTwoinnerTwo, s2i2);
				} else {
				  drawShareList(sectionTwoinnerTwo, shareList);
				}
			console.log("받아오기 완료!");
		},
		error: function(xhr, textStatus, errorThrown) {
			alert('작업을 완료할 수 없습니다.\n' + 
				  '잠시 후 다시 시도하세요.\n' +
				  '계속 창이 뜬다면, 관리자에 문의하세요.(사내번호:1112)');
		}
	});
	
});

function drawInnerMyList(sectionNo, data){
	  $("<li>").html("<div class='oneCanvas'>"+
             +" <div class='canvasIn preThumbnail'><img src='img/2014050814508068683_1.jpg'></div>"
             + "<div class='canvasIn canvasInfo'>"
               + "<div class='canvasIn Title'>"+ data.title+" </div>"
               + "<div class='canvasIn Tool'>"
                        +"<div class='canvasIn create_date'><span>Date : </span><span class='cre_date'>"+data.createDate+"</span></div>"
                        + "<div class='canvasIn useTool'>"
                                  + "<span class='useTool-publicYn'><i class='public fa fa-lock'></i></span>"
                                  + "<span class='useTool-edit'><i class='fa fa-pencil-square-o'></i></span>"
                                  + "<span class='useTool-player'><i class='fa fa-play-circle-o'></i></span>"
                        + "</div> </div></div></div></li>").appendTo(sectionNo);
	
}

function drawWholeList(sectionNo, data){
	for(var i in data){		
		 $("<li>").html("<div class='oneCanvas'>"+
                +" <div class='canvasIn preThumbnail'><img src='img/2014050814508068683_1.jpg'></div>"
                + "<div class='canvasIn canvasInfo'>"
                  + "<div class='canvasIn Title'>"+data[i].title+" </div>"
                  + "<div class='canvasIn Tool'>"
                           +"<div class='canvasIn create_date'><span>Date : </span><span class='cre_date'>"+data[i].createDate+"</span></div>"
                           + "<div class='canvasIn useTool'>"
                                     + "<span class='useTool-publicYn'><i class='public fa fa-lock'></i></span>"
                                     + "<span class='useTool-edit'><i class='fa fa-pencil-square-o'></i></span>"
                                     + "<span class='useTool-player'><i class='fa fa-play-circle-o'></i></span>"
                           + "</div> </div></div></div></li>").appendTo(sectionNo);
	}
}

function drawShareList(sectionNo, data){
	for(var i in data){	
	 $("<li>").html("<div class='oneCanvas'>"+
             +" <div class='canvasIn preThumbnail'><img src='img/2014050814508068683_1.jpg'></div>"
             + "<div class='canvasIn canvasInfo'>"
               + "<div class='canvasIn Title'>"+data[i].title+" </div>"
               + "<div class='canvasIn Tool'>"
                        +"<div class='canvas-1 canvasIn shareInfo'><span class='shareInfo-value'>Author : </span><span class='shareInfo-author' >"+data[i].author +"</span></div>"
                        + "<div class='canvasIn useTool'>"
                        + "<span class='useTool-player'><i class='fa fa-play-circle-o'></i></span>"
                        + "</div> </div></div></div></li>").appendTo(sectionNo);
	}

}
function emptyCase(sectionNo, message){
	 $("<li>").html("<div class='oneCanvas'> "+
             + "<div class='canvasIn canvasInfo'>"
             + "<div class='canvasIn message'>"+ message +"</div>").appendTo(sectionNo);
	
}

//wholelist 만드는 틀인데 만들어지면 css가 먹질 않음 

//for(var i in whole){
//	console.log(i)
//	var list = $(".section.one.inner.two div.inside-list ul.inside-list.whole")
//	var li = $("<li>").appendTo(list);
//	var inner = $("<div>").addClass('oneCanvas').appendTo(li);
//		var canvasThumb = $("<div>").addClass('canvasIn preThumbnail').attr('src','img/2014050814508068683_1.jpg' ).appendTo(inner);
//		var canvasInfo = $("<div>").addClass('canvasIn canvasInfo').appendTo(inner);
//	
//			var innerT = $("<div>").addClass('canvasIn canvasInfo canvasIn title').html(rows[i].title).appendTo(canvasInfo);
//				var canvasTool = $("<div>").addClass('canvasIn canvaTool').appendTo(canvasInfo);
//	
//			 var canvasDate = $("<div>").addClass('canvasIn create_date').appendTo(canvasTool);
//			 	$("<span>").html('Date : ').appendTo(canvasDate);
//			 	$("<span>").addClass('create_date').html(rows[i].createDate).appendTo(canvasDate);
//			 var canvasUseTool = $("<div>").addClass("canvasIn useTool").appendTo(canvasTool);
//			 	$("<span>").addClass('useTool-publicYn').innerHtml('<i class="public fa fa-lock"></li>').appendTo(canvasUseTool);
//			 	$("<span>").addClass('useTool-edit').innerHtml('<i class="fa fa-pencil-square-o"></li>').appendTo(canvasUseTool);
//			 	$("<span>").addClass('useTool-player').innerHtml('<i class="fa fa-play-circle-o"></li>').appendTo(canvasUseTool);
//			 	
//			 	$(".section.one.inner.two").append
//			 	var li = $("<li>").html()
