
$(function () {
    var addUrl  = baseUrl + '/user/oil/card/add',
        tip = '请输入正确的卡号';


    function pageInit() {
        setEvents();
    }
    
    function setEvents() {
    	
    	$('#cardType').change(function(){
    		cardType = $(this).val();
    		
    		if(cardType == '1'){
    			tip = '请输入卡号100011开头共19位的卡号';
    			$('#idNumberLi').hide();
    		}
    		else{
    			tip = '请输入9030开头共16位的非BP卡，非副卡号';
    			$('#idNumberLi').show();
    		}
    		
    		$(".oil-card-1").attr("placeholder", tip);
    	});
    	
    	$('.confirm-btn').click(function() {
            
            var cardType  = $('#cardType').val();
            //alert(cardType);
            if(cardType == ''){
            	empty_p('请选择加油卡类型');
            	return false;
            } 
            
            
            var oilCard_1 = $('.oil-card-1').val();
            var oilCard_2 = $('.oil-card-2').val();
            
            if(oilCard_1 == '') {
                empty_p('加油卡号不能为空');
                return false;
            } 
            
            if(cardType == '1' && (oilCard_1.length !=19 || oilCard_1.substring(0, 6) != "100011")){
            	empty_p(tip);
            	return false;
            } 
            
            if(cardType == '2' && (oilCard_1.length !=16 || oilCard_1.substring(0, 4) != "9030")){
            	empty_p(tip);
            	return false;
            } 
            
            if(oilCard_1 != oilCard_2){
            	empty_p('两次输入的卡号不一致');
            	return false;
            }
            
            var name  = $('.name').val();
            if(name == ''){
            	empty_p('请输入持卡人姓名');
            	return false;
            } 
            
            var idNumber = "";
            if(cardType == '2'){
            	
            	idNumber = $('#idnumber').val();
            	if(idNumber == ''){
            		empty_p('请输入持卡人身份证号码');
                	return false;
            	}
            	
            	 var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
                 if(reg.test(idNumber) === false){
          	    	wrong_p("温馨提示:持卡人身份证号码不合法");
          	    	return false;
          	    }
            	
            }
            
            saveCard(oilCard_1, name, cardType,idNumber);
        });
    	

    }
   
    
    function findBanner(location) {
    	
    	ajaxGet(addUrl, {location : location}, function (data) {
        	
            if (data.resultCode === 200) {
                
            	
            	
            	
            	
            } else {
                //alert(data.resultMsg);
            }
        });
    }

    window.onload = function () {
        pageInit();
    };

});