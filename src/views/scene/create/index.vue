<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 15:56:18
 * @LastEditTime: 2021-12-21 17:14:26
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/scene/create/index.vue
-->
<template>
  <div class="relative">
    <section class="flex absolute" style="bottom: 115px; top: 0; left: 0; right: 0">
      <aside style="width: 250px" class="bg-white h-full">
        <h2>场景组件</h2>
        <el-autocomplete v-model="q" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false" @select="selectComp">
          <i class="el-icon-edit el-input__icon" slot="suffix"> </i>
          <template slot-scope="{ item }">
            <div class="name">{{ item.label }}</div>
            <!-- <span class="">{{ item }}</span> -->
          </template>
        </el-autocomplete>
        <!-- <el-select v-model="q" filterable placeholder="请选择" multiple collapse-tags @blur="blurSelectedInput" @focus="focusSelectedInput">
          <el-option v-for="item in searchOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select> -->
        <section class="my-4">
          <ul>
            <li
              class="hover:text-white hover:bg-blue-400 transition-all cursor-pointer"
              :class="activeComp.id === item.value ? 'bg-blue-400 text-white' : ''"
              v-for="(item, index) in selectedComps"
              :key="index"
              @click="clickSelectedComp(item)"
            >
              {{ item.label }}
            </li>
          </ul>
        </section>
      </aside>
      <main class="flex-1 flex">
        <aside class="mx-2 bg-white" style="width: 250px">//</aside>
        <main class="flex-1 bg-white">//</main>
      </main>
    </section>
    <footer class="flex justify-between px-8 items-center box-border bg-white absolute w-full" style="bottom: 0; left: 0; height: 105px">
      <el-button type="danger">删除</el-button>
      <el-button type="primary" @click="$store.dispatch('appList/createApp')">生成应用</el-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SceneCreate',
  data () {
    return {
      q: undefined,
      searchOptions: [],
      selectedComps: [],
      activeComp: { id: undefined },
      selectedCompMenus: []
    }
  },
  computed: {
    allComps () {
      return this.$store.getters.allComps
    }
  },
  mounted () {
    this.searchOptions = this.allComps.map((v) => ({ label: v.sysMenuDTO.name, value: v.sysMenuDTO.id }))
  },
  methods: {
    querySearch (q, cb) {
      var searchOptions = this.searchOptions
      var results = q ? searchOptions.filter(this.createFilter(q)) : searchOptions
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (q) {
      console.log(q)
      return (comp) => {
        return comp.label.indexOf(q) !== -1
      }
    },
    selectComp (item) {
      const { value: id } = item
      if (!this.selectedComps.map((v) => v.id).includes(id)) this.selectedComps.push(item)
      this.q = ''
    },
    clickSelectedComp (item) {
      const { value: id } = item
      this.activeComp = this.qallComps.find(v => v.sysMenuDTO.id === id)
      // this.selectedCompMenus =
    }
  }
}
</script>
