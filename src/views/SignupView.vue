<template>
  <!--Tab menu-->
  <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr;align-items: center;justify-items: end;margin-left;: 3%">
    <img src="../views/img/Logo.png" class="logo-img">
    <div class="tab-menu-block" style="padding: 1%;">
      <a href="http://localhost:5173/signup" class="btn btn-primary mr-4" style="color: white;">สร้างบัญชี</a>
      <a href="http://localhost:5173/login" class="btn btn-secondary" style="color: white;">เข้าสู่ระบบ</a>
    </div>
  </div>
  <!--Tab menu-->
  <div class="padding-pd"></div>
  <title>Signup Form</title>
  <div class="signup-form" style="text-align: left;">
    <h3 style="margin: 2% 4%;">สร้างบัญชี</h3>
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
        <router-link to="/login"><button class="btn-login">เข้าสู่ระบบ</button></router-link>
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

/* Home View */
.btn-home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-home a {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #0965A7;
  padding: 15px;
  margin: 1%;
  width: calc(20% - 20px);
  text-align: center;
}

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
    padding: 1%;
    margin: 2% 3%;
    width: 8%;
    color: #ffffff;
    background-color: #0965A7;
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
.btn-delete-route {
    border-radius: 50px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #FF3131;
    padding: 15px;
}
/* \Profile */

/* ช่อง Search */
.search-img {
  width: 4%;
  margin: 1% 0%;
}
.select-route-input {
  display: flex;
  align-items: center;
  justify-content: center;
}
.select-route-input form {
  display: flex;
  align-items: center;
  width: 80%;
}
.select-route-input select,
.select-route-input input{
  border-radius: 50px;
  border: 1px solid #eee;
  padding: 10px;
  transition: .3s border-color;
  width: 100%;
  margin: 10px;
  text-align: center;
}
.select-route-input select:hover,
.select-route-input input:hover{
  border: 1px solid #aaa;
}
.btn-select {
    border-radius: 50px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #0965A7;
    padding: 15px;
    width: calc(50% - 20px);
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
.qr-code {
    margin: 2% 0%;
}
.img-file {
    text-align: center;
    margin: 2%;
}
.img {
    background-color: #4ea7db;
    color: white;
    padding: 1%;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
#imgFile {
    display: none;
}
/* ปุ่มย้อนกลับ-ยืนยัน */
.button-container {
  display: flex;
  justify-content: space-between;
}
.button-container2 {
  display: flex;
  justify-content: space-between;
  margin: 10% 0%;
}
.btn-confirm {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #0965A7;
  padding: 15px;
  width: calc(10% - 20px);
  margin-right: 10%;
}
.btn-confirm2 {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #0965A7;
  padding: 15px;
  width: calc(40% - 20px);
  margin-right: 10%;
}
.btn-back {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #BABABA;
  padding: 15px;
  width: calc(10% - 20px);
  margin-left: 10%;
}
.btn-back2 {
  border-radius: 50px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #ffffff;
  background-color: #BABABA;
  padding: 15px;
  width: calc(40% - 20px);
  margin-left: 10%;
}
/* \ปุ่มย้อนกลับ-ยืนยัน */
/* \Payment */

/* Reserve */
.reserve-form {
    text-align: center;
}
.reserve-form label {
    margin-left: 1%;
}
.reserve-form table {
    margin: auto;
    width: 80%;
}
.reserve-form td {
    padding: 15px;
}
.btn-reserve-table {
    border-radius: 50px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #0965A7;
    padding: 15px;
    width: 80%;
}
.reserve {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.reserve-input {
  padding: 10px;
  width: 20%;
  text-align: center;
  margin-bottom: 1%;
  border-radius: 50px;
  border: 1px solid #eee;
  transition: .3s border-color;
}
.reserve-input:hover {
  border: 1px solid #aaa;
}
.btn-select-reserve {
    border-radius: 50px;
    border-style: none;
    box-shadow: rgba(0, 0, 0, .2) 0 3px 5px -1px, rgba(0, 0, 0, .14) 0 6px 10px 0, rgba(0, 0, 0, .12) 0 1px 18px 0;
    box-sizing: border-box;
    color: #ffffff;
    background-color: #0965A7;
    padding: 15px;
    margin: 10px;
    width: calc(12% - 20px);
}
/* \Reserve */

/* Seat */
.seat-container1 {
    background-color: #eaeaea;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin: 1% 35%;
}
.seat-text {
  color: #333;
  font-size: 20px;
  margin-bottom: 10px;
}
.seat-container2 {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 4 คอลัมน์ */
  grid-template-rows: repeat(4, 1fr); /* 8 แถว */
  gap: 15px; /* ระยะห่างระหว่าง grid item */
  padding: 0% 20%;
  justify-items: center;
  font-size: 18px;
  margin-top: 5%;
}

.btn-driver, .btn-seat1, .btn-seat2, .btn-seat3, .btn-seat4, 
.btn-seat5, .btn-seat6, .btn-seat7, .btn-seat8, .btn-seat9, 
.btn-seat10, .btn-seat11, .btn-seat12, .btn-seat13 {
  padding: 20px;
  text-align: center;
  background-color: #4ea7db;
  border-radius: 30px;
  width: 60%;
  color: #fff;
}
.btn-driver{
  background-color: #EAEAEA;
}
/* \Seat */

/* Confirm Reserve */
.confirm {
    border: 2px solid;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 2%;
    margin: auto;
}
.confirm th {
    text-align: left;
    font-size: 22px;
}
.confirm td {
    font-size: 18px;
    padding: 15px;
}
/* \Confirm Reserve */
</style>
