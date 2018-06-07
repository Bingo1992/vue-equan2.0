
$(function () {
    var url = baseUrl + '/user/integral_history', //职位接口url
        params = {pageNo: 1, pageSize : 15, beginDate: '', endDate: ''},  //职位接口参数
        loadSuccess = false,  //数据是否加载完
        html = '';


    function pageInit() {
    	
    	showLoading(loading_title);
    	
        setEvents();
        getIntegral();
        integralHistory();
    }
    
    function setEvents() {
    	//验证输入日期
        $('#btn-check').click(function() {
        	
            var begin = document.getElementById("beginTime"),
                beginTime = begin.value;

            var end = document.getElementById("endTime"),
                endTime = end.value;

            if (beginTime == '' || endTime == '') {
                empty_p('请输入查询日期');
            } else if (endTime < beginTime) {
                wrong_p('结束日期必须大于开始日期');
            } else {
                var text = beginTime + '到' + endTime;
                $('.credit-title span').html(text);
                $('.query-time').find('.shade-dialog').addClass('hide').siblings('.time-list').removeClass('more-wp-open');
                
                params.beginDate = beginTime;
                params.endDate 	 = endTime;
                
                //初始化查询页面为1
                params.pageNo = 1;
                
                $("#integral-history-list").empty();
                
                integralHistory();
            }
        });
        
        
        //验证输入日期
        $('.more').click(function() {
        	
        	if(loadSuccess){
        		
        		params.pageNo ++;
        		
        		console.info('第' + params.pageNo + '页数据');
        		console.info('每页' + params.pageSize + '条数据');
        		
        		integralHistory();
        	}
            
        });

    }
    
    function getIntegral(){
    	
    	ajaxGet(baseUrl + "/user/integral", {}, function (data) {
    		
    		console.log(data);
    		
    		$("#credit").html(data.obj);
    		
        });
    }
    
    
    function integralHistory() {
    	loadSuccess = false;
    	
    	//console.log(params);
    	
        ajaxGet(url, params, function (data) {
            if (data.resultCode === 200) {
                //console.log(data);
                
                var isLastPage = data.isLastPage;
                
                html = '';
                for (var i = 0; i < data.resultList.length; i++) {
                    
                	html += '<tr>';
                	html += '<td>'+ data.resultList[i].strOpTime +'</td>';
                	html += '<td>'+ data.resultList[i].remark +'</td>';
                	
                	if(data.resultList[i].opType == 0){
                		html += '<td class="plus">-'+ data.resultList[i].opVal +'</td>';
                	}
                	else{
                		html += '<td class="minus">+'+ data.resultList[i].opVal +'</td>';
                	}
                	
                	html += '</tr>';
                }
                
                $("#integral-history-list").append(html);
            	
                
                if (isLastPage) {
                    //$(".more").html("数据全部加载完成");
                	
                	$(".more").unbind("click");
                    $(".more").html("数据全部加载完成");
                }
                else{
                	$(".more").html("点我加载更多^ ^");
                }
                loadSuccess = true;
            } else {
                alert(data.msg);
            }

            hideLoading();
        });
    }

    window.onload = function () {
        pageInit();
    };

});