<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 11:03:25
 * @LastEditTime: 2021-12-21 15:06:59
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/app/list.vue
-->
<template>
  <div class="app-list_container flex h-full">
    <aside style="width: 250px" class="bg-white pl-20px pt-15px relative pb-80px">
      <section class="mb-4 px-2">
        <el-input placeholder="请输入内容" v-model="q" size="mini">
          <el-button slot="append" icon="el-icon-search" size="mini"></el-button>
        </el-input>
      </section>
      <section class="bg-blue-400 text-white text-sm h-8 text-center leading-8 rounded-l-full mb-2 hover:bg-blue-400 hover:text-white transition-all hover:cursor-pointer">全部应用</section>
      <section class="h-8 text-center leading-8 text-sm rounded-l-full mb-2 hover:bg-blue-400 hover:text-white transition-all hover:cursor-pointer">类型一</section>
      <section class="h-8 text-center leading-8 text-sm rounded-l-full mb-2">类型二</section>
      <section class="h-8 text-center leading-8 text-sm rounded-l-full mb-2">类型二</section>
      <section class="absolute" style="bottom: 2rem; left: 50%; transform: translateX(-50%)">
        <el-button type="primary" @click="createApp">创建新应用<i class="el-icon-plus el-icon--right"></i></el-button>
      </section>
    </aside>
    <main class="bg-white flex-1 ml-2">
      <header style="width: 235px;" class="mx-auto my-8">
        <el-tabs v-model="activeTab" @tab-click="clickTab">
          <el-tab-pane label="默认" name="default"></el-tab-pane>
          <el-tab-pane label="更新" name="time"></el-tab-pane>
          <el-tab-pane label="评分" name="rate"></el-tab-pane>
          <el-tab-pane label="热度" name="hot"></el-tab-pane>
        </el-tabs>
      </header>
      <main>
        <template v-if="list.lenght" v-loading="listLoading">
          //
        </template>
        <el-empty description=' '>
          <p class="text-gray-400 text-sm flex">暂没有应用，快去&nbsp;<el-link @click="createApp">创建</el-link></p>
        </el-empty>
      </main>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  data () {
    return {
      q: '',
      activeTab: 'default',
      list: [],
      listLoading: false
    }
  },

  methods: {
    clickTab ({ name }) {
      console.log(name)
      console.log(window.localStorage.getItem('Authorization'))
    },
    getAppList () {
      this.listLoading = true
    },
    createApp () {
      this.$router.push('/app/create')
    }
  }
}
</script>
