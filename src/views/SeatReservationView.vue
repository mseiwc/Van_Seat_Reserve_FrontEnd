<template>

  <body>
       <!--Tab menu-->
      <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
        <img src="../views/img/Logo.png" class="logo-img">
        <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
          <a href="http://localhost:5173/home/user" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
          <a href="http://localhost:5173/reserve" class="btn btn-primary mr-4" style="color: white;">จองที่นั่ง</a>
          <a href="http://localhost:5173/payment" class="btn btn-primary mr-4" style="color: white;">ชำระเงิน</a>
          <a href="http://localhost:5173/checkpayment" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
        </div>
        <button class="btn-profile">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd">
          </path>
        </svg>
      </button>
      </div>
      <!--Tab menu-->
      <div class="padding-pd"></div>
    
  
      <div class="menu-align">
        <img src="../views/img/search.png" class="search-img">
        <h3>ค้นหาตารางการเดินทาง</h3>
      </div>
      
      <div class="reserve">
        <select id="reserve-line-dropdown" v-model="selectReserve" class="reserve-input">
          <option value="" selected disabled>เลือกต้นทาง</option>
          <option value="bangkok">กรุงเทพ</option>
          <option value="pattaya">พัทยา</option>
          <option value="khonkaen">ขอนแก่น</option>
          <option value="ubonratchathani">อุบลราชธานี</option>
          <option value="chiangmai">เชียงใหม่</option>
        </select>
        <select id="reserve-line-dropdown" v-model="selectReserve" class="reserve-input">
          <option value="" selected disabled>เลือกปลายทาง</option>
          <option value="bangkok">กรุงเทพ</option>
          <option value="pattaya">พัทยา</option>
          <option value="khonkaen">ขอนแก่น</option>
          <option value="ubonratchathani">อุบลราชธานี</option>
          <option value="chiangmai">เชียงใหม่</option>
        </select>
        <input type="date" id="reserveInput" placeholder="วันที่เดินทาง">
        <button class="btn-select">ค้นหาเส้นทาง</button>
      </div>
  
      
      
  
      <div class="padding-pd"></div>
  </body>
  
</template>
    
    
<script>
  
</script>
    
    
    
<style>
  
</style>
