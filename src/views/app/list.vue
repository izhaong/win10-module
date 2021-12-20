<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 11:03:25
 * @LastEditTime: 2021-12-20 14:26:50
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/app/list.vue
-->
<template>
  <div class="app-list_container flex h-full">
    <aside style="width: 250px" class="bg-white pl-20px pt-15px">
      <section class="mb-4 px-2">
        <el-input placeholder="请输入内容" v-model="q" size="mini">
          <el-button slot="append" icon="el-icon-search" size="mini"></el-button>
        </el-input>
      </section>
      <section class="bg-blue-400 text-white text-sm h-8 text-center leading-8 rounded-l-full mb-2 hover:bg-blue-400 hover:text-white transition-all hover:cursor-pointer">全部应用</section>
      <section class="h-8 text-center leading-8 text-sm rounded-l-full mb-2 hover:bg-blue-400 hover:text-white transition-all hover:cursor-pointer">类型一</section>
      <section class="h-8 text-center leading-8 text-sm rounded-l-full mb-2">类型二</section>
      <section class="h-8 text-center leading-8 text-sm rounded-l-full mb-2">类型二</section>
    </aside>
    <main class="bg-white flex-1 ml-2">//</main>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  data () {
    return {
      q: ''
    }
  }
}
</script>
