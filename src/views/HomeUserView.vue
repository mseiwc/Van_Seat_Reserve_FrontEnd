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
  
    <!--ฟีลเตอร์กรองคำค้นหา-->
    <div class="select-route-input">
      <h3>ตารางการเดินทาง</h3>
      <img src="../views/img/search.png" class="search-img">
      <select id="route-dropdown" v-model="selectRoute" class="route-input">
        <option value="" selected disabled>เลือกต้นทาง</option>
        <option value="bangkok">กรุงเทพ</option>
        <option value="pattaya">พัทยา</option>
        <option value="khonkaen">ขอนแก่น</option>
        <option value="ubonratchathani">อุบลราชธานี</option>
        <option value="chiangmai">เชียงใหม่</option>
      </select>
      <select id="route-dropdown" v-model="selectRoute" class="route-input">
        <option value="" selected disabled>เลือกปลายทาง</option>
        <option value="bangkok">กรุงเทพ</option>
        <option value="pattaya">พัทยา</option>
        <option value="khonkaen">ขอนแก่น</option>
        <option value="ubonratchathani">อุบลราชธานี</option>
        <option value="chiangmai">เชียงใหม่</option>
      </select>
      <input type="date" id="filterInput" placeholder="วันที่เดินทาง">
      <button class="btn-select">ค้นหา</button>
    </div>
    
    <table id="UserTable">
        <thead>
            <tr>
                <th>วันที่</th>
                <th>เวลา</th>
                <th>เส้นทาง</th>
                <th>เลขที่รถ</th>
                <th>เลขที่นั่ง</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <!-- เพิ่มข้อมูลเพิ่มเติมตามต้องการ -->
        </tbody>
    </table>

    

    <div class="padding-pd"></div>
  </body>
</template>
  
  
<script>
/*const { Static } = require('vue')

    // ฟังก์ชันกรองตาราง
    function filterTable() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("filterInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");

      for (i = 0; i < tr.length; i++) {
          // จะกรองตารางเฉพาะที่อยู่ในส่วน tbody
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
          }
      }
    }

        // เพิ่ม Event Listener เพื่อกรองเมื่อมีการพิมพ์ข้อมูลใน input
        document.getElementById("filterInput").addEventListener("input", filterTable);*/
</script>
  
  
  
<style>



</style>
  