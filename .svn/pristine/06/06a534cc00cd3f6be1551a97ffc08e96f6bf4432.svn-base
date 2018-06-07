
function equan(){
	
	this.queryString = function (key) {
        return (document.location.search.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
    };
	
	this.findBanner = function(location, parentId) {
	
		ajaxGet(baseUrl + '/banner', {location : location}, function (data) {
			
	        if (data.success === true) {
	        	
	        	var html = '';
	        	
	        	for(var i=0; i<data.obj.length; i++){
	        		
	        		html += '<a href="'+ data.obj[i].url +'" class="swiper-slide" style="background-image: url(\'' + baseImgUrl + data.obj[i].pic +'\')"></a>';
	        	}
	        	
	        	$('#' + parentId).html(html);
	        	
	        	initSwap(parentId);
	        	
	        } else {
	            //alert(data.resultMsg);
	        }
	    });
		
	};
	
	this.findIntegral = function(parentId) {
		
		ajaxGet(baseUrl + '/user/integral', {}, function (data) {
	    	
			console.log(data);
			
	        if (data.success === true) {
	        	
	        	
	        	
	        	$('.' + parentId).html(data.obj);
	        	
	        } else {
	            //alert(data.resultMsg);
	        }
	    });
	};
	
	this.findAreaProduct = function(areaId, parentId, pageSize) {
		
		ajaxPost(baseUrl + '/area', {areaId : areaId, pageSize : pageSize}, function (data) {
	    	
			console.log(data);
			
	        if (data.success === true) {
	        	
	        	if(parentId == 'index_area_new'){
	        		appendToIndexNew(data, parentId);
	        	}
	        	
	        	if(parentId == 'index_area_hot'){
	        		appendToIndexHot(data, parentId);
	        	}
	        	
	        	if(parentId == 'recharge_area_hot'){
	        		appendToIndexHot(data, parentId);
	        	}
	        	
	        	
	        } else {
	            //alert(data.resultMsg);
	        }
	    });
	};
	
	/*
	 * 专区产品列表
	 */
	this.findAreaProductList = function(odBy, pName, vFrom, vTo, showType, areaId, pageNo) {
		
		var pageNo = $("#pageNo").val();
     	var hasNext = $("#hasNext").val();
     	
     	if(hasNext == 'false'){
			return false;
		}
		
		ajaxPost(baseUrl + '/area', {odBy : odBy, pName : pName, vFrom : vFrom, vTo : vTo, showType : showType, areaId : areaId, pageNo : pageNo}, function (data) {
	    	
			//console.log(data);
			
	        if (data.success === true) {
	        	
	        	if(pageNo == 1){
	 				$(".pro-list-2").html('');
	 			}
	        	
	        	html = '';
	        	var productName = '';
	 			for(var i = 0; i < data.attributes.resultList.length; i++){
	         		
	 				var productName = data.attributes.resultList[i].productName;
	 				
	         		html += '<li>';
	         		html += '    <a href="product_detail.html?productid='+ data.attributes.resultList[i].productId +'">';
	         		//html += '        <img class="pro-img-2" src="'+ baseImgUrl + data.attributes.resultList[i].showPic +'">';
	
	         		
	         		html += '	<div class="pro-img-2">';
	        		html += '	    <img src="'+ baseImgUrl + data.attributes.resultList[i].showPic +'">';
	        		
	        		if(productName.indexOf('固特异') != -1){
	        			html += '	    <img class="img-label" src="images/straight_pin_img.png">';	
	        		}
	        		html += '	</div>';
	         		
	         		html += '        <h5 class="nowrap-2">'+ data.attributes.resultList[i].productName +'</h5>';
	         		html += '        <div class="price-big">';
	         		html += '            <span class="font-orange"><i class="icon-coin"></i>' + data.attributes.resultList[i].cost;
	         		html += '            </span>';
	         		html += '            <s class="right-text font-gray">市场价:￥'+ data.attributes.resultList[i].price +'</s>';
	         		html += '        </div>';
	         		html += '    </a>';
	         		html += '</li>';
	 			}
	 			
	 			console.log(html);
	        	
	 			$(".pro-list-2").append(html);
	 			
	 			//如果html为空，则说明没有数据了
	 			if(data.attributes.isLastPage == true){
	 				$('#hasNext').val('false');
	 				$(".pullUpIcon").css("display" , "none");
	 				$(".pullUpLabel").html("数据全部加载完");
	 			}
	 			
	 			$('#pageNo').val(parseInt(pageNo) + 1);
	        	
	        } else {
	            //alert(data.resultMsg);
	        }
	    });
	};
	
	
	this.findUserInfo = function() {
		
		ajaxGet(baseUrl + '/user/personnel', {}, function (data) {
	    	
			console.log(data);
			
	        if (data.success === true) {
	        	
	        	$('.per-img').attr('src', data.obj.headimgurl);
	        	$('h4').html(data.obj.wxNickname);
	        	$('#integral').html(data.obj.integral);
	        	
	        } else {
	            //alert(data.resultMsg);
	        }
	    });
	};
	
	this.searchProduct = function(odBy, pName, vFrom, vTo, showType){
		
		var pageNo = $("#pageNo").val();
     	var hasNext = $("#hasNext").val();
        if(pName == null || pName == "null" || pName == undefined){ // "",null,undefined
            pName = $('input[name="pName"]').val();
        }

		if(hasNext == 'false'){
			return false;
		}
		
		ajaxPost(baseUrl + '/shopCart/products', {vFrom : vFrom, vTo : vTo, odBy : odBy, pName : pName, pageNo : pageNo, showType : showType}, function (data) {
	 		if(data.resultCode == 200){
	 			if(pageNo == 1){
	 				$(".pro-list-2").html('');
	 			}
	 			var html = '';
	 			var tig = 1
                $('.nothing').hide();
                $(".pullUpLabel").html("");
                
                var productName = '';
                
	 			for(var i = 0; i < data.resultList.length; i++){
	         		
	 				productName = data.resultList[i].name;
	 				
	         		html += '<li>';
	         		html += '    <a href="product_detail.html?productid='+ data.resultList[i].id +'">';
	         		
	         		
	         		html += '	<div class="pro-img-2">';
	        		html += '	    <img src="'+ baseImgUrl + data.resultList[i].showpic +'">';
	        		
	        		if(productName.indexOf('固特异') != -1){
	        			html += '	    <img class="img-label" src="images/straight_pin_img.png">';	
	        		}
	        		html += '	</div>';
	         		
	         		
	         		//html += '        <img class="pro-img-2" src="'+ baseImgUrl + data.resultList[i].showpic +'">';
	         		html += '        <h5 class="nowrap-2">'+ data.resultList[i].name +'</h5>';
	         		html += '        <div class="price-big">';
	         		html += '            <span class="font-orange"><i class="icon-coin"></i>' + data.resultList[i].cost;
	         		html += '            </span>';
	         		html += '            <s class="right-text font-gray">市场价:￥'+ data.resultList[i].price +'</s>';
	         		html += '        </div>';
	         		html += '    </a>';
	         		html += '</li>';
	         		tig = 0
	 			}
	 			$(".pro-list-2").append(html);
	 			//如果html为空，则说明没有数据了
	 			if(data.isLastPage == true){
	 				$('#hasNext').val('false');
	 				$(".pullUpIcon").css("display" , "none");
	 				if(tig == 1){
                        $('.nothing').show();
					}else{
                        $(".pullUpLabel").html("");
					}
	 			}
	 			$('#pageNo').val(parseInt(pageNo) + 1);
	 			
	 		}else{
	 			wrong_p('网络好像些问题，请稍后再试。');
	 		}
	 		
	     });
	};
	
	this.findCart = function(){
		
		showLoading(loading_title);
		ajaxGet(baseUrl + '/shopCart/displayOrder', {}, function (data) {
	 		if(data.resultCode == 200){
	 			console.log(data);
	 			
	 			userIntegral = data.userIntegral;
	 			
	 			var html = '';
	 			for(var i=0; i<data.resultList.length; i++){
	 				
	 				html += '<li class="list-box">';
	 				html += '<label class="checkbox">';
	 				html += '    <input type="checkbox" name="checkbox" currCost="'+ data.resultList[i].currCost +'" currPrice="'+ data.resultList[i].currPrice +'" price="'+ data.resultList[i].price +'" productImg="'+ data.resultList[i].productImg +'" productShowType="'+ data.resultList[i].productShowType +'" productType="'+ data.resultList[i].productType +'" value="'+ data.resultList[i].productId +'">';
	 				html += '    <i class="icon-hook"></i>';
	 				html += '</label>';
	 				html += '<img onclick="jump2Product('+ data.resultList[i].productId +')" class="list-img" src="'+ baseImgUrl + data.resultList[i].productImg +'">';
	 				html += '<div class="list-info" >';
	 				html += '    <div class="list-box">';
	 				html += '        <div class="list-info">';
	 				html += '            <h5 onclick="jump2Product('+ data.resultList[i].productId +')" class="nowrap-2">'+ data.resultList[i].productName +'</h5>';
	 				html += '            <div class="list-box">';
	 				html += '                <div onclick="jump2Product('+ data.resultList[i].productId +')" class="list-info-h price-small">';
	 				html += '                    <span class="font-orange"><i class="icon-coin"></i>'+ data.resultList[i].currCost +'</span>';
	 				html += '                    <s class="font-gray">市场价:￥'+ data.resultList[i].currPrice +'</s>';
	 				html += '                </div>';
	 				html += '                <div class="amount" style="z-index:99;">';
	 				html += '                    <span class="minus icon-minus"></span>';
	 				html += '                    <input type="number" class="count" readonly="readonly" value="'+ data.resultList[i].total +'">';
	 				html += '                    <span class="plus icon-plus"></span>';
	 				html += '                </div>';
	 				html += '            </div>';
	 				html += '        </div>';
	 				html += '    </div>';
	 				html += '</div>';
	 				html += '</li>';
	 				
	 			}
	 			
	 			if(html == ''){
	 				cart.whetherNothing();//显示无内容状态
	 			}
	 			else{
	 				$('.cart-list').html(html);
	 			}
	 			
	 		}else{
	 			wrong_p('网络好像些问题，请稍后再试。');
	 		}
	 		
	 		hideLoading();
	     });
	};
	
	this.findCartTotal = function(className){
		
		ajaxGet(baseUrl + '/shopCart/total', {}, function (data) {
			
			
			$('.' + className).html(data.obj);
	     });
	};
	
	this.removeCart = function(productIds){
		
		console.log("productIds:" + productIds);
		
		showLoading(loading_title);
		ajaxPost(baseUrl + '/shopCart/removeOrder', {productIds : productIds}, function (data) {
	 		if(data.resultCode == 200){
	 			console.log(data);
	 			
	 			$('.deleteli').remove();
	 			
	 			 cart.clickAble();
	 			cart.whetherNothing();
	 			equan.findCartTotal('circlePoint');
	 			
	 		}else{
	 			wrong_p('网络好像些问题，请稍后再试。');
	 		}
	 		
	 		hideLoading();
	     });
	}
	
};


function appendToIndexNew(data, parentId){
	
	var html = '';
	
	for(var i=0; i<data.attributes.resultList.length; i++){
		
		html += '<li>';
		html += '<a href="product_detail.html?productid='+ data.attributes.resultList[i].productId +'">';
		html += '	<div class="pro-img-1">';
		html += '		<img src="'+ baseImgUrl + data.attributes.resultList[i].showPic +'">';
		//html += '		<span class="label-orange">满99-10</span>';
		html += '	</div>';
		html += '    <h6 class="nowrap-2">'+ data.attributes.resultList[i].productName +'</h6>';
		html += '    <div class="price-small">';
		html += '    	<span class="font-orange"><i class="icon-coin"></i>' + data.attributes.resultList[i].cost;
		html += '		</span> ';
		html += '		<s class="right-text font-gray">市场价:￥'+ data.attributes.resultList[i].price +'</s>';
		html += '	</div>';
		html += '</a>';
		html += '</li>';
		
	}
	
	console.log(html);
	
	$('#' + parentId).html(html);
	
}

function appendToIndexHot(data, parentId){
	
	var html = '';
	var productName = '';
	for(var i=0; i<data.attributes.resultList.length; i++){
		
		productName = data.attributes.resultList[i].productName;
		
		html += '<li>';
		html += '<a href="product_detail.html?productid='+ data.attributes.resultList[i].productId +'">';
		
		//html += '	<img class="pro-img-2" src="'+ baseImgUrl + data.attributes.resultList[i].showPic +'">';
		
		html += '	<div class="pro-img-2">';
		html += '	    <img src="'+ baseImgUrl + data.attributes.resultList[i].showPic +'">';
		
		if(productName.indexOf('固特异') != -1){
			html += '	    <img class="img-label" src="images/straight_pin_img.png">';	
		}
		html += '	</div>';
		
		html += '    <h5 class="nowrap-2">'+ data.attributes.resultList[i].productName +'</h5>';
		html += '    <div class="price-big">';
		html += '    	<span class="font-orange"><i class="icon-coin"></i>' + data.attributes.resultList[i].cost;
		html += '		</span> ';
		html += '		<s class="right-text font-gray">市场价:￥'+ data.attributes.resultList[i].price +'</s>';
		html += '	</div>';
		html += '</a>';
		html += '</li>';
		
	}
	
	console.log(html);
	
	$('#' + parentId).html(html);
	
}


function initSwap(parentId){
	
	if(parentId == 'index_top'){
		
		 var swiper0 = new Swiper('.swiper-container0', {
           pagination: {
               el: '.swiper-pagination0',
               clickable: true
           },
           loop: true,
           autoplay: {
               stopOnLastSlide: true,
               disableOnInteraction: false
           }
       });
	}
	
	if(parentId == 'index_middle'){
		
		var swiperc1 = new Swiper('.swiper-container-c1', {
           slidesPerView: 'auto',
           centeredSlides: true,
           paginationClickable: true,
           spaceBetween: 16,
           loop: true,
           autoplay:  {
               delay: 4500,
               disableOnInteraction: false
           }
       });
		
	}
	
	if(parentId == 'banner_recharge'){
		
		var swiperc1 = new Swiper('.swiper-container-c2', {
            slidesPerView: 'auto',
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 10,
            loop: true,
            autoplay:  {
                delay: 4500,
                disableOnInteraction: false
            }
        });
		
	}
	
	if(parentId == 'eticket_recharge'){
		
		var swiper0 = new Swiper('.swiper-container', {
	        pagination: {
	            el: '.swiper-pagination',
	            clickable: true
	        },
	        loop: true,
	        autoplay: {
	            stopOnLastSlide: true,
	            disableOnInteraction: false
	        }
	    });
		
	}
	
	
	
	
}

function jump2Product(productid){
	window.location.href = "product_detail.html?productid=" + productid;
}

var equan = new equan();