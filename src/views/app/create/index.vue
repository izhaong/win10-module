<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 11:03:39
 * @LastEditTime: 2021-12-21 13:49:07
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/app/create/index.vue
-->
<template>
  <div>
    <create-form v-if="current === 0" @onSuccess="current = 1"></create-form>
    <create-success v-if="current === 1" :app-name="createdApp.name" @onNext="$router.push('/scene/list')"></create-success>
  </div>
</template>

<script>
import CreateForm from './create-form.vue'
import CreateSuccess from './create-success.vue'
export default {
  name: 'AppCreate',
  components: {
    CreateForm,
    CreateSuccess
  },
  data () {
    return {
      current: 0,
      createdApp: {
        id: undefined,
        name: undefined
      }
    }
  },
  methods: {
    //
  }
}
</script>
