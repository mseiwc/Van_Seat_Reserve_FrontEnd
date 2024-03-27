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
    
      <div class="seat-container">
        <div class="driver">คนขับรถ</div>
        <div class="seat-empty"></div>
        <button class="btn-seat">3</button>
        <button class="btn-seat">4</button>
        <button class="btn-seat">5</button>
        <button class="btn-seat">6</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat">9</button>
        <button class="btn-seat">10</button>
        <button class="btn-seat">11</button>
        <button class="btn-seat">12</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat">15</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat">19</button>
        <div class="seat-empty"></div>
        <div class="seat-empty"></div>
        <button class="btn-seat">22</button>
        <button class="btn-seat">23</button>
        <button class="btn-seat">24</button>
      </div>
      
      <div class="padding-pd"></div>
      <div class="padding-pd"></div>
      <div class="button-container">
        <button class="btn-back">ย้อนกลับ</button>
        <button class="btn-confirm">จองที่นั่ง</button>
      </div>
  
      <div class="padding-pd"></div>
  </body>
  
</template>
    
    
<script>
  
</script>
    
    
    
<style>
.seat-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 4 คอลัมน์ */
  grid-template-rows: repeat(4, 1fr); /* 8 แถว */
  gap: 15px; /* ระยะห่างระหว่าง grid item */
  padding: 0% 20%;
  justify-items: center;
  font-size: 18px;
}

.btn-seat, .driver {
  padding: 20px;
  text-align: center;
  background-color: #4ea7db;
  border-radius: 30px;
  width: 60%;
  color: #fff;
}
.driver{
  background-color: #EAEAEA;
}
</style>
        