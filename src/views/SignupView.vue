<template>
  <!--Tab menu-->
  <div class="flex justify-between items-center" style="background-color: #4EA7DB;">
    <img src="../views/img/Logo.png" class="logo-img">
    <div class="header-top-right" style="padding: 1%;">
      <a href="http://localhost:5173/signup" class="btn btn-primary mr-4" style="color: white;">สร้างบัญชีผู้ใช้</a>
      <a href="http://localhost:5173/login" class="btn btn-secondary" style="color: white;">เข้าสู่ระบบ</a>
    </div>
  </div>
  <!--Tab menu-->

  <title>Signup Form</title>
  <div class="signup-form" style="text-align: left;">
    <h3 style="margin: 2% 4%;">ลงทะเบียนผู้ใช้</h3>
    <form action="#" @submit.prevent="submitSignupForm">
      
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="form-group">  
            <label for="fname">ชื่อผู้ใช้</label>
            <input type="text" v-model="formData.username" class="form-input"><br />
          </div>
          <div class="form-group"> 
            <label for="fname">อีเมล</label>
            <input type="text" v-model="formData.email" class="form-input"><br />
          </div>
          <div class="form-group"> 
            <label for="fname">ชื่อ</label>
            <input type="text" v-model="formData.firstName" class="form-input"><br />
          </div>
          <div class="form-group"> 
            <label for="fname">นามสกุล</label>
            <input type="text" v-model="formData.lastName" class="form-input">
          </div>
        </v-col>

        <v-col cols="12" md="6">  
          <div class="form-group">        
            <label for="fname">รหัสผ่าน</label>
            <input type="password" v-model="formData.password1" class="form-input"><br />
          </div>
          <div class="form-group">   
            <label for="fname">ยืนยันรหัสผ่าน</label>
            <input type="password" v-model="formData.password2" class="form-input"><br />
          </div>
          <div class="form-group">   
            <label for="dropdown">Role :&nbsp;</label>
            <select id="role-dropdown" v-model="selectRole" class="form-input">
              <option value="user">ผู้ใช้งาน</option>
              <option value="driver">คนขับรถ</option>
              <option value="admin">แอดมิน</option>
            </select>
          </div>
        </v-col>
      </v-row>
    </v-container>
      <button class="btn-signup">ลงทะเบียน</button>
    </form>

    <div class="signup">
      <span class="signup">คุณมีบัญชีอยู่แล้ว?
        <button class="btn-login" @click="login">เข้าสู่ระบบ</button>
      </span>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
    export default  {
      data() {
        return {
          formData: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password1: '',
            password2: '',
            role: '',
          },
          selectRole: ''
        }
      },
      // debug methods
      methods: {
        submitSignupForm () {
          this.formData.role=this.selectRole
          if (this.username==="") {
            console.log('username เป็นช่องว่าง')
          }
          if (this.email==="") {
            console.log('email เป็นช่องว่าง')
          }
          if (this.firstName==="") {
            console.log('first name เป็นช่องว่าง')
          }
          if (this.lastName==="") {
            console.log('last name เป็นช่องว่าง')
          }
          if (this.password1==="") {
            console.log('password เป็นช่องว่าง')
          }
          if (this.password2==="") {
            console.log('confirm password เป็นช่องว่าง')
          }
          if (this.selectRole==="") {
            console.log('role เป็นช่องว่าง')
          }
          axios
            .post('api/signup/', this.formData)
            .then((response) => { 
              if(response.data.message==='success'){

              } else {
                  console.error(response.data.message)
              }
            })
            .catch((error)=>{
              console.log('error', error)
            })
        }
      }
    }
</script>

<style>
.tab-menu-block {
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
/* signup form */
.signup-form h3 {
    font-weight: bold;
    font-size: 26px;
    margin: 1% 0%;
}
.signup-form input, select#role-dropdown {
    text-align: center;
    border-radius: 10px;
    border: 1px solid #eee;
    padding: 10px;
    margin: 10px 0%;
    transition: .3s border-color;
}
.signup-form input, select#role-dropdown:hover {
    border: 1px solid #aaa;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px; /* Adjust the value as needed for your desired spacing */
}

.form-label {
  margin-bottom: 8px; /* Adjust the value as needed for your desired spacing */
}

.form-input {
  width: 60%; /* Ensure inputs take full width */
}
.btn-signup {
    border-radius: 50px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #3c4043;
    padding: 1%;
    margin: 2% 0%;
}

/* \signup form */


</style>
