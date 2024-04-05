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

    <div class="seat-container1">
      <div class="seat-text">เลขที่รอบรถ : {{  addRouteId }}</div>
      <div class="seat-text">เลขที่นั่ง : {{  item }}</div>  <!-- seat no  จากหน้า SeatSelectionView > /select/seat -->
      <div class="seat-text">{{ startRouteName }} - {{ endRouteName }}</div>
      <div class="seat-text">วันที่ : {{ date }}</div>
      <div class="seat-text">เวลา : {{  time }}</div>
    </div>
  
    <div class="menu-align2">
      <h3>Scan QR Code</h3>
      <img src="../views/img/qr-code.jpg" class="qr-code">
      <h4>โปรดสแกนคิวอาร์โค้ดเพื่อชำระเงิน</h4>
    </div>

    
    <!--ส่งข้อมูลไปให้ Admin ยืนยัน-->
    <div class="button-container">
      <button class="btn-back">ย้อนกลับ</button>
      <button class="btn-confirm">ชำระเงินสำเร็จ</button>
    </div>
    

    <div class="padding-pd"></div>
  </body>
</template>
  
  
<script>
import axios from 'axios'
import { useUserStore } from '@/stores/user'

export default {
  setup() {
        const userStore = useUserStore()
        return {
          userStore
        }
      },
  data() {
    return {
      imgData: {
      },
      ticketId: '',
    };
  },
  props: ['itemId'],
  created() {
    // เมื่อหน้านี้ถูกสร้างขึ้น ให้ดึงค่า itemId จาก Vue Router
    this.ticketId = this.$route.params.itemId
  },

  async mounted() {
        await this.fetchTicketID()
  },
   
  methods: {
    async fetchTicketID(){

      await axios
      .get(`/tickets/?id=${this.ticketId}`)
      .then(response => {
          // console.log(response.data)
          this.routes = response.data

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
  