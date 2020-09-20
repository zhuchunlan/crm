<template>
  <div id="app">
    <el-container>
      <el-aside style="width:auto">
        <!-- 导航 -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
          :collapse="isCollapse" v-if="$store.state.menu.menu && $store.state.user.info" router>
           <el-menu-item index="/">
						<i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          <el-submenu :index="i.path" v-for="i in $store.state.menu.menu" :key='i.uid'>
            <template slot="title">
						<i :class="icontype[i.id]"></i>
              <span slot="title">{{i.name}}{{i.path}}</span>
            </template>
            <el-menu-item :index="a.path" v-for="a in i.children" :key="a.uid" 
             :disabled='$store.state.user.info.permissions.indexOf(a.path) == -1'>
						<i :class="icontype[a.id]"></i>
              <span slot="title">{{a.name}}{{a.path}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- 导航结束 -->
      </el-aside>
      <el-main v-if="$store.state.user.info">
        <div style="height:50px; line-height:50px; background:#ccc">

          <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="12">
              <div>
                <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                  <el-radio-button :label="false">展开</el-radio-button>
                  <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="text-align:right; padding-right:40px;">
                当前账号:
                <router-link to='/info' style="color:blue;">
                  {{$store.state.user.info.profile.name}}
                </router-link>
              </div>
            </el-col>
          </el-row>
        </div>
        <div style="padding:20px">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>

  </div>
</template>

<script>
import {http,listForRouter,info,menulist} from './api/api'

export default {
  name: 'app',
  data () {
    return {
      isCollapse:false,
      icontype: {
					1: 'el-icon-setting',
					2: 'el-icon-tickets',
					4: 'el-icon-user',
					12: 'el-icon-s-custom',
					21: 'el-icon-s-check',
					17: 'el-icon-menu',
					22: 'el-icon-collection',
					41: 'el-icon-s-order',
					46: 'el-icon-document-add',
					42: 'el-icon-document',
					45: 'el-icon-folder-opened'
				}
    }
  },
  mounted(){
    this.getmenu()
    this.getinfo()
    this.getlist()
  },
  methods:{
    //获取操作功能信息
    getlist(){
      this.$http.get(http+menulist).then((data)=>{    
        console.log(data.data)
      },(err)=>{
        Location.href='./login.html'
      })
    },
    //获取导航
    getmenu(){
      this.$http.get(http+listForRouter).then((data)=>{    
        this.$store.commit('setmenu',data.data.data)
      },(err)=>{
        Location.href='./login.html'
      })
    },
    //获取当前账号信息
    getinfo(){
      this.$http.get(http+info).then((data)=>{
        this.$store.commit('setinfo',data.data.data)
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
  .el-main {
		padding: 0;
	}
</style>
