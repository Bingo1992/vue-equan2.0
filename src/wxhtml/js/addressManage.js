
$(function () {
	var url = baseUrl + '/user/receipt/address/list', 
		delurl = baseUrl + '/user/receipt/address/delete', 
		defaulturl = baseUrl + '/user/receipt/address/set_default', 
	    params = {pageNo: 1, pageSize : 10},  
	    html = '';


    function pageInit() {
        setEvents();
        findAddress();
    }
    
    function setEvents() {
    	
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
    		setDefault($(this).val());
        });
    }
    
    function deleteAddress(addressli){
    	
    	var addressid = $(addressli).attr("addressid");
    	var isdefault = $(addressli).attr("isdefault");
    	
    	ajaxGet(delurl, {addressid : addressid, isdefault : isdefault}, function (data) {
    		
    		if(data.resultCode == 200){
    			
    			$(".address-manage").empty();
    			findAddress();
    			
    		}else{
    			wrong_p(data.resultMsg);
    		}
    		
    		$('.ui-dialog').removeClass('show');
    		
    	});
    	
    	
    }
    
    function setDefault(id){
    	
    	ajaxGet(defaulturl, {id : id}, function (data) {
    		
    		yes_p(data.resultMsg);
    	});
    	
    }
    
    function findAddress(){
    	
    	showLoading();
    	
    	ajaxGet(url, params, function (data) {
    		
    		//console.log(data);
    		
    		if(data.resultCode == 200){
    			
    			html = '';
    			for(var i = 0; i < data.resultList.length; i++){
    				
    				html += '<li addressid="'+ data.resultList[i].id +'" isdefault="'+ data.resultList[i].isdefault +'">';
    				html += '<div class="address-info">';
    				html += '<span>'+ data.resultList[i].username +'</span>';
    				html += '<span>'+ data.resultList[i].mobile +'</span>';
    				html += '<p>'+ data.resultList[i].fulladdress + '</p>';
    				html += '</div>';
    				html += '<div class="new-addr">';
    				html += '<label class="default">';
    				html += '<p>';
    				
    				if(data.resultList[i].isdefault == 1){
    					html += '<input type="radio" name="default" value="'+ data.resultList[i].id +'" checked>';
    				}
    				else{
    					html += '<input type="radio" name="default" value="'+ data.resultList[i].id +'">';
    				}
    				
    				html += '<i class="icon-hook"></i>';
    				html += '</p>';
    				html += ' 设为默认';
    				html += '</label>';
    				html += '<div class="new-addr-btn">';
    				html += '<a href="contact_form.html?id='+ data.resultList[i].id +'">编辑</a>';
    				html += '<span class="cancel">删除</span>';
    				html += '</div>';
    				html += '</div>';
    				html += '</li>';
    				
    			}
    			
    			$(".address-manage").append(html);
    			
    			setEvents();
    		}
    		
    		hideLoading();
        });
    	
    }
    
    window.onload = function () {
        pageInit();
    };

});