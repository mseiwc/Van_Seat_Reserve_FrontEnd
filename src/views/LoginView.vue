<template>

<body>
   <!--Tab menu-->
    <header>
        <!--Logo img-->
        
    </header>

    <nav>
        <div class="tab-menu-block">
        <img src="../views/img/Logo.png" class="logo-img">
          <div class="nav-a">
          <a href="http://localhost:5173/">หน้าแรก</a>
          <a href="#">จองที่นั่ง</a>
          <a href="#">ชำระเงิน</a>
          <a href="#">ตรวจสอบการชำระเงิน</a>
          </div>
        </div>
    </nav>
   <!--Tab menu-->

  
  <title>Signup Form</title>
    <div class="signup-form">
      <h3>ลงชื่อเข้าสู่ระบบ</h3>
      <form action="#" @submit.prevent="submitLoginForm">
        <label for="fname">ชื่อผู้ใช้</label><br />
        <input type="text" placeholder="Enter your username" v-model="formData.username"><br />
        <label for="fname">รหัสผ่าน</label><br />
        <input type="password" placeholder="Create a password" v-model="formData.password"><br />
        <button class="btn-signup">เข้าสู่ระบบ</button>
      </form>
      
    </div>
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
          }
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
                // console.log(localStorage.getItem('user.fname'))
                this.$router.push('/home')
              })
              .catch((error) => {
                console.log('error', error)
              })
        }
      }
      
    }
</script>



<style>
.tab-menu-block {
    width: 100%;
    display: flex;
    align-items: center;
}
.logo-img {
    width: 20%;
    margin: 1% 0%;
}
nav {
    text-align: center;
    margin: 4% 0%;
    background-color: #4EA7DB;
}
nav a {
    margin: 0% 2%;
    color: white;
    font-size: 20px;
}
.nav-a {
    width: 100%;
    margin-right: 20%;
}
.head {
  background-color: #4EA7DB;
}
.signup-form, .signup-form input {
    text-align: center;
}
.signup-form h3 {
  font-weight: bold;
}

</style>
