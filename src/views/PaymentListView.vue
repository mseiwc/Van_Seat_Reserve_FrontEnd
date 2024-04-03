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

    <div class="container mx-auto max-w-lg">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-2xl font-bold mb-4">ชำระเงิน</h1>


        <!-- Ticket List -->
        <div class="flex flex-col gap-4 w-full">
          <div v-for="index in 5" :key="index" class="border-2 border-gray-900 p-4 flex justify-between items-center" >
            <div class="ticket-info">
              เลขที่ตั๋ว Number:
              <span class="text-blue-900">{{ String(index).padStart(5, "0") }}</span>
            </div>

            <button class="btn bg-blue-900 text-white py-2 px-4 rounded-full">
              Pay Now
            </button>
          </div>
        </div>
        <!-- Ticket List -->

      </div>
    </div>
  </body>
</template>

<script>
export default  {

      // debug methods
      methods: {
        logout(){
              this.userStore.removeToken()
              this.$router.push('/')
        },
      }
} 
</script>

<style>

</style>
