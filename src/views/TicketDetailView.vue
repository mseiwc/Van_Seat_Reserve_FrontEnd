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
      <h3>รายละเอียดตั๋ว</h3>
    </div> 
    
    
    <div class="payment-container">
      <div v-for="item in tickets" :value="item" :key="item" class="border-2 border-gray-900 p-4" style="margin: 2%;">
        <div class="ticket-info">เลขที่ตั๋ว : {{ item.id }}</div>
        <div class="ticket-info">ชื่อ-นามสกุล : {{ item.user_id.firstName }} {{ item.user_id.lastName }}</div>
        <div class="ticket-info">เลขที่รถ : {{ item.add_route_id.car_id.no }}</div>
        <div class="ticket-info">เลขที่นั่ง : {{ item.seat_id.no }}</div>
        <div class="ticket-info">เส้นทาง : {{ item.add_route_id.startRoute_id.name }} - {{ item.add_route_id.endRoute_id.name }}</div>
        <div class="ticket-info">วันที่ : {{ item.add_route_id.date }}</div>
        <div class="ticket-info">เวลา : {{ item.add_route_id.time }}</div>
        <div class="ticket-status" v-if="item.status === 'unpaid'" style="color: #ff0000">ยังไม่ได้ชำระเงิน</div>
        <div class="ticket-status" v-if="item.status === 'paid'" style="color: rgb(40 151 21);">ชำระเงินแล้ว</div>
      </div>
    </div>
    
    <div class="button-container">
      <button class="btn-back"> <router-link to="/home/user">ย้อนกลับ</router-link></button>
    </div>

    <div class="padding-pd"></div>
  </body>
</template>
  
  
<script>
import axios from 'axios'
import { useUserStore } from '@/stores/user'

    export default  {
      setup() {
        const userStore = useUserStore()
        return {
          userStore
        }
      },

      data() {
        return {
          tickets:[],

            
          // userInfo
          user: [],
          userId: '',

        }
      },

      async mounted() {
          await this.fetchTickets()
      },

      methods: {
          async fetchTickets(){

          // get user id # 90
          this.userStore.initStore()
          this.user = this.userStore.user
          // console.log(this.user)
          this.userId = this.userStore.user.id //user_id
          // console.log(this.userId)

          await axios
          .get(`/tickets/?user_id=${this.userId}`)
          .then(response => {
              console.log(response.data)
              this.tickets = response.data
              // this.searchs = response.data

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
  