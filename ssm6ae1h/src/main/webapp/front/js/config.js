
var projectName = '生产管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '人员通讯录',
	url: './pages/renyuantongxunlu/list.html'
}, 

{
	name: '公司动态',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm6ae1h/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","加入通讯录"],"menu":"员工","menuJump":"列表","tableName":"yuangong"}],"menu":"员工管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"部门信息","menuJump":"列表","tableName":"bumenxinxi"}],"menu":"部门信息管理"},{"child":[{"buttons":["新增","查看","修改","删除","打印","导出"],"menu":"项目","menuJump":"列表","tableName":"xiangmu"}],"menu":"项目管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"项目类型","menuJump":"列表","tableName":"xiangmuleixing"}],"menu":"项目类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"项目信息","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"项目文件","menuJump":"列表","tableName":"xiangmuwenjian"}],"menu":"项目文件管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"计划管理","menuJump":"列表","tableName":"jihuaguanli"}],"menu":"计划管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"人员通讯录","menuJump":"列表","tableName":"renyuantongxunlu"}],"menu":"人员通讯录管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"公司动态","tableName":"news"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"人员通讯录列表","menuJump":"列表","tableName":"renyuantongxunlu"}],"menu":"人员通讯录模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"项目","menuJump":"列表","tableName":"xiangmu"}],"menu":"项目管理"},{"child":[{"buttons":["查看","报表"],"menu":"项目信息","menuJump":"列表","tableName":"xiangmuxinxi"}],"menu":"项目信息管理"},{"child":[{"buttons":["查看"],"menu":"项目文件","menuJump":"列表","tableName":"xiangmuwenjian"}],"menu":"项目文件管理"},{"child":[{"buttons":["查看"],"menu":"计划管理","menuJump":"列表","tableName":"jihuaguanli"}],"menu":"计划管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"人员通讯录列表","menuJump":"列表","tableName":"renyuantongxunlu"}],"menu":"人员通讯录模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"员工","tableName":"yuangong"},{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"人员通讯录列表","menuJump":"列表","tableName":"renyuantongxunlu"}],"menu":"人员通讯录模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
