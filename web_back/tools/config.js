// 1.这个js用来保存网络中的一些配置信息
//  例如: 所有的接口地址,都可以统一保存在这个文件中


var BASE_URL = 'http://localhost:8000';//通过变量保存基地址


var LOGIN = BASE_URL + '/admin/login'; //用户登陆
var LOGOUT = BASE_URL + '/admin/logout';//退出登陆
var GET_USER = BASE_URL + '/admin/getuser';//获取用户信息

var SHAN_CHU = BASE_URL + '/admin/category_delete';
var BIAN_JI = BASE_URL + '/admin/category_edit';
var XIN_ZENG = BASE_URL + '/admin/category_add';
var GET_CATE = BASE_URL + '/admin/category_search';//文章类别获取









var UIF = BASE_URL + '/admin/userinfo_edit';