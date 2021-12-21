<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 15:56:18
 * @LastEditTime: 2021-12-21 15:17:39
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/scene/list/index.vue
-->
<template>
  <div class="h-full flex">
    <div class="scene-create_list bg-white p-16 rounded-2xl shadow-dark-200 w-9/12 m-auto max-h-10/12 items-center">
      <header class="text-center">
        <el-input style="width: 400px" placeholder="请输入内容" v-model="q">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </header>

      <main>
        <p class="text-dark-600 text-xl mb-6">您也可以在已有的场景组件中直接选择：</p>
        <section class="border-dark-50">
          <header>
            <header style="width: 300px" class="mx-auto my-8">
              <el-tabs v-model="activeTab" @tab-click="clickTab">
                <el-tab-pane label="全部" name="all"></el-tab-pane>
                <el-tab-pane label="园区" name="park"></el-tab-pane>
                <el-tab-pane label="能源" name="energy"></el-tab-pane>
                <el-tab-pane label="建造" name="site"></el-tab-pane>
                <el-tab-pane label="其他" name="other"></el-tab-pane>
              </el-tabs>
            </header>
            <main class="list_wrapper" v-loading="listLoading">
              <section class="flex item" v-for="(item, index) in list" :key="index">
                <img :src="item.icon" :alt="item.title" />
                <h3>{{ item.title }}</h3>
                <p>是否是创建应用: {{ isChecked }}</p>
              </section>
            </main>
            <footer class="text-center mt-8">
              <el-button type="primary" style="width: 200px" @click="$router.push('/scene/create')">确认</el-button>
            </footer>
          </header>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SceneList',
  data () {
    return {
      activeTab: 'all',
      q: undefined,
      isChecked: false,
      listLoading: false,
      list: [{ title: '市场商机', icon: 'test', desc: '主要针对市场商机内容组件', rate: 4, used: 999 }]
    }
  },
  computed: {
    allComps () {
      return this.$store.getters.allComps
    },
    appInfo () {
      return this.$store.getters.appInfo
    },
    checkList: {
      get () {
        return this.$store.getters.checkList
      },
      set (v) {
        return this.$store.commit('scene/SET_CHECKLIST', v)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例
    })
  },
  mounted () {
    if (this.appInfo?.name) {
      this.isChecked = true
    }
    this.getComps()
    this.clickTab({ name: 'all' })
  },
  methods: {
    clickTab ({ name }) {
      // todo: 防抖
      switch (name) {
        case 'all':
          console.log(`click all`)
          break

        default:
      }
      //
    },
    async getComps () {
      this.listLoading = true
      await this.$store.dispatch('scene/getSceneComps')
      this.listLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.scene-create_list {
  .list_wrapper {
    .item {
      width: 427px;
      height: 130px;
      background: #fafafa;
      border-radius: 10px;
      border: 1px solid #e7e7e7;
    }
  }
}
</style>
