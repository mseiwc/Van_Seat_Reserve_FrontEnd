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
      <h3>ตารางการเดินรถ</h3>
    </div> 
    <div class="select-route-input">
      <img src="../views/img/search.png" class="search-img">
      <form action="#" @submit.prevent="submitRouteForm">
      <select id="route-dropdown" v-model="routeData.startRoute" class="select-route-input">
        <option value="">- เลือกเส้นทาง -</option>
        <option v-for="item in routes" :value="item.id" :key="item.id">{{ item.name }}</option>
      </select>
      <select id="route-dropdown" v-model="routeData.endRoute" class="select-route-input">
        <option value="">- เลือกเส้นทาง -</option>
        <option v-for="item in routes" :value="item.id" :key="item.id">{{ item.name }}</option>
      </select>
      <input type="date" v-model="routeData.date" id="reserveInput" placeholder="วันที่เดินทาง">
      <button class="btn-select" @click="submitRouteForm">ค้นหา</button>
      </form>
    </div>
    
    <table id="UserTable">
        <thead>
            <tr>
                <th>เลขที่รอบรถ</th>
                <th>วันที่</th>
                <th>เวลา</th>
                <th>เส้นทาง</th>
                <th>ป้ายทะเบียน</th>
                <th>เลขที่รถ</th>
                <th>จัดการ</th>
            </tr>
        </thead>
        <tbody>
            
            <tr v-for="item in searchs" :value="item" :key="item">
                <td>{{ item.id }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.time }}</td>
                <td>{{ item.startRoute_id.name }} - {{ item.endRoute_id.name }}</td>
                <td>{{ item.car_id.carNumber }}</td>
                <td>{{ item.car_id.no }}</td>
                <td>
                  <!-- <button class="btn-delete-route" @click.prevent="deleteRoute(item)">ลบรอบรถ</button> -->
                  <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on }">
                        <button class="btn-delete-route" @click="showConfirmation(item)">ลบรอบรถ</button>
                      </template>
                      <v-card>
                        <v-card-title class="headline">ยืนยันการลบ</v-card-title>
                        <v-card-text>คุณแน่ใจหรือไม่ที่ต้องการลบรอบรถนี้?</v-card-text>
                        <v-card-actions>
                          <v-btn color="primary"  @click.prevent="deleteAddRouteConfirmed()">ยืนยัน</v-btn>
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
          routeData: {
            startRoute: '',
            endRoute: '',
            date: '',
            
          },
            routes: [],
            addroutes:[],
            searchs: [],
            dialog: false, // เพิ่มตัวแปร dialog เพื่อควบคุมการแสดง/ซ่อนกล่องโต้ตอบ
            selectedAddRoute: null // เพิ่มตัวแปร selectedSeatId เพื่อเก็บ ID ของที่นั่งที่ถูกเลือก
          
        }
      },

      async mounted() {
        await this.fetchRoutes()
        await this.fetchAddRoutes()
      },

      methods: {
        showConfirmation(item) {
        this.selectedAddRoute = item; // เก็บ ID ของที่นั่งที่ถูกคลิก
        this.dialog = true; // เปิดกล่องโต้ตอบ
      },
      async deleteAddRouteConfirmed() {
      await this.deleteRoute(this.selectedAddRoute); // ส่ง ID ของที่นั่งที่ถูกเลือกไปยัง method resetSeat()
      this.dialog = false; // ปิดกล่องโต้ตอบหลังจากทำการรีเซ็ตที่นั่งเสร็จสิ้น
},
        // get startRoute, endRoute
        async fetchRoutes(){

          await axios
          .get('/routes/')
          .then(response => {
              console.log(response.data)
              this.routes = response.data
              

            }
          ).catch(error => {
          })

        },

        // แสดงตารางทั้งหมด
        async fetchAddRoutes(){

          await axios
          .get('/addroutes/')
          .then(response => {
              console.log(response.data)
              this.addroutes = response.data
              this.searchs = response.data

            }
          ).catch(error => {
          })

          },

        // แสดงตารางข้อมูลที่ query
        submitRouteForm () {

          // axios
          //   .get(`/addroutes/?startRoute=${this.routeData.startRoute}&endRoute=${this.routeData.endRoute}&date=${this.routeData.date}`)
          //   .then(response => {
          //       console.log(response.data)
          //       this.addroutes = response.data // จากแสดงตารางทั้งหมด (addroutes) -> ถูกเปลี่ยนเป็นแสดงตารางจากข้อมูลที่ถูก query แล้ว (response.data)
                

          //     }
          //   ).catch(error => {
          //   })

              // ค้นหาข้อมูลในอาเรย์ tickets โดยใช้ startRoute, endRoute, และ date
              this.searchs = this.addroutes.filter(item => {
              // ตรวจสอบว่ามีการเลือกค่าใน dropdown หรือไม่ ถ้าไม่มีให้เช็คทุกค่า
              const startRouteMatch = this.routeData.startRoute ? item.startRoute === this.routeData.startRoute : true;
              const endRouteMatch = this.routeData.endRoute ? item.endRoute === this.routeData.endRoute : true;
              const dateMatch = this.routeData.date ? item.date === this.routeData.date : true;

              return startRouteMatch && endRouteMatch && dateMatch;
            });

      },

      // destroy 
      deleteRoute(index) {
        // const routeIdToDelete = this.addroutes[index].id;
        axios
          .delete(`/addroutes/${index.id}`)
          .then(response => {
            console.log("Deleted:", response.data);
            this.fetchAddRoutes();
          })
          .catch(error => {
            console.error("Error deleting route:", error);
          });
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
  