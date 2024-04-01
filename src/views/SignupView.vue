<template>
  <!--Tab menu-->
  <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr;align-items: center;justify-items: end;margin-left;: 3%">
    <img src="../views/img/Logo.png" class="logo-img">
    <div class="tab-menu-block" style="padding: 1%;">
      <a href="http://localhost:5173/signup" class="btn btn-primary mr-4" style="color: white;">สร้างบัญชีผู้ใช้</a>
      <a href="http://localhost:5173/login" class="btn btn-secondary" style="color: white;">เข้าสู่ระบบ</a>
    </div>
  </div>
  <!--Tab menu-->
  <div class="padding-pd"></div>
  <title>Signup Form</title>
  <div class="signup-form" style="text-align: left;">
    <h3 style="margin: 2% 4%;">สร้างบัญชีผู้ใช้</h3>
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
            <label for="dropdown">บทบาท :&nbsp;</label>
            <select id="role-dropdown" v-model="selectRole" class="form-input">
              <option value="user">ผู้ใช้งาน</option>
              <option value="driver">คนขับรถ</option>
              <option value="admin">ผู้ดูแลระบบ</option>
            </select>
          </div>
        </v-col>
      </v-row>
    </v-container>
      <button class="btn-signup">สร้างบัญชี</button>
    </form>

    <div class="signup">
      <span class="signup">คุณมีบัญชีอยู่แล้ว?
        <button class="btn-login" @click="login">เข้าสู่ระบบ</button>
      </span>
    </div>
  </div>
  <div class="padding-pd"></div>
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
        clearInput() {
          this.formData.username = ''
          this.formData.firstName = ''
          this.formData.lastName = ''
          this.formData.email = ''
          this.formData.password1 = ''
          this.formData.password2 = ''
          this.formData.role = ''
          this.selectRole = ''
        },
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
                this.clearInput();
              } else {
                  console.error(response.data.message)
              }
            })
            .catch((error)=>{
              console.log('error', error)
            })
        },
        
        
      }
    }
</script>

<style>
.padding-pd{
  padding: 2%;
}
.menu-align {
  display: flex;
  align-items: center; 
  justify-content: center;
}
.menu-align h3 {
  font-weight: bold;
  font-size: 26px;
  margin: 0% 1%;
}
.menu-align2 {
  display: flex;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
}
.menu-align2 h3 {
  font-weight: bold;
  font-size: 26px;
  margin: 0% 1%;
}
.menu-align2 h4 {
  font-size: 18px;
  margin: 0% 1%;
}

/* Tab Menu */
.tab-menu {
    padding: 1%;
    font-size: 22px;
}
.logo-img {
    width: 100%;
    margin: 1% 0%;
}
/* \Tab Menu */

/* Signup Form */
.signup-form h3 {
    font-weight: bold;
    font-size: 26px;
    margin: 1% 0%;
}
.signup-form input, select#role-dropdown {
    text-align: center;
    border-radius: 50px;
    border: 1px solid #eee;
    padding: 10px;
    margin: 10px 0%;
    transition: .3s border-color;
}
.signup-form input:hover, select#role-dropdown:hover {
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
    margin: 2% 3%;
    width: 8%;
}
.signup {
    margin-left: 2%;
}
.btn-login {
    color: #4ea7db;
}
/* \Signup Form */

/* Login Form */
.login-form {
    text-align: center;
}
.login-form h3 {
    font-weight: bold;
    font-size: 26px;
    margin: 1% 0%;
}
.login-form input:hover {
    border: 1px solid #aaa;
}
.login-form input {
    text-align: center;
    border-radius: 50px;
    border: 1px solid #eee;
    padding: 10px;
    margin: 10px 0%;
    transition: .3s border-color;
}
/* \Login Form */

/* Home */
/* Profile */
.btn-profile {
    background-color: transparent;
    border: 2px solid;
    border-radius: 50px;
    cursor: pointer;
    margin-left: auto; 
}
.btn, .btn-profile {
    color: white;
    text-decoration: none;
    padding: 8px;
    margin-right: 10px;
}
.btn-profile svg {
    fill: currentColor;
    width: 20px; 
    height: auto;
}
/* \Profile */

/* ช่อง Search */
.search-img {
  width: 4%;
  margin: 1% 0%;
}
.select-route-input {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2%;
}
.select-route-input h3 {
  font-weight: bold;
  font-size: 26px;
  margin: 1% 0%;
  flex: 100%; /* ให้รวมในบรรทัดเดียวกัน */
}
select#route-dropdown,
.select-route-input input,
.btn-select {
  text-align: center;
  border-radius: 50px;
  border: 1px solid #eee;
  padding: 10px;
  margin: 10px;
  transition: .3s border-color;
  flex: 0 0 calc(20% - 20px);
}
select#route-dropdown:hover,
.select-route-input input:hover {
  border: 1px solid #aaa;
}
.btn-select {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #0965A7;
  padding: 13px;
  width: calc(10% - 20px);
}
/* \ช่อง Search */

/* ตาราง */
#UserTable {
  width: 85%;
  border-collapse: collapse;
  margin: auto;
}
#UserTable th, #UserTable td {
  border: 1px solid #4ea7db;
  padding: 25px;
  text-align: center;
}
#UserTable tbody tr:hover {
  background-color: #e5e5e5;
}
/* \ตาราง */
/* \Home */

/* Add Route + Add Car */
.route-form, .car-form {
  max-width: 400px; /* ปรับขนาดฟอร์มตามที่คุณต้องการ */
  margin: auto; /* ทำให้ฟอร์มอยู่ตรงกลางหน้าจอ */
  padding: 2% 0% 2% 0%;
}
.route-input, .car-input {
  width: 100%;
  padding: 8px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 50px;
}
.route-form label, .car-form label {
  font-weight: bold;
  
}
.route-form input, .car-form input {
  width: 100%;
  padding: 12px 20px;
  margin: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 50px;
}
/* \Add Route */

/* Payment */
/* ปุ่มย้อนกลับ-ยืนยัน */
.button-container {
  display: flex;
  justify-content: space-between;
}
.btn-confirm {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #0965A7;
  padding: 13px;
  width: calc(10% - 20px);
  margin-right: 10%;
}
.btn-back {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #BABABA;
  padding: 13px;
  width: calc(10% - 20px);
  margin-left: 10%;
}
/* \ปุ่มย้อนกลับ-ยืนยัน */

.btn-addroute {
    border-radius: 50px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #0965A7;
    padding: 13px;
    width: calc(10% - 20px);
    margin: 3% 0% 0% 90%;
}
/* \Payment */

/* Reserve */
.reserve {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.reserve-input, #reserveInput {
  padding: 10px;
  width: 20%;
  text-align: center;
  margin-bottom: 1%;
  border-radius: 50px;
  border: 1px solid #eee;
  transition: .3s border-color;
}
.reserve-input:hover, #reserveInput:hover {
  border: 1px solid #aaa;
}
/* \Reserve */
</style>
