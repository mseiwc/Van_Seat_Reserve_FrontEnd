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
        <table v-for="item in tickets" :value="item" :key="item">
          <tr>
            <td rowspan="2">{{ item.add_route_id.car_id.no }}</td>
            <td>{{ item.add_route_id.startRoute_id.name }} - {{ item.add_route_id.endRoute_id.name }}</td>
          </tr>
          <tr>
            <td>{{ item.add_route_id.time }}</td>
          </tr>
        </table>
      </div>
    
      <div class="seat-container2">
        <div class="btn-driver">คนขับรถ</div>
        <div class="seat-empty"></div>
        <button class="btn-seat4">4</button>
        <button class="btn-seat7">7</button>
        <button class="btn-seat10">10</button>
        <button class="btn-seat13">13</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat3">3</button>
        <button class="btn-seat6">6</button>
        <button class="btn-seat9">9</button>
        <button class="btn-seat12">12</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat2">2</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat1">1</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat5">5</button>
        <button class="btn-seat8">8</button>
        <button class="btn-seat11">11</button>
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

        }
      },

      async mounted() {
        await this.fetchTickets()
      },


      methods: {
        async fetchTickets(){

          await axios
          .get('/tickets/')
          .then(response => {
              console.log(response.data)
              this.tickets = response.data

            }
          ).catch(error => {
          })

        },
        
      }
}  
</script>
    
    
    
<style>

</style>
        