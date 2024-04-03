<template>

  <body>
     <!--Tab menu-->
    <div class="tab-menu" style="background-color: #4EA7DB;display: grid; grid-template-columns: 3fr 10fr 3fr;align-items: center;">
      <img src="../views/img/Logo.png" class="logo-img">
      <div class="tab-menu-block" style="padding: 1%;margin-left: 10%;">
        <a href="http://localhost:5173/home/user" class="btn btn-primary mr-4" style="color: white;">หน้าแรก</a>
        <a href="http://localhost:5173/reserve" class="btn btn-primary mr-4" style="color: white;">จองที่นั่ง</a>
        <a href="http://localhost:5173/payment" class="btn btn-primary mr-4" style="color: white;">ชำระเงิน</a>
        <a href="http://localhost:5173/checkpaymentuser" class="btn btn-secondary" style="color: white;">ตรวจสอบการชำระเงิน</a>
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
  
    <div class="menu-align2">
      <h3>Scan QR Code</h3>
      <img src="../views/img/qr-code.jpg" class="qr-code">
      <h4>โปรดสแกนคิวอาร์โค้ดเพื่อชำระเงิน</h4>
    </div>

    <div class="img-file">
      <label for="imgFile" class="img">เพิ่มหลักฐานการโอนเงิน</label>
      <input type="file" @change="handleFileChange" id="imgFile" accept="image/*">
    </div>
    
    <!--ส่งข้อมูลไปให้ Admin ยืนยัน-->
    <div class="button-container">
      <button class="btn-back">ย้อนกลับ</button>
      <button class="btn-confirm" @click="sendImg">ชำระเงินสำเร็จ</button>
    </div>
    

    <div class="padding-pd"></div>
  </body>
</template>
  
  
<script>
import axios from 'axios'
export default {
  data() {
    return {
      imgData: {
        img: null
      }
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imgData.img = file;
        this.uploadFile(file);
      }
    },
    uploadFile(file) {
      const formData = new FormData();
      formData.append('file', file);

      // Send the file to your Django server
      axios.post('/api/upload/', formData)
        .then(response => {
          console.log('File uploaded successfully');
          // Handle the response from the server if needed
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          // Handle the error if the upload fails
        });
    }
  }
}
</script>
  
  
  
<style>

</style>
  