<template>
    <div class="info">
        <p>账户信息:{{message.account}}</p>
        <p>
            修改密码：
            <span @click="type = true" style="color:blue;">修改密码</span>
        </p>
        <p>名字:{{message.name}}</p>
        <p>生日:{{message.birthday}}</p>
        <p>性别:{{message.sex==1?'男':'女'}}</p>
        <p>邮箱:{{message.email}}</p>
        <p>电话:{{message.phone}}</p>
        <p>部门:{{message.dept}}</p>
        <p>
            <el-button type="danger" @click="clearuser">退出登录</el-button>
        </p>
        <setpass :type='type' :btn='btn'></setpass>
    </div>
</template>

<script>
import setpass from './setpass'
export default {
    data(){
        return{
            message : this.$store.state.user.info.profile,
            type:false
        }
    },
    components:{
        setpass
    },
    methods:{
        clearuser(){
            localStorage.clear()
			location.href = './login.html'
        },
        btn(){
            this.type=false
        }
    }
}
</script>

<style scoped>
.info p{
    line-height: 40px;
}
</style>