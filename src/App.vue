<template>
  <div id="app">
    <el-container>
      <el-aside style="width:auto">
        <!-- 导航 -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
        <!-- 导航结束 -->
      </el-aside>
      <el-main>
        <div style="height:50px; line-height:50px; background:#ccc">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        </div>
        <div>
        内容{{$store.state}}
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import {http,listForRouter} from './api/api'

export default {
  name: 'app',
  data () {
    return {
      isCollapse:false
    }
  },
  mounted(){
    this.getmenu()
  },
  methods:{
    //获取导航
  getmenu(){
    this.$http.get(http+listForRouter).then((data)=>{
      console.log(data)
      this.$store.commit('setmenu',data.data.data)
    },(err)=>{
      Location.href='./login.html'
    })
  }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu-vertical-demo {
		min-height: 500px;
	}
</style>
