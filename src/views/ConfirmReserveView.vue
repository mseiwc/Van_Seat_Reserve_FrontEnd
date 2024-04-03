<template>
  <!--Tab menu-->
  <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
      <img src="../views/img/Logo.png" class="logo-img">
      <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
        <a href="http://localhost:5173/home/user" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
        <a href="http://localhost:5173/reserve" class="btn btn-primary mr-4" style="color: white;">จองที่นั่ง</a>
        <a href="http://localhost:5173/paymentlist" class="btn btn-primary mr-4" style="color: white;">ชำระเงิน</a>
        <a href="http://localhost:5173/checkpaymentuser" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
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
      <h3>สรุปการจองที่นั่ง</h3>
    </div>

    <div class="confirm">
      <table v-for="item in tickets" :value="item" :key="item">
        <tr>
          <th colspan="4">เลขที่ตั๋ว : {{ item.id }}</th>
        </tr>
        <tr>
          <td><b>ชื่อ</b></td>
          <td>{{ item.user_id.firstName }} {{ item.user_id.lastName }}</td>
          <td><b>เวลา</b></td>
          <td>{{ item.add_route_id.time }}</td>
        </tr>
        <tr>
          <td><b>เลขที่นั่ง</b></td>
          <td>{{ item.add_route_id.seat_id.no }}</td>
          <td><b>วันที่</b></td>
          <td>{{ item.add_route_id.date }}</td>
        </tr>
        <tr>
          <td><b>เลขที่รถ</b></td>
          <td>{{ item.add_route_id.car_id.no }}</td>
          <td><b>ราคา</b></td>
          <td>{{ item.add_route_id.price }}</td>
        </tr>
        <tr>
          <td><b>เส้นทาง</b></td>
          <td>{{ item.add_route_id.startRoute_id.name }} - {{ item.add_route_id.endRoute_id.name }}</td>

        </tr>
      </table>
    </div>

    <div class="button-container">
      <button class="btn-back">ย้อนกลับ</button>
      <button class="btn-confirm">ยืนยัน</button>
    </div>

    <div class="padding-pd"></div>
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
        logout(){
              this.userStore.removeToken()
              this.$router.push('/')
         },
        
      }
}
  
</script>
    
    
    
<style>
  
</style>
