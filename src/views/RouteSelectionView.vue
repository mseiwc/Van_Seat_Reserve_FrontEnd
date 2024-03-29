<template>

  <body>
       <!--Tab menu-->
      <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
        <img src="../views/img/Logo.png" class="logo-img">
        <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
          <a href="http://localhost:5173/home/user" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
          <a href="http://localhost:5173/reserve" class="btn btn-primary mr-4" style="color: white;">จองที่นั่ง</a>
          <a href="http://localhost:5173/payment" class="btn btn-primary mr-4" style="color: white;">ชำระเงิน</a>
          <a href="http://localhost:5173/checkpayment" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
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
    
       <!--for loop-->
        <!--<div class="" v-for="(reserve, index) in reserve" :key="index">
          No.: {{ reserve.no }}
          Route: {{ reserve.route }}
          Time: {{ reserve.time }}
          Status: {{ reserve.status }}
          Price: {{ reserve.price }}
        </div>-->
  
      <div class="seat-reserve">
        <table>
          <thead>
            <tr>
              <th>เลขที่รถ</th>
              <th>ต้นทาง</th>
              <th>ปลายทาง</th>
              <th>เวลา</th>
              <th>สถานะ</th>
              <th>ราคา</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in seatReservation" :value="item" :key="item">
              <td>{{ item }}</td>
              <td>{{ item }}</td>
              <td>{{ item }}</td>
              <td>{{ item }}</td>
              <td>{{ item }}</td> <!--ยังไม่มีตัวแปร status-->
              <td>{{ item }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      
  
      <div class="padding-pd"></div>
    </body>
  
  </template>
    
    
<script>
  export default {
    data() {
      return {
        seatReservation: []
      };
    },
    async mounted() {
        await this.fetchSeatReservation()
      },
    methods: {
      async fetchSeatReservation(){
        await axios.get('/addroutes/').then(
          response => {
            console.log(response.data)
            this.seatReservation = response.data

          }
        ).catch(error => {
        })

      },
    }
  };
  </script>
    
    
    
  <style>
  
  </style>
        