<template>

  <body>
       <!--Tab menu-->
      <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
        <img src="../views/img/Logo.png" class="logo-img">
        <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
          <a href="http://localhost:5173/home/user" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
          <a href="http://localhost:5173/reserve" class="btn btn-primary mr-4" style="color: white;">จองที่นั่ง</a>
          <a href="http://localhost:5173/paymentlist" class="btn btn-primary mr-4" style="color: white;">ชำระเงิน</a>
          <a href="http://localhost:5173/checkpaymentuser" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
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
    
  
      <div class="menu-align">
        <img src="../views/img/search.png" class="search-img">
        <h3>ค้นหาตารางการเดินทาง</h3>
      </div>
      
      <div class="reserve-form">
        <form action="#" @submit.prevent="submitRouteForm">

        <label for="dropdown">ต้นทาง :&nbsp;</label>
        <select id="reserve-dropdown" v-model="routeData.startRoute" class="reserve-input">
          <option v-for="item in routes" :value="item.id" :key="item.id">{{ item.name }}</option>
        </select>
        <label for="dropdown">ปลายทาง :&nbsp;</label>
        <select id="reserve-dropdown" v-model="routeData.endRoute" class="reserve-input">
          <option v-for="item in routes" :value="item.id" :key="item.id">{{ item.name }}</option>
        </select>
        <label for="fname" >วันที่ :&nbsp;</label>
        <input type="date" v-model="routeData.date" id="reserveInput" class="reserve-input" placeholder="วันที่เดินทาง">
        <button class="btn-select-reserve" >ค้นหาเส้นทาง</button>
        </form>

        <table>
          <tbody>
            <tr v-for="item in searchs" :value="item" :key="item">
              <td>{{ item.car_id.no }}</td>
              <td>{{ item.startRoute_id.name }}</td>
              <td>{{ item.endRoute_id.name }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.price }}</td>
              <td><button class ="btn-reserve-table">จองที่นั่ง</button></td>
            </tr>
          </tbody>
        </table>
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
            
          },
          selectStartRoute: '',
          selectEndRoute: '',
          routes: [],
          routeschedule: [],
          searchs: [],
        }
      },

      async mounted() {
        await this.fetchRoutes()
        await this.fetchRouteschedule()
        
      },

      methods: {

        // get startRoute, endRoute
        async fetchRoutes(){

          await axios
          .get('/routes/')
          .then(response => {
              console.log(response.data)
              this.routes = response.data

            }
          ).catch(error => {
          })

        },

        /*async fetchRouteschedule(){

          await axios
          .get('/addroutes/')
          .then(response => {
              console.log(response.data)
              this.routeschedule = response.data

            }
          ).catch(error => {
          })

          },*/

          // filter searchs
        submitRouteForm () {

        axios
          .get(`/addroutes/?startRoute=${this.routeData.startRoute}&endRoute=${this.routeData.endRoute}&date=${this.routeData.date}`)
          .then(response => {
              console.log(response.data)
              this.searchs = response.data

            }
          ).catch(error => {
          })

          },

          
         
        }
}  

</script>
    
    
    
<style>
  
</style>
