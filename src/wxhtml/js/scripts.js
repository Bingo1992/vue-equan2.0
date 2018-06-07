//******************控制不同设备字体大小**************//

var baseUrl = "http://192.168.4.70/equan2.0-wxweb/eshop";
var baseHtmlUrl = "http://192.168.4.70/equan2.0-wxweb/";
var baseFileUrl = "http://192.168.4.70/equan2.0-wxweb/UploadFiles/equan";
var baseImgUrl = "http://img.yesm.cn";

var loading_title = "加载中,请稍候...";
var deleteing_title = "删除中,请稍候...";
var saveing_title = "保存中,请稍候...";
var v = "1.0.0.2";

(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 20 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//******************控制不同设备字体大小******结束**************//
//
//----站长统计---------
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b8899414c78822ce623d3322fb3a704b";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// ------错误，警告，正确提示框通用函数------------
function wrong_p(text){
    $('.tip-dialog').find('i').attr('class','icon-tip icon-cha')
        .siblings('p').html(text);
    show_hide_dialog();
}
function empty_p(text) {
    $('.tip-dialog').find('i').attr('class','icon-tip icon-gantan')
        .siblings('p').html(text);
    show_hide_dialog();
}
function yes_p(text) {
    $('.tip-dialog').find('i').attr('class','icon-tip icon-hook')
        .siblings('p').html(text);
    show_hide_dialog();
}

// 1.5秒后隐藏提示语
function show_hide_dialog(){
    $('.tip-dialog').addClass('show');
    setTimeout(function(){
        $('.tip-dialog').removeClass('show');
    },1500);
}

// *********用于检查手机格式是否正确***********
function isMobile(mobileNumber) {
    //return /^(13[0-9]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(mobileNumber); //Regular Expressions
    
	return /^1\d{10}$/.test(mobileNumber); //Regular Expressions
}

function showLoading(title){
	
	var $loading = $('.loading');
	
	if($loading.length > 0){
		
		$("#loading_title").html(title);
		
		$(".loading").removeClass("hide");
	}
	else{
		var html = '';
		html += '<div class="loading">';
		html += '<div class="load-dialog">';
		html += '<img src="static/images/loading.png">';
		html += '<p id="loading_title">'+ title +'</p>';
		html += '</div>';
		html += '</div>';
		
		$(document.body).append(html);
	}
	
	
}

function hideLoading(){
	
	$(".loading").addClass("hide");
}

//jquery插件
;(function($,win,doc,undefined){
    // 表单验证提示
    $.fn.Tiphtml =  function(text){
        var html = '<div class="tip-dialog show">\
            <i class="icon-gantan"></i>\
            <div class="tip-content">\
                <p>'+text+'</p>\
            </div></div>';
            $('body').append(html);
            setTimeout(function() {
                $('.tip-dialog').remove();
            }, 1500);
    };
    $.fn.isTip = function(text) {
        return this.Tiphtml(text);
    };

    // 切换选项卡
     $.fn.switchTabs =  function(option1,option2){
        return this.each(function() {
            var index = $(option1).index($(this));
            $(this).addClass('active').siblings().removeClass('active');
            $(option2).eq(index).addClass('show').siblings(option2).removeClass('show');   
        });
    };

   //排序筛选
     $.fn.switchSortTabs =  function(option1,option2){
        return this.each(function(){
            var $_this = $(this);
            var $_i = $(this).find('i');
            if($_i.hasClass('icon-arrow-down')){
                $_this.switchTabs(option1,option2)
                      .find('i').attr('class','icon-arrow-up');
             
                $_this.siblings('li').find('i.icon-arrow-up').attr('class','icon-arrow-down');
             
                event.stopPropagation();
            } 
            // 点击排序，筛选的内容
            $(option2).find('li').unbind('click').click(function(){
                $(this).switchTabs(option1);
                var value = $(this).find('.value').html();
                 var $parent = $(this).closest('ul');
                 if($parent.hasClass('readList')) {
                     $_this.find('span').html(value);
                    closeDialog();
                 }
                 // event.stopPropagation();
            });

            $('.ui-dialog').add('.btn-cancel').click(function(event) {
                closeDialog();
            });

            function closeDialog() {
                $(option1).find('i.icon-arrow-up').attr('class','icon-arrow-down');
                $(option2).removeClass('show');
            }

            //点击其他地方隐藏遮罩
            // $(document).click(function() {
            //     $(option1).find('i.icon-arrow-up').attr('class','icon-arrow-down');
            //     $(option2).removeClass('show');
            // });   
        });
    };

     //判断运营商
    $.fn.isShop =  function(self,text){
        self.siblings('.motion-shop').addClass('show').find('span').html(text);
    };

    //选择车牌号,省市遮罩
    function SlideDialog(option){
        var self = this;
        var opt = {
            dialogList : $('.dialog-list'),
            slideElm : $('.slideValue')
        };
        opt = $.extend(opt, option||{});

        var $startLi = opt.dialogList.find('.dialog-start-list');
        var $endLi = opt.dialogList.find('.dialog-end-list');
        var $returnBack = opt.dialogList.find('.return-back');    
        var slideValue = '';
   
        self.opt = opt;
        self.dialogList = self.opt.dialogList;
        self.slideElm = self.opt.slideElm;
        self.startLi = $startLi;
        self.endLi = $endLi;
        self.returnBack = $returnBack;     
        self.slideValue = slideValue;

        self.init();
        self.dialogList.find('ul').css('height',document.documentElement.clientHeight -44 + 'px');
    };
    SlideDialog.prototype.init = function(){
        var self = this;
        self.dialogList.addClass('more-wp-open');
        $('body').addClass('fixed-body');
        //点击左边
        self.startLi.delegate('li','click',function(){
            $(this).switchTabs(self.startLi.find('li'));
        });
        // 点击右边
        self.endLi.delegate('li','click',function(){
            self.startLi.find('li').each(function(){
                if($(this).hasClass('active')){
                    self.slideValue += $(this).html();
                }//获取左边选中的值
            });
            if(self.opt.dialogList.hasClass('city-list')){
                self.slideValue += '-' + $(this).html();
            }else {
                self.slideValue += $(this).html();
            }
            self.slideElm.html(self.slideValue);//span
            if(self.slideElm.html()==""){
               self.slideElm.val(self.slideValue); //input
            }
            self.removeDialog();
        });
        // 返回按钮
        self.returnBack.click(function(){
            self.removeDialog();
        });
    };
    //移除遮罩
    SlideDialog.prototype.removeDialog = function(){
        var self = this;
        self.dialogList.removeClass('more-wp-open');
        $('body').removeClass('fixed-body');
    };
    window['SlideDialog'] = SlideDialog;

})(Zepto,window,document);


function allCheck(){
    //全选
    $('.all-check').click(function(){ 
        var check = $(".all-check input[type='checkbox']").prop("checked");
        if(check == false){
            $(".check-list input[type='checkbox']").prop("checked", false);  
        }else{
            $(".check-list input[type='checkbox']").prop("checked", true); 
        }            
    });

    //单选某个商品时，若列表中有未勾选的商品，则取消全选按钮的选中状态
    $(".check-list input[type='checkbox']").click(function(){
        var flag = 0;
        //遍历每个商品
        $(".check-list input[type='checkbox']").each(function(i){
            var check = $(".check-list input[type='checkbox']").eq(i).prop("checked");
            if(check == false){
                flag++;
            }
        });
        
        if(flag >= 1){
            $(".all-check input[type='checkbox']").prop("checked", false); 
        }else {     
            $(".all-check input[type='checkbox']").prop("checked", true); 
        }
    });
}

/*异步get请求*/
var ajaxGet = function (reqUrl, params, successCallback, errorCallback) {
    $.ajax({
        url: reqUrl,
        type: 'GET',
        data: params,
        dataType: 'json',
        success: function (data) {
            successCallback(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
            errorCallback(XMLHttpRequest);
        }
    });
};

/*同步get请求*/
var ajaxSynGet = function (reqUrl, params, successCallback, errorCallback) {
    $.ajax({
        url: reqUrl,
        type: 'GET',
        data: params,
        dataType: 'json',
        async: false,
        success: function (data) {
            successCallback(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
            errorCallback(XMLHttpRequest);
        }
    });
};

/*异步post请求*/
var ajaxPost = function (reqUrl, params, successCallback, errorCallback) {
	
	console.log(params);
	
    $.ajax({
        url: reqUrl,
        type: 'POST',
        data: params,
        dataType:'json', 
        contentType:"application/x-www-form-urlencoded; charset=UTF-8",
        success: function (data) {
            successCallback(data);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
            errorCallback(XMLHttpRequest);
        }
    });
};

//产品列表页面**********到达底部会自动刷新*******************
//获取滚动条当前的位置 
function getScrollTop() {
	var scrollTop = 0;
	if (document.documentElement && document.documentElement.scrollTop) {
	    scrollTop = document.documentElement.scrollTop;
	} else if (document.body) {
	    scrollTop = document.body.scrollTop;
	}
	return scrollTop;
}

//获取当前可是范围的高度 
function getClientHeight() {
	var clientHeight = 0;
	if (document.body.clientHeight && document.documentElement.clientHeight) {
	    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
	} else {
	    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
	}
	return clientHeight;
}

//获取文档完整的高度 
function getScrollHeight() {
	return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

