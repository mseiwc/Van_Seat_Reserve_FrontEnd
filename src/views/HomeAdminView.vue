<template>

  <body>
     <!--Tab menu-->
    <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
      <img src="../views/img/Logo.png" class="logo-img">
      <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
        <a href="" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
        <a href="" class="btn btn-primary mr-4" style="color: white;">ตารางการเดินรถ</a>
        <a href="" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
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
      <h3>ตารางการเดินรถ</h3>
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
      <input type="text" id="filterInput" placeholder="วันที่เดินทาง">
      <button class="btn-select">ค้นหา</button>
    </div>
    
    <table id="UserTable">
        <thead>
            <tr>
                <th>วันที่</th>
                <th>เวลา</th>
                <th>เส้นทาง</th>
                <th>เลขที่รถ</th>
                <th>เลขรอบรถ</th>
                <th>จัดการ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            
        </tbody>
    </table>


    <button class="btn-addroute"><a href="http://localhost:5173/addroute">เพิ่มรอบรถ</a></button>
  

    <div class="padding-pd"></div>
  </body>
</template>
  
  
<script>
export default {
  mounted() {
    this.fetchFilteredSearches();
  },

  data() {
    return {
      filteredRequests: [], // เปลี่ยนชื่อเป็น filteredRequests
    };
  },

  computed: {
    filteredSearches() {
      return this.filteredRequests.filter(request => {
        const matchesStartRoute = request.startRoute === this.selectedStartRoute; 
        const matchesEndRoute = request.endRoute === this.selectedEndRoute; 
        const matchesDate = request.date === this.selectedDate;
        return matchesStartRoute && matchesEndRoute && matchesDate;
      });
    }
  },

  methods: {
    async fetchFilteredSearches() {
      await this.getUserLogin(); // ให้แก้ไขเป็นการเรียกใช้ getUserLogin() ตามที่คุณมี
      console.log('username: ' + this.username); // ตรวจสอบค่า username
      try {
        if (this.username) {
          // ตรวจสอบว่ามีค่า username หรือไม่
          const response = await axios.get(`/leaveDetail/?username=${this.username}`);
          this.filteredRequests = response.data;
          // ตรวจสอบว่ามีฟังก์ชัน getUniqueRoutes() หรือไม่และใช้งานตามความเหมาะสม
          // ในที่นี้จะให้แสดงตัวอย่างการใช้งานเพื่อความเข้าใจ
          // this.filteredRequests = this.getUniqueRoutes(response.data);
        } else {
          console.log("Doesn't have username:  " + this.username);
        }
      } catch (error) {
        console.error('There was an error fetching the leave requests:', error);
      } finally {
        
      }
    },
  }
};




    // ฟังก์ชันกรองตาราง
    /*function filterTable() {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("filterInput");
      filter = input.value.toUpperCase();
      table = document.getElementById("UserTable");
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
  