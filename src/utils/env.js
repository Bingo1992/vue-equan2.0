/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
// let baseUrl; 
let routerMode;
const imgBaseUrl = 'http://img.yesm.cn';
//正式环境
const baseUrl = 'https://equan.yesm.cn/equan-wxweb/wxhtml';
const esmUrl = 'https://fs2.yesm.cn/equan/m';
// 测试环境
// const baseUrl = 'http://t1.yesm.cn/equan-wxweb/wxhtml';
// const esmUrl = 'http://files.joysim.cn:30123/equan/m';

// if (process.env.NODE_ENV == 'development') {
// 	baseUrl = '';
// 	routerMode = 'hash'
// }else{
// 	baseUrl = 'http://img.yesm.cn';
// 	routerMode = 'hash'
// }

export {
	baseUrl,
	esmUrl,
	imgBaseUrl
}
