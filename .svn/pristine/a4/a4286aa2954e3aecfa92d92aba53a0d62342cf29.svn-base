
$(function () {
	var url = baseUrl + '/user/receipt/address/list', //职位接口url
		delurl = baseUrl + '/user/receipt/address/delete', //职位接口url
	    params = {pageNo: 1, pageSize : 10},  //职位接口参数
	    productid = equan.queryString("productid"),
	    addressid = equan.queryString("addressid"),
	    loadSuccess = false,  //数据是否加载完
	    html = '';


    function pageInit() {
        setEvents();
        //initSlide();
        findAddress();
    }
    
    function setEvents() {
    	
    	
    	$('.btn').click(function() {
    		
    		window.location.href = baseHtmlUrl + "wxhtml/contact_form.html?productid=" + productid;
    		
        });
    	
    	$('.cancel').click(function() {
            $('.ui-dialog').addClass('show');
            var $address = $(this).parents('li');

             $('#delete').click(function() {
               
            	 deleteAddress($address);
            });
            $('#cancel').click(function() {
                $('.ui-dialog').removeClass('show');

            });
        });
    	
    	
    	$('input[type="radio"]').click(function() {
           
    		//alert();
    		
    		window.location.href = baseHtmlUrl + "wxhtml/order_confirm.html?productid=" + productid + "&addressid=" + $(this).val();
    		
        });
    	
    }
    
    function deleteAddress(addressli){
    	
    	var addressid = $(addressli).attr("addressid");
    	var isdefault = $(addressli).attr("isdefault");
    	
    	
    	ajaxGet(delurl, {addressid : addressid, isdefault : isdefault}, function (data) {
    		
    		if(data.resultCode == 200){
    			
    			//$(addressli).remove();
    			
    			$(".address-list").empty();
    			
    			findAddress();
    		}
    		else{
    			alert(data.resultMsg);
    		}
    		
    		$('.ui-dialog').removeClass('show');
    		
    	});
    	
    	
    }
    
    function findAddress(){
    	
    	showLoading();
    	
    	ajaxGet(url, params, function (data) {
    		
    		console.log(data);
    		
    		if(data.resultCode == 200){
    			
    			html = '';
    			for(var i = 0; i < data.resultList.length; i++){
    				
    				html += '<li addressid="'+ data.resultList[i].id +'" isdefault="'+ data.resultList[i].isdefault +'">';
    				html += '<label class="default">';
    				html += '<p>';
    				
    				if(addressid == data.resultList[i].id){
    					html += '<input type="radio" value="'+ data.resultList[i].id +'" name="default" checked>';
    				}
    				else{
    					html += '<input type="radio" value="'+ data.resultList[i].id +'" name="default">';
    				}
    				
    				
    				html += '<i class="icon-hook"></i>';
    				html += '</p>';
    				html += '</label>';
    				html += '<div class="address-info">';
    				html += '<span>'+ data.resultList[i].username +'</span>';
    				html += '<span>'+ data.resultList[i].mobile +'</span>';
    				html += '<p>'+ data.resultList[i].fulladdress +'</p>';
    				html += '</div>';
	                    
    				html += '<div class="new-addr-btn">';
    				html += '<span class="cancel"><i class="icon-cha"></i></span>';
    				html += '</div>';
    				html += '</li>';
    				
    			}
    			
    			$(".address-list").append(html);
    			
    			setEvents();
    			
    			
    		}
    		
    		hideLoading();
    		
        });
    	
    }
    
    
    
    window.onload = function () {
        pageInit();
    };

});