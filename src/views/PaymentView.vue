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
      <div class="seat-text">เลขที่รถ : {{  carNo }}</div>
      <div class="seat-text">เลขที่นั่ง : {{  seatNo }}</div>
      <div class="seat-text">{{ startRoute }} - {{ endRoute }}</div>
      <div class="seat-text">วันที่ : {{ date }}</div>
      <div class="seat-text">เวลา : {{ time }}</div>
      <div class="seat-text">ราคา : {{ price }}</div>

    </div>
  
    <div class="menu-align2">
      <h3 style="margin-top: 2% !important;">Scan QR Code</h3>
      <img src="../views/img/qr-code.jpg" class="qr-code">
      <h4>โปรดสแกนคิวอาร์โค้ดเพื่อชำระเงิน</h4>
    </div>
    <!-- evident -->
    <div style="margin-top: 5%">
      <div class="menu-align2">
        <h3 style="margin-top: 2% !important;">เพิ่มหลักฐานการชำระเงิน</h3>
      </div>
      <form action="#" @submit.prevent="submitAddCarForm">
        <div class="car-form">

            <label for="fname" >วันที่</label><br />
            <input type="date" placeholder="" v-model="payDate"><br />


            <label for="fname">เวลา</label><br />
            <input type="time" placeholder="" v-model="payTime"><br />

            <label for="fname">ราคา</label><br />
            <input type="number" placeholder="" v-model="payPrice"><br />

          
        </div>
        <div class="button-container">
          <button class="btn-back" @click="back">ย้อนกลับ</button>
          <button class="btn-confirm" @click="submitPayment">ชำระเงินสำเร็จ</button>
        </div>

      </form>
      

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
      tickets: [],

      // display
      carNo: '',
      seatNo: '',
      startRoute: '',
      endRoute: '',
      time: '',
      date: '',
      price: '',

      // playload
      payTime: '',
      payDate: '',
      payPrice: ''



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
          console.log(response.data)
          this.tickets = response.data[0]
          this.carNo = response.data[0].add_route_id.car_id.no
          this.seatNo = response.data[0].seat_id.no
          this.startRoute = response.data[0].add_route_id.startRoute_id.name
          this.endRoute = response.data[0].add_route_id.endRoute_id.name
          this.date = response.data[0].add_route_id.date
          this.time = response.data[0].add_route_id.time
          this.price = response.data[0].add_route_id.price




        }
      ).catch(error => {
      })

    },
    logout(){
              this.userStore.removeToken()
              this.$router.push('/')
    },
    async submitPayment(){
      if(this.payDate && this.payTime && this.payPrice){ // เงื่อนไขเช็คว่า payDate, payTime, และ payPrice ไม่เป็น null
        const id = this.ticketId; // ID ของที่นั่งที่ต้องการอัปเดต
        const newData = { status: 'paid', payDate: this.payDate, payTime: this.payTime, payPrice:  this.payPrice}; // ข้อมูลใหม่ที่ต้องการอัปเดต
        await this.updateTicketStatus(id, newData);
        this.$router.push('/checkpaymentuser');
      } else {
        // แสดงข้อความหรือจัดการเหตุการณ์เมื่อมีค่า null ใน payDate, payTime, หรือ payPrice
        console.log('กรุณากรอกข้อมูล payDate, payTime, และ payPrice');
      }
    },
    // async submitPayment(){
    //   // อัปเดตสถานะของที่นั่งหลังจากจอง
    //   const id = this.ticketId; // ID ของที่นั่งที่ต้องการอัปเดต
    //   const newData = { status: 'paid', payDate: this.payDate, payTime: this.payTime, payPrice:  this.payPrice}; // ข้อมูลใหม่ที่ต้องการอัปเดต
    //   await this.updateTicketStatus(id, newData);
    //   this.$router.push('/checkpaymentuser')
    // },

    async updateTicketStatus(id, newData) {
      try {
        const response = await axios.put(`/tickets/${id}/`, newData);
        console.log(response.data); // แสดงข้อมูลที่ได้รับกลับจาก API
        return response.data;
      } catch (error) {
        console.error('Error updating seat status:', error);
        throw error;
      }
    },
    back(){
      this.$router.push('/paymentlist')

    }
  }
}
</script>
  
  
  
<style>

</style>
  