<template>

  <body>
     <!--Tab menu-->
    <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
      <img src="../views/img/Logo.png" class="logo-img">
      <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
        <a href="http://localhost:5173/home/admin" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
        <a href="http://localhost:5173/route" class="btn btn-primary mr-4" style="color: white;">เพิ่มเส้นทาง</a>
        <a href="http://localhost:5173/addroute" class="btn btn-primary mr-4" style="color: white;">เพิ่มรอบรถ</a>
        <a href="http://localhost:5173/addcar" class="btn btn-primary mr-4" style="color: white;">เพิ่มคนขับรถ</a>
        <a href="http://localhost:5173/checkpaymentadmin" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
      </div>
      
      <v-row>
          <v-col cols="12" offset-sm="3" sm="6" >
            
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-dots-vertical" v-bind="props">
                      <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
                      </svg>
                    </v-btn>
                  </template>

                  <v-list>
                      <v-list-item-title><v-btn @click="logout">ออกจากระบบ</v-btn></v-list-item-title>
                  </v-list>
                </v-menu>

          </v-col>
        </v-row>

    </div>
    <!--Tab menu-->
    <div class="padding-pd"></div>
    
    <div class="menu-align2">
      <h3>เพิ่มเส้นทาง</h3>
    </div>

    <title>Add Route Form</title>
    <form action="#" @submit.prevent="submitRouteForm">
    <div class="route-form">


        <!--แก้เลขที่รถ -> gen โดยระบบ-->
        <label for="name">เส้นทาง</label><br />
        <input type="text" v-model="routeData.name" placeholder="" ><br />
      
    </div>
    
    <div class="button-container">
      <button class="btn-back">ย้อนกลับ</button>
      <button class="btn-confirm">ยืนยัน</button>
    </div>
  </form>

    <div class="padding-pd"></div>
  </body>
</template>
  
  
<script>
import axios from 'axios'
    export default  {
      data() {
        return {
          routeData: {
            name: '',
          },
        }
      },
      // debug methods
      methods: {
      async submitRouteForm() {


      console.log(this.formData)



      await axios
        .post('/routes/', this.routeData)
        .then((response) => {
          console.log(response.data)
          this.routeData.name = ""

        })
        .catch((error) => {
          console.log('error', error)
        })

      },
      logout(){
              this.userStore.removeToken()
              this.$router.push('/')
         },
    }
}      


</script>
  
  
  
<style>

</style>
  