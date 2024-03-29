<template>
  <RouterView />
</template>
<script>
import { useUserStore } from '@/stores/user'
import axios from 'axios'


export default {
  setup() {
    const userStore = useUserStore()
    return {
        userStore
    }
  },
  name: 'App',
  beforeCreate() {
      this.userStore.initStore()

      const token = this.userStore.user.access

      if (token) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      } else {
          axios.defaults.headers.common["Authorization"] = "";
      }
  },
  data() {
    return {}
  }
}
</script>
