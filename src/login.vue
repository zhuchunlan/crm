<template>
    <div>
        <div style="width: 500px; margin: 0 auto; padding-top: 200px;">
            <el-form ref="form" :model="login" label-width="80px">
                <el-form-item label="账号">
                    <el-input v-model="login.user"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="login.pass"></el-input>
                </el-form-item>
                <el-form-item>
					<el-button type="primary" @click="onSubmit">登录</el-button>
				</el-form-item>
			</el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            login:{
                user:'',
                pass:""
            }
        }
    },
    methods:{
        onSubmit(){
            alert('suibian')
        }
    }
}
</script>