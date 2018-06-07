
$(function () {
	var url = baseUrl + '/user/receipt/address/edit',
		saveurl = baseUrl + '/user/receipt/address/save',
		id = equan.queryString("id"),  //职位接口参数
		productid = equan.queryString("productid"),  //传递进来的参数
		productStr = equan.queryString("productStr"),  //传递进来的参数
	    loadSuccess = false,
	    html = '';


    function pageInit() {
        setEvents();
        
        //alert(id);
        
        if(id != "" && id != null && id != "null"){
        	loadAddress(id);
        }
        else{
        	initCity('广东', '广州', '天河区');
        }
        
        
    }
    
    function setEvents() {
    	
    	$('#confirm-btn').click(function() {

            var mobileNumberValue = $('.mobile').val();
            var nameValue = $('.name').val();
            var addressValue = $('.form_row_input textarea').val();
 
            if(nameValue == ''){
                empty_p('收货人姓名不能为空')
            }else if (mobileNumberValue == '') {
                empty_p('您的手机号不能为空');
            } else if (!(isMobile(mobileNumberValue))) { 
                wrong_p('手机号码格式错误');
            } else if(addressValue == '') {
                empty_p('请输入详细地址');
            }
            else if(nameValue.indexOf('先生') != -1 || nameValue.indexOf('小姐') != -1){
            	empty_p('由于收寄件人信息必须实名制，请填写全名')
            }
            else {
                saveData();
            }

        });
    	
    	
    }
    
    function saveData(){
    	
    	var username = $("#username").val();
    	var mobile = $("#mobile").val();
    	var prov = $(".prov").val();
    	var city = $(".city").val();
    	var area = $(".dist").val();
    	var detailaddress = $("#detailaddress").val();
    	
    	ajaxGet(saveurl, {id : id, username : username, mobile : mobile, prov : prov, city : city, area : area, detailaddress : detailaddress}, function (data) {
    		
    		console.log(data);
    		
    		if(data.resultCode == 200){
    			
    			console.log(productStr);
    			
    			if(productStr == "" || productStr == null || productStr == "null"){
    				
    				window.location.href = baseHtmlUrl + "wxhtml/address_manage.html";
    			}else{
    				window.location.href = baseHtmlUrl + "wxhtml/order_confirm.html?productStr=" + productStr + "&addressid=" + data.addressid;
    			}
    		}
    		else{
    			alert(data.resultMsg);
    		}
    		
    		
        });
    	
    }
    
    function loadAddress(id){
    	
    	//console.log(id);
    	
    	ajaxGet(url, {id : id}, function (data) {
    		
    		//console.log(data);
    		
    		if(data.resultCode == 200){
    			
    			$('.mobile').val(data.mobile);
                $('.name').val(data.username);
                $('#detailaddress').val(data.detailaddress);
    		
                initCity(data.province, data.city, data.district);
    		}
    		
    		
        });
    	
    }
    
    function initCity(province, city, district){
    	
    	$("#city").citySelect({
    		prov:province, 
    		city:city,
    		dist:district
    	});
    	
    }
    
    window.onload = function () {
        pageInit();
    };

});