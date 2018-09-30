/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
let baseUrl, esmUrl, rulesUrl, domainUrl; 
// let routerMode;
const imgBaseUrl = 'http://img.yesm.cn';
 
// if(process.env.NODE_ENV === 'development') {
// 	// 本地环境
// 	baseUrl = 'http://t1.yesm.cn/equan-wxweb/wxhtml';
// 	esmUrl = 'http://files.joysim.cn:30123/equan/m';
// } else if(process.env.type === 'test') {
// 	// 测试环境
// 	 baseUrl = 'http://t1.yesm.cn/equan-wxweb/wxhtml';
// 	 esmUrl = 'http://files.joysim.cn:30123/equan/m';
// } else {
// 	//正式环境
// 	baseUrl = 'https://equan2.yesm.cn/equan-wxweb/wxhtml';
// 	// baseUrl = 'https://dgj.xiaolianqiandai.com/equan-wxweb/wxhtml';
// 	esmUrl = 'https://fs2.yesm.cn/equan/m';
// }

// if(process.env.NODE_ENV === 'development') {
// 	// 本地环境
// 	esmUrl = 'http://files.joysim.cn:30123/equan/m';

// } else if(process.env.type === 'test') {
// 	// 测试环境
// 	esmUrl = 'http://files.joysim.cn:30123/equan/m';
// } else {
// 	//正式环境
// 	esmUrl = 'https://fs2.yesm.cn/equan/m';
// }

esmUrl = 'http://files.joysim.cn:30123/equan/m';//测试环境
rulesUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8c6084ddf52977ec';

domainUrl = http +'//'+ domain;
baseUrl = http +'//'+ domain + '/equan-wxweb/wxhtml'; //当前域名


 if(baseUrl == 'https://equan2.yesm.cn/equan-wxweb/wxhtml') {
	// 易购积分汇
	rulesUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd0cc97b55aebf775';
	esmUrl = 'https://fs2.yesm.cn/equan/m';

} else if(baseUrl == 'https://equan.yesm.cn/equan-wxweb/wxhtml') {
	// e券商城
	rulesUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8c6084ddf52977ec';
	esmUrl = 'https://fs2.yesm.cn/equan/m';

} else if(baseUrl == 'https://dgj.xiaolianqiandai.com/equan-wxweb/wxhtml'){
	// 广州大管家
	rulesUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdc6970cc1f6a41fb';
	esmUrl = 'https://fs2.yesm.cn/equan/m';
}

export {
	baseUrl,
	domainUrl,
	esmUrl,// esm地址
	rulesUrl, //违章地址
	imgBaseUrl //图片地址
}
