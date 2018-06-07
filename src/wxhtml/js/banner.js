


var addUrl  = baseUrl + '/banner';

function findBanner(location, parentId) {
	
	ajaxGet(addUrl, {location : location}, function (data) {
    	
		console.log(data);
		
        if (data.success === true) {
        	
        	var html = '';
        	
        	for(var i=0; i<data.obj.length; i++){
        		
        		html += '<a href="'+ data.obj[i].url +'" class="swiper-slide" style="background-image: url(\'' + baseImgUrl + data.obj[i].pic +'\')"></a>';
        	}
        	
        	$('#' + parentId).html(html);
        	
        } else {
            //alert(data.resultMsg);
        }
    });
}