<template>
  <body>
    <!--Tab menu-->
    <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
      <img src="../views/img/Logo.png" class="logo-img">
      <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
        <a href="http://localhost:5173/home/admin" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
        <a href="http://localhost:5173/route" class="btn btn-primary mr-4" style="color: white;">เพิ่มสถานที่</a>
        <a href="http://localhost:5173/addroute" class="btn btn-primary mr-4" style="color: white;">เพิ่มรอบรถ</a>
        <a href="http://localhost:5173/addcar" class="btn btn-primary mr-4" style="color: white;">เพิ่มคนขับรถ</a>
        <a href="http://localhost:5173/resetseat" class="btn btn-primary mr-4" style="color: white;">รีเซ็ตที่นั่ง</a>
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
        <h3>ตรวจสอบการชำระเงิน</h3>
    </div>

    <div class="payment-container2">

          <table id="UserTable2" v-for="item in tickets" :value="item" :key="item">
          <tbody>
            <tr>
              <td>เลขที่ตั๋ว : {{ item.id }}</td>
              <td><div v-if="item.status === 'unpaid'" style="color: #ff0000"><span style="color: black">สถานะการชำระเงิน: </span>ยังไม่ได้ชำระเงิน</div>
            <!-- <div class="ticket-status" v-if="item.status === 'pending'" style="color: #ff0000">รออนุมัติ</div> -->
              <div v-if="item.status === 'paid'" style="color: rgb(40 151 21);"><span style="color: black">สถานะการชำระเงิน: </span>ชำระเงินแล้ว</div></td>
            </tr>  

            <tr>
              <td>เส้นทาง : {{ item.add_route_id.startRoute_id.name }} - {{ item.add_route_id.endRoute_id.name }}</td>
              <td>วันที่ชำระเงิน : {{ item.payDate }}</td>
              
            </tr>  

            <tr>
              <td>วันที่ : {{ item.add_route_id.date }}</td>
              <td>เวลาชำระเงิน : {{ item.payTime }}</td>
              
            </tr> 

            <tr>
              <td>เวลา : {{ item.add_route_id.time }}</td>
              <td>ราคาที่ชำระเงิน : {{ item.payPrice }}</td>
              
            </tr> 
              
            <tr>
              <td>ราคา : {{ item.add_route_id.price }}</td>
              <!--<td v-if="item.statusApprove === 'pending'">สถานะการอนุมัติ: รอดำเนินการ</td>-->
              

            </tr>  

            <tr>
              <td colspan="2"><div class="button-container3">
                  <!-- <button class="btn-confirm" @click="PaymentReceipt">หลักฐานการชำระเงิน</button> -->
                  <button class="btn-reject-payment" @click="rejectPayment(item.id)">ไม่อนุมัติ</button>
                  <button class="btn-confirm-payment" @click="confirmPayment(item.id)">อนุมัติ</button>
                  </div>
              </td>
            </tr> 
              

            
              
            
          </tbody>

            
            
            
            

            <!-- <div class="ticket-status" v-if="item.status === 'unpaid'" style="color: #ff0000">ยังไม่ได้ชำระเงิน</div>
            <!-- <div class="ticket-status" v-if="item.status === 'pending'" style="color: #ff0000">รออนุมัติ</div> -->
            <!-- <div class="ticket-status" v-if="item.status === 'paid'" style="color: rgb(40 151 21);">ชำระเงินแล้ว</div> --> 

            
          </table>

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
// debug methods
methods: {
          // แสดงตารางทั้งหมด
      async fetchTickets(){

        // get user id # 90
        this.userStore.initStore()
        this.user = this.userStore.user
        // console.log(this.user)
        this.userId = this.userStore.user.id //user_id
        // console.log(this.userId)

        await axios
        .get(`/tickets/?statusApprove=${'pending'}&status=${'paid'}`)
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
  async confirmPayment(idTicket){
    const id = idTicket; // ID ของที่นั่งที่ต้องการอัปเดต
    const newData = { statusApprove: 'approve'}; // ข้อมูลใหม่ที่ต้องการอัปเดต
    await this.updateTicketStatus(id, newData);
    await this.fetchTickets()

  },
  async rejectPayment(idTicket){
    const id = idTicket; // ID ของที่นั่งที่ต้องการอัปเดต
    const newData = { statusApprove: 'reject'}; // ข้อมูลใหม่ที่ต้องการอัปเดต
    await this.updateTicketStatus(id, newData);
    await this.fetchTickets()

  },
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
  }
}     
</script>

<style>

</style>
