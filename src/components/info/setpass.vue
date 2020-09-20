<template>
    <div>

        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" @close='cleartext'>
            <el-form ref="form" :model="pass" label-width="120px">
                <el-form-item label="旧密码">
                    <el-input v-model="pass.oldPassword"></el-input>
                </el-form-item>
                 <el-form-item label="新密码">
                    <el-input v-model="pass.password"></el-input>
                </el-form-item>
                 <el-form-item label="重复新密码">
                    <el-input v-model="pass.rePassword"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="setpass">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import {http,updatePwd} from '../../api/api'
export default {
    props:['type','btn'],
    data(){
        return {
            dialogFormVisible:this.type,
            pass:{
                oldPassword:'',
                password:'',
                rePassword:''
            }
        }
    },
    watch:{
        type(a,b){
            this.dialogFormVisible=this.type
        }
    },
    methods:{
        cleartext(){
            for(var i in this.pass){
                this.pass[i]=''
            }
            this.btn()
        },
        setpass(){
            if(this.pass.oldPassword==''){
                this.$message.error('请输入旧密码')
            }else if(this.pass.password==''){
                this.$message.error('请输入新密码')
            }else if(this.pass.rePassword==''){
                this.$message.error('请确认新密码')
            }else if(this.pass.password!==this.pass.rePassword){
                this.$message.error('两次密码输入不一致')
            }else{
                this.$http.post(http+updatePwd,this.pass,{emulateJSON: true}).then((data)=>{
                    console.log(data)
                },(err)=>{
                    Location.href='./login.html'
                })
            }
           
        }
    }
}
</script>

<style scoped>

</style>