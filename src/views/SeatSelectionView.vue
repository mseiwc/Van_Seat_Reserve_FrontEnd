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
        <div class="seat-text">{{ startRouteName }} - {{ endRouteName }}</div>
        <div class="seat-text">วันที่ : {{ date }}</div>
        <div class="seat-text">เวลา : {{  time }}</div>
        
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

      <v-row>
        <v-col cols="12" col="6">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn 
          style="width: 20%; margin: 2% 75%;" 
          v-bind="props" 
          text
          :disabled="reserveStatus === 'reserved'"
          >เลือกที่นั่ง</v-btn>
        </template>

        <v-list>
          <v-list-item-title> <v-btn @click="displayText(1)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 1</v-btn>  </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(2)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 2</v-btn> </v-list-item-title> 
          <v-list-item-title> <v-btn @click="displayText(3)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 3</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(4)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 4</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(5)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 5</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(6)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 6</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(7)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 7</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(8)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 8</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(9)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 9</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(10)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 10</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(11)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 11</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(12)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 12</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText(13)" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 13</v-btn> </v-list-item-title>
        </v-list>
      </v-menu>
      </v-col>
      </v-row>
      <div v-if="displayedText !== ''">
        <p style="margin: 0% 0% 2% 75%; width: 100%;">{{ displayedText }}</p>
      </div>

      <div class="button-container">
        <button class="btn-back">ย้อนกลับ</button>
        <v-row>
        <v-col cols="12" col="6">
          <v-dialog v-model="dialog" max-width="400" persistent>
            <template v-slot:activator="{ on }">
              <v-btn class="btn-confirm" @click="dialog = seatStatus === 'available'"  text style="width: 20%; margin: 2% 75%;">จองที่นั่ง</v-btn>
            </template>

            <v-card text="" title="ยืนยันการจองที่นั่ง">
              <!-- Dialog content -->
              <template v-slot:actions>
                <v-spacer></v-spacer>
                <v-btn @click="cancelReservation">ยกเลิก</v-btn>
                <v-btn @click="confirmReservation">ยืนยัน</v-btn>
              </template>
            </v-card>
          </v-dialog>
        </v-col>
        </v-row>
        <!-- <button class="btn-confirm"  @click="handleReservation">จองที่นั่ง</button> -->
      </div>
      

      <div class="padding-pd"></div>
  </body>

</template>
    
    
<script>
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import { RouterLink } from 'vue-router';
    export default  {
      setup() {
        const userStore = useUserStore()
        return {
          userStore
        }
      },
      data() {
        return {
          ticket: {
            user: '',
            add_route: '',
            seat: '',
            status: 'unpaid'
          },
          ticketId: '',
          selectedAddroute:[],
          addRouteId: '',
          addRoutes: [],
          date: '',
          time: '',

          displayedText: '',
          car: '',
          carId: '',

          seat: [],
          ticketId: '',
          startRouteName: '',
          endRouteName: '',
          seatId: '',
          seatStatus: 'unavailable',
          seatNoSelected: '',
          reserveStatus: '',
          reserveSeatNo: '',
          // userInfo
          user: [],
          userId: '',
          // notification
          dialog: false,

          

        }
      },
      props: ['itemId'],
      created() {
        // เมื่อหน้านี้ถูกสร้างขึ้น ให้ดึงค่า itemId จาก Vue Router
        this.addRouteId = this.$route.params.itemId
      },

      async mounted() {

        await this.fetchAddRoute(this.addRouteId)
        console.log(this.addRoutes)
      },
      methods: {
        async confirmReservation() {
          this.dialog = false;
          await this.handleReservation();
        },
        cancelReservation() {
          this.dialog = false;
        },
        async handleReservation() {

            // userInfo
            this.userStore.initStore();
            this.user = this.userStore.user;
            console.log(this.user);
            this.userId = this.userStore.user.id; //user_id
            console.log(this.userId);

            // playload 
            this.ticket.user = this.userId;

            // post
            if (this.seatStatus === "available") {
              try {
                const response = await axios.post('/tickets/', this.ticket);
                console.log(response.data);
                this.ticketId = response.data.id
                console.log("Ticket ID: "+ this.ticketId)
                // อัปเดตสถานะของที่นั่งหลังจากจอง
                const seatId = this.ticket.seat; // ID ของที่นั่งที่ต้องการอัปเดต
                const newData = { status: 'unavailable' }; // ข้อมูลใหม่ที่ต้องการอัปเดต
                await this.updateSeatStatus(seatId, newData);
                console.log("Change Status seat already " + this.ticket.seat);
                this.reserveStatus = "reserved"
                this.displayedText = "ที่นั่ง: " + this.reserveSeatNo + " จองเเล้ว"

                // ส่งไปยังหน้า payment
                this.$router.push({ name: 'payment', params: { itemId: this.ticketId } });
              } catch (error) {
                console.error('Error handling reservation:', error);
              }
            } else {
              console.log("This seat is unavailable, please select a new seat");
            }
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


        async fetchAddRoute(itemId){

          await axios
          .get(`/addroutes/${itemId}/`)
          .then(response => {
              console.log(response.data)
              this.add_route = response.data
              // display
              this.startRouteName = response.data.startRoute_id.name
              this.endRouteName = response.data.endRoute_id.name
              this.date = response.data.date
              this.time = response.data.time

              this.car = this.addRoutes.car
              this.carId = response.data.car
              
              // playload ticket
              this.ticket.add_route = response.data.id



            }
          ).catch(error => {
          })

        },
        selectSeat(seatNumber) {
          console.log('Selected seat:', seatNumber);
        },

        async displayText(text) {
          // text = no. seat

          //this.displayedText = text;
          // console.log(text)
          this.reserveSeatNo = text
          console.log(this.addRoutes.car)

          await axios
          .get(`/seats/?car_id=${this.carId}&no=${text}`)
          .then(response => {
              //console.log(response.data)
              this.seat = response.data[0]
              console.log("Seat")
              console.log(this.seat)
              if(this.seat.status === "available"){
                this.displayedText = "สถานะที่นั่ง : ว่าง"

                // playload ticket
                this.seatStatus = "available"
                
                this.ticket.seat = response.data[0].id
                console.log("SeatId Select: " + this.ticket.seat)

              }else{
                this.seatStatus = "unavailable"
                this.displayedText = "สถานะที่นั่ง : ไม่ว่าง"
                // this.displayedText = "สถานะที่นั่ง : " + this.seat[0].status
              }


            }
          ).catch(error => {
          })
        },
        logout(){
              this.userStore.removeToken()
              this.$router.push('/')
         },
        // notification
      }
}  
</script>
    
    
    
<style>

</style>
