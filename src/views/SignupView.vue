<template>
  <!--Tab menu-->
  <nav>
      <div class="tab-menu-block">
        <img src="C:\Users\Admin\Desktop\CS-project\VanSeatReserve\src\views\img\Logo.png" class="logo-img">
        <div class="header-top-right">
          <a href="http://localhost:5173/signup">สร้างบัญชีผู้ใช้</a>
          <a href="http://localhost:5173/login">เข้าสู่ระบบ</a>
        </div>
      </div>
  </nav>
  <!--Tab menu-->


  <title>Signup Form</title>
    <div class="signup-form">
      <h3>ลงทะเบียนผู้ใช้</h3>

        
      <form action="#" @submit.prevent="submitSignupForm">
        <label for="fname">ชื่อผู้ใช้</label><br />
        <input type="text" placeholder="Enter your username" v-model="formData.username"><br />
        <label for="fname">อีเมล</label><br />
        <input type="text" placeholder="Enter your email" v-model="formData.email"><br />
        <label for="fname">ชื่อ</label><br />
        <input type="text" placeholder="Enter your first name" v-model="formData.firstName"><br />
        <label for="fname">นามสกุล</label><br />
        <input type="text" placeholder="Enter your last name" v-model="formData.lastName"><br />
        <label for="fname">รหัสผ่าน</label><br />
        <input type="password" placeholder="Create a password" v-model="formData.password1"><br />
        <label for="fname">ยืนยันรหัสผ่าน</label><br />
        <input type="password" placeholder="Confirm your password" v-model="formData.password2"><br />
        <label for="dropdown">Role :&nbsp;</label>
          <select id="role-dropdown" v-model="selectRole">
            <option value="option1">ผู้ใช้งาน</option>
            <option value="option2">คนขับรถ</option>
            <option value="option3">แอดมิน</option>
          </select><br />
        <button class="btn-signup" >ลงทะเบียน</button>
      </form>
      
      <div class="signup">
        <span class="signup">คุณมีบัญชีอยู่แล้ว?
        <button class="btn-login" @click="login">เข้าสู่ระบบ</button>
        </span>
      </div>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <div>Column 1</div>
      </v-col>
      <v-col cols="12" md="6">
        <div>Column 2</div>
      </v-col>
    </v-row>

</template>

<script>
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
          console.log(this.selectRole)
          console.log("username:" + this.formData.username)
        },
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
