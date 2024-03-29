import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',

  state: () => ({
    user: {
      isAuthenticated: false,
      id: null,
      username: null,
      email: null,
      firstName: null,
      lastName: null,
      role: null,
      access: null,
      refresh: null,
    }
  }),
  actions: {
    setToken(data) {
      this.user.access = data.access
      this.user.refresh = data.refresh
      this.user.isAuthenticated = true

      // set local storage
      localStorage.setItem('user.access', data.access)
      localStorage.setItem('user.refresh', data.refresh)

      console.log('user.access: ', localStorage.getItem('user.access'))
    },
    setUserInfo(user){
      this.user.id = user.id
      this.user.username = user.username
      this.user.email = user.email
      this.user.firstName = user.firstName
      this.user.lastName = user.lastName
      this.user.role = user.role

      localStorage.setItem('user.id', this.user.id)
      localStorage.setItem('user.username', this.user.username)
      localStorage.setItem('user.email', this.user.email)
      localStorage.setItem('user.firstName', this.user.firstName)
      localStorage.setItem('user.lastName', this.user.lastName)
      localStorage.setItem('user.role', this.user.role)
      
      console.log('setUserInfo', this.user)
    },
    initStore() {
      console.log('initStore', localStorage.getItem('user.access'))

      if (localStorage.getItem('user.access')) {
          console.log('User has access!')

          this.user.id = localStorage.getItem('user.id')
          this.user.username = localStorage.getItem('user.username')
          this.user.email = localStorage.getItem('user.email')
          this.user.firstName = localStorage.getItem('user.firstName')
          this.user.lastName = localStorage.getItem('user.lastName')
          this.user.role = localStorage.getItem('user.role')
          this.user.access = localStorage.getItem('user.access')
          this.user.refresh = localStorage.getItem('user.refresh')
          this.user.isAuthenticated = true

          this.refreshToken()

          console.log('Initialized user:', this.user)
      }
    },
    // ใช้สำหรับ logout
    removeToken() {
      this.user.isAuthenticated = false
      this.user.id = null
      this.user.username = null
      this.user.email = null
      this.user.firstName = null
      this.user.lastName = null
      this.user.refresh = null
      this.user.access = null
      this.user.role = null

      
      localStorage.setItem('user.id', '')
      localStorage.setItem('user.username', '')
      localStorage.setItem('user.email', '')
      localStorage.setItem('user.firstName', '')
      localStorage.setItem('user.lastName', '')
      localStorage.setItem('user.role', '')
      localStorage.setItem('user.access', '')
      localStorage.setItem('user.refresh', '')
  },
  refreshToken() {
    console.log('Refresh')
      axios.post('/api/refresh/', {

          refresh: this.user.refresh
      })
      .then((response) => {
          this.user.access = response.data.access

          localStorage.setItem('user.access', response.data.access)

          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access
      })
      .catch((error)=>{
          console.log(error)

          this.removeToken()
      })
  },
  }
})
