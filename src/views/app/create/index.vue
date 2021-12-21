<!--
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2021-12-20 11:03:39
 * @LastEditTime: 2021-12-20 19:39:13
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description:
 * @FilePath: /win10-module/src/views/app/create/index.vue
-->
<template>
  <div>
    <create-form v-if="current === 0" @onSuccess="(app) => {current = 1;createdApp = app;}"></create-form>
    <create-success v-if="current === 1" :app-name="createdApp.name" @onNext="$router.push({name: '', params: {isCheked: true, appId: createdApp.id}})"></create-success>
    <scene-create v-if="current === 2"></scene-create>
  </div>
</template>

<script>
import CreateForm from './create-form.vue'
import CreateSuccess from './create-success.vue'
import SceneCreate from '../../scene/create'
export default {
  name: 'AppCreate',
  components: {
    CreateForm,
    CreateSuccess,
    SceneCreate
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
