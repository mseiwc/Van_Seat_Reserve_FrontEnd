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
    
    
    <table id="UserTable">
        <thead>
            <tr>
                <th>เลขที่รถ</th>
                <th>เลขที่นั่ง</th>
                <th>เส้นทาง</th>
                <th>วันที่</th>
                <th>เวลา</th>
                <th>รีเซ็ตที่นั่ง</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in sortedTickets" :value="item" :key="item">
                <td>{{ item.add_route_id.car_id.no }}</td>
                <td>{{ item.seat_id.no }}</td>
                <td>{{ item.add_route_id.startRoute_id.name }} - {{ item.add_route_id.endRoute_id.name }}</td>
                <td>{{ item.add_route_id.date }}</td>
                <td>{{ item.add_route_id.time }}</td>
                <td>
                  <!-- <button class="btn-resetseat" @click.prevent="resetSeat(item.seat_id.id)">รีเซ็ตที่นั่ง</button> -->
                    <!-- ส่วนอื่น ๆ ของ template -->
                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <button class="btn-resetseat" @click="showConfirmation(item.seat_id.id)">รีเซ็ตที่นั่ง</button>
                      </template>
                      <v-card>
                        <v-card-title class="headline">ยืนยันการลบ</v-card-title>
                        <v-card-text>คุณแน่ใจหรือไม่ที่ต้องการรีเซ็ตที่นั่งนี้?</v-card-text>
                        <v-card-actions>
                          <v-btn color="primary"  @click.prevent="resetSeatConfirmed()">ยืนยัน</v-btn>
                          <v-btn color="error" @click="dialog = false">ยกเลิก</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                </td>
            </tr>
        </tbody>
    </table>








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
          tickets: [],
          dialog: false, // เพิ่มตัวแปร dialog เพื่อควบคุมการแสดง/ซ่อนกล่องโต้ตอบ
          selectedSeatId: null // เพิ่มตัวแปร selectedSeatId เพื่อเก็บ ID ของที่นั่งที่ถูกเลือก
        }
        
      },
      async mounted() {
        await this.fetchTickets()

      },
      computed: {
          sortedTickets() {
              // คัดลอกข้อมูลตั๋วเพื่อไม่ทำให้ข้อมูลเดิมถูกเปลี่ยนแปลง
              const copiedTickets = [...this.tickets];
              // เรียงลำดับตั๋วตามเลขที่รถและเลขที่นั่ง
              return copiedTickets.sort((a, b) => {
                  // ตัวเลขที่รถ (เป็นตัวเลข)
                  const carIdA = a.add_route_id.car_id.no;
                  const carIdB = b.add_route_id.car_id.no;
                  // เลขที่นั่ง (เป็นตัวเลข)
                  const seatNoA = a.seat_id.no;
                  const seatNoB = b.seat_id.no;
                  // เรียงลำดับตามเลขที่รถ และเมื่อเลขที่รถเท่ากัน จะเรียงตามเลขที่นั่ง
                  if (carIdA === carIdB) {
                      return seatNoA - seatNoB;
                  }
                  return carIdA - carIdB;
              });
          }
      },
      // debug methods
    methods: {   // method สำหรับเปิดกล่องโต้ตอบ
      showConfirmation(seatId) {
        this.selectedSeatId = seatId; // เก็บ ID ของที่นั่งที่ถูกคลิก
        this.dialog = true; // เปิดกล่องโต้ตอบ
      },
      async updateSeatStatus(id, newData) {
            try {
              const response = await axios.put(`/seats/${id}/`, newData);
              console.log(response.data); // แสดงข้อมูลที่ได้รับกลับจาก API
              return response.data;
            } catch (error) {
              console.error('Error updating seat status:', error);
              throw error;
            }
          },
      async fetchTickets(){

      await axios
      .get('tickets_filter/?seat_status=unavailable')
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
      async resetSeat(seatId){

        console.log(seatId)

        const newData = { status: 'available' }; // ข้อมูลใหม่ที่ต้องการอัปเดต
        await this.updateSeatStatus(seatId, newData);
        await this.fetchTickets()
        // ปิดกล่องโต้ตอบหลังจากทำการรีเซ็ตที่นั่งเสร็จสิ้น
         this.dialog = false
      },
      async resetSeatConfirmed() {
      await this.resetSeat(this.selectedSeatId); // ส่ง ID ของที่นั่งที่ถูกเลือกไปยัง method resetSeat()
      this.dialog = false; // ปิดกล่องโต้ตอบหลังจากทำการรีเซ็ตที่นั่งเสร็จสิ้น
},

      }
    }      
</script>
  
  
  
<style>

</style>
  