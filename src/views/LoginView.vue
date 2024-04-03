<template>

<body>
   <!--Tab menu-->
   <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr;align-items: center;justify-items: end;">
    <img src="../views/img/Logo.png" class="logo-img">
    <div class="tab-menu-block" style="padding: 1%;">
      <a href="http://localhost:5173/signup" class="btn btn-primary mr-4" style="color: white;">สร้างบัญชีผู้ใช้</a>
      <a href="http://localhost:5173/login" class="btn btn-secondary" style="color: white;">เข้าสู่ระบบ</a>
    </div>
  </div>
  <!--Tab menu-->
  <div class="padding-pd"></div>

  
  <title>Signup Form</title>
    <div class="login-form">
      <h3>ลงชื่อเข้าสู่ระบบ</h3>
      <form action="#" @submit.prevent="submitLoginForm">
        <label for="fname">ชื่อผู้ใช้</label><br />
        <input type="text" placeholder="" v-model="formData.username"><br />
        <label for="fname">รหัสผ่าน</label><br />
        <input type="password" placeholder="" v-model="formData.password"><br />
        <button class="btn-signup">เข้าสู่ระบบ</button>
      </form>
    </div>

    <div class="padding-pd"></div>
</body>
</template>


<script>
// import user store
import { useUserStore } from '@/stores/user'
import axios from 'axios'

    export default  {
      // จะใช้ user store ได้ต้อง setup ก่อน
      setup() {
        const userStore = useUserStore()
        return {
          userStore,
        }
      },
      data() {
        return {
          formData: {
            username: '',
            password: ''
          },
          role: ''
        }
      },

      // debug methods
      methods: {
        async submitLoginForm () {
          if (this.username==="") {
            console.log('username เป็นช่องว่าง')
          }
          if (this.password==="") {
            console.log('password เป็นช่องว่าง')
          }
          await axios
            .post('api/login/', this.formData)
            .then((response) => { 
              this.userStore.setToken(response.data)
              axios.defaults.headers.common['Authorization'] =
              'Bearer ' + response.data.access
          
            })
            .catch((error)=>{
              console.log('error', error)
            })
            await axios
              .get('/api/me/')
              .then((response) => {
                this.userStore.setUserInfo(response.data)
                console.log(response.data)
                console.log(localStorage.getItem('user.fname'))
                this.role = localStorage.getItem('user.role')

                if(this.role === "user"){
                  this.$router.push('/home/user')
                }else{
                  if(this.role === "admin"){
                    this.$router.push('/home/admin')
                  }else{this.$router.push('/home/driver')
                }
                }
              })
              .catch((error) => {
                console.log('error', error)
              })
        }
      }
      
    }
</script>



<style>

</style>
