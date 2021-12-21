<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 11:03:39
 * @LastEditTime: 2021-12-20 15:53:55
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/app/create.vue
-->
<template>
  <div >
    <app-form></app-form>
  </div>
</template>

<script>
import AppForm from './app-form.vue'
export default {
  name: 'AppCreate',
  components: {
    AppForm
  },
  data () {
    return {
      current: 0
    }
  },
  methods: {
    //
  }
}
</script>
