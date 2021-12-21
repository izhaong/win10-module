<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 18:02:59
 * @LastEditTime: 2021-12-21 13:40:13
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/app/create/create-success.vue
-->
<template>
  <div class="h-full flex">
    <div class="bg-white p-16 rounded-2xl w-9/12 m-auto max-h-9/12 items-center">
      <el-button type="primary" @click="$emit('onNext')">
        应用{{appName}}已创建，快去对应添加里面的场景组件吧！
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      require: true
    }
  }
}
</script>
