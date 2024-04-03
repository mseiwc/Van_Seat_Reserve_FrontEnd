<template>

  <body>
       <!--Tab menu-->
      <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
        <img src="../views/img/Logo.png" class="logo-img">
        <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
          <a href="http://localhost:5173/home/user" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
          <a href="http://localhost:5173/reserve" class="btn btn-primary mr-4" style="color: white;">จองที่นั่ง</a>
          <a href="http://localhost:5173/payment" class="btn btn-primary mr-4" style="color: white;">ชำระเงิน</a>
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

      <div class="seat-container1">
        <div>{{  addRoutes.id }}</div>
        <div>{{  addRoutes.date }}</div>
        <div>{{  addRoutes.time }}</div>
        <!-- <div>{{  addRoutes.startRoute_id.name }} - {{  addRoutes.endRoute_id.name }}</div> -->
        <!-- <table v-for="item in tickets" :value="item" :key="item">
          <tr>
            <td rowspan="2">{{ item.add_route_id.car_id.no }}</td>
            <td>{{ item.add_route_id.startRoute_id.name }} - {{ item.add_route_id.endRoute_id.name }}</td>
          </tr>
          <tr>
            <td>{{ item.add_route_id.time }}</td>
          </tr>
        </table> -->
      </div>
    
      <div class="seat-container2">
        <div class="btn-driver">คนขับรถ</div>
        <div class="seat-empty"></div>
        <button class="btn-seat4" @click="selectSeat(4)">4</button>
        <button class="btn-seat7" @click="selectSeat(7)">7</button>
        <button class="btn-seat10" @click="selectSeat(10)">10</button>
        <button class="btn-seat13" @click="selectSeat(13)">13</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat3" @click="selectSeat(3)">3</button>
        <button class="btn-seat6" @click="selectSeat(6)">6</button>
        <button class="btn-seat9" @click="selectSeat(9)">9</button>
        <button class="btn-seat12" @click="selectSeat(12)">12</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat2" @click="selectSeat(2)">2</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat1" @click="selectSeat(1)">1</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat5" @click="selectSeat(5)">5</button>
        <button class="btn-seat8" @click="selectSeat(8)">8</button>
        <button class="btn-seat11" @click="selectSeat(11)">11</button>
      </div>
      
      <div class="padding-pd"></div>
      <div class="padding-pd"></div>
      <div class="button-container">
        <button class="btn-back">ย้อนกลับ</button>
        <button class="btn-confirm">จองที่นั่ง</button>
      </div>
  
      <div class="padding-pd"></div>
  </body>
  
</template>
    
    
<script>
import axios from 'axios'
    export default  {
      data() {
        return {
          tickets: [],
          selectedAddroute:[],
          addRouteId: '',
          addRoutes: [],
          

        }
      },
      props: ['itemId'],
      created() {
        // เมื่อหน้านี้ถูกสร้างขึ้น ให้ดึงค่า itemId จาก Vue Router
        this.addRouteId = this.$route.params.itemId
      },

      async mounted() {

        await this.fetchAddRoute(this.addRouteId)
      },


      methods: {
        async fetchAddRoute(itemId){

          await axios
          .get(`/addroutes/${itemId}/`)
          .then(response => {
              console.log(response.data)
              this.addRoutes = response.data

            }
          ).catch(error => {
          })

        },
        selectSeat(seatNumber) {
          console.log('Selected seat:', seatNumber);
          // ทำอย่างอื่น ๆ ที่คุณต้องการให้เกิดขึ้นเมื่อเลือกที่นั่ง
        }
        
      }
}  
</script>
    
    
    
<style>

</style>
