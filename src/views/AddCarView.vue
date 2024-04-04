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
      <h3>เพิ่มคนขับรถ</h3>
    </div>

    <title>Add Car Form</title>
    <form action="#" @submit.prevent="submitAddCarForm">
    <div class="car-form">

        <label>เลขที่รถ</label><br />
        <input type="text" v-model="carData.no" placeholder="" ><br />
        <!-- <label for="dropdown">ชื่อคนขับ :&nbsp;</label>
        <select id="route-dropdown" v-model="carData.driver" class="route-input">
          <option v-for="item in drivers" :value="item.id" :key="item.id">{{ item.firstName }} {{ item.lastName }}</option>
        </select> -->
        <label>ป้ายทะเบียนรถ</label><br />
        <input type="text" v-model="carData.carNumber" placeholder="" ><br />
      
    </div>
    
    <div class="button-container">
      <button class="btn-back"> <router-link to="/home/admin">ย้อนกลับ</router-link></button>
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
          carData: {
            no: '',
            carNumber: '',
          },
          // drivers: [],
        }
      },
      async mounted() {
        // await this.fetchDrivers()
      },
      // debug methods
    methods: {
      // async fetchDrivers(){
      //     await axios
      //       .get('/api/users/?role=driver')
      //       .then(response => {
      //         console.log(response.data)
      //         this.drivers = response.data

      //       }
      //     ).catch(error => {
      //     })
      // },

      async submitAddCarForm() {
      console.log(this.carData)

      await axios
        .post('/cars/', this.carData)
        .then((response) => {
          console.log(response.data)
          this.carData.no = ""
          this.carData.driver = ""
          this.carData.carNumber = ""
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
  