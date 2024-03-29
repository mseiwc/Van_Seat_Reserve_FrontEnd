<template>

  <body>
     <!--Tab menu-->
    <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
      <img src="../views/img/Logo.png" class="logo-img">
      <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
        <a href="" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
        <a href="" class="btn btn-primary mr-4" style="color: white;">ตารางการเดินรถ</a>
        <a href="" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
      </div>
      <button class="btn-profile">
      <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd">
        </path>
      </svg>
    </button>
    </div>
    <!--Tab menu-->
    <div class="padding-pd"></div>
    
    <div class="menu-align2">
      <h3>เพิ่มรอบรถ</h3>
    </div>

    <title>Add Route Form</title>
    <div class="route-form">
      <form action="#" @submit.prevent="submitRouteForm">
        <label for="dropdown">ต้นทาง :&nbsp;</label>
        <select id="route-dropdown" v-model="routeData.startRoute" class="route-input">
          <option v-for="item in routes" :value="item.id" :key="item.id">{{ item.name }}</option>
        </select><br />

        <label for="dropdown">ปลายทาง :&nbsp;</label>
        <select id="route-dropdown" v-model="routeData.endRoute" class="route-input">
          <option v-for="item in routes" :value="item.id" :key="item.id">{{ item.name }}</option>
        </select><br />
      <!--แก้วันที่ เวลา-->
        <label for="fname" >วันที่</label><br />
        <input type="date" v-model="routeData.date" placeholder="" ><br />
        <label for="fname">เวลา</label><br />
        <input type="time" v-model="routeData.time" placeholder="" ><br />

        <label for="fname">ราคา</label><br />
        <input type="number" v-model="routeData.price" placeholder="" ><br />

      <!--แก้ชื่อคนขับ -> ดึงชื่อมาจาก data base-->
        <label for="dropdown">ชื่อคนขับ :&nbsp;</label>
        <select id="route-dropdown" v-model="selectDriver" class="route-input">
          <option v-for="item in routes" :value="item.id" :key="item">{{ item.name }}</option>
        </select><br />

      </form>
    </div>
    
    <div class="button-container">
      <button class="btn-back">ย้อนกลับ</button>
      <button class="btn-confirm">ยืนยัน</button>
    </div>

    <div class="padding-pd"></div>
  </body>
</template>
  
  
<script>
import axios from 'axios'
    export default  {
      data() {
        return {
          routeData: {
            startRoute: '',
            endRoute: '',
            date: '',
            time: '',
            price: '',
            driver: '',
            carNumber: '',
          },
          selectStartRoute: '',
          selectEndRoute: '',
          selectDriver: '',
          routes: []
        }
      },
      async mounted() {
        await this.fetchRoutes()
      },
      // debug methods
      methods: {
        async fetchRoutes(){
          await axios.get('/routes/').then(
            response => {
              console.log(response.data)
              this.routes = response.data

            }
          ).catch(error => {
          })

        },

        submitRouteForm () {
          this.routeData.startRoute=this.selectStartRoute
          this.routeData.endRoute=this.selectEndRoute
          this.routeData.driver=this.selectDriver
          if (this.selectStartRoute==="") {
            console.log('start route เป็นช่องว่าง')
          }
          if (this.selectEndRoute==="") {
            console.log('end route เป็นช่องว่าง')
          }
          if (this.date==="") {
            console.log('date เป็นช่องว่าง')
          }
          if (this.time==="") {
            console.log('time เป็นช่องว่าง')
          }
          if (this.price==="") {
            console.log('price เป็นช่องว่าง')
          }
          if (this.selectDriver==="") {
            console.log('driver เป็นช่องว่าง')
          }
          if (this.carNumber==="") {
            console.log('car number เป็นช่องว่าง')
          }
          axios
            .post('api/signup/', this.routeData)
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

</style>
  