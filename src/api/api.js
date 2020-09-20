//用于统一管理接口

//服务器地址
const http = 'http://39.101.217.150:8086'
//登录地址
const login = '/account/login'
//获取菜单信息
const listForRouter =  '/menu/listForRouter'
//获取账号信息
const info =  '/account/info'
//修改密码
const updatePwd = '/account/updatePwd'
//获取文章分类
const channellist = '/channel/list'
//获取文章数量
const articlebychannel ='/article/articlebychannel'
//获取功能操作信息
const menulist = '/menu/list'

export{
    http,
    login,
    listForRouter,
    info,
    updatePwd,
    channellist,
    articlebychannel,
    menulist,
    
}