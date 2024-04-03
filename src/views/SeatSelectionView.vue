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

      <v-row>
        <v-col cols="12" col="6">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn style="width: 20%; margin: 2% 75%;" v-bind="props" text>เลือกที่นั่ง</v-btn>
        </template>

        <v-list>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 1</v-btn>  </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 2</v-btn> </v-list-item-title> 
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 3</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 4</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 5</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 6</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 7</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 8</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 9</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 10</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 11</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 12</v-btn> </v-list-item-title>
          <v-list-item-title> <v-btn @click="displayText('สถานะที่นั่ง :')" style="background-color: transparent; box-shadow: none; width: 100%;">ที่นั่ง 13</v-btn> </v-list-item-title>
        </v-list>
      </v-menu>
      </v-col>
      </v-row>
      <div v-if="displayedText !== 'กหฟก'">
        <p style="margin: 0% 0% 2% 75%; width: 100%;">{{ displayedText }}</p>
      </div>

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
          displayedText: '',

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
        },

        displayText(text) {
          this.displayedText = text;
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
