<template>

<body>
   <!--Tab menu-->
    <header>
        <!--Logo img-->
        
    </header>

    <nav>
        <div class="tab-menu-block">
        <img src="C:\Users\Admin\Desktop\CS-project\VanSeatReserve\src\views\img\Logo.png" class="logo-img">
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
        <input type="password" placeholder="Create a password" v-model="formData.password1"><br />
        <button class="btn-signup">เข้าสู่ระบบ</button>
      </form>
      
    </div>
</body>
</template>


<script>
    export default  {
      data() {
        return {
          formData: {
            username: '',
            password1: ''
          }
        }
      },

      // debug methods
      methods: {
        submitLoginForm () {
          console.log("username:" + this.formData.username)
          console.log("password:" + this.formData.password1)
        },
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
