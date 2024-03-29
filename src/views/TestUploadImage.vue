<template>
  <div>
    <!-- ฟอร์มสำหรับอัปโหลดรูปภาพ -->
    <form @submit.prevent="submitForm">
      <input type="file" @change="handleFileUpload" />
      <!-- อินพุตอื่นๆ ตามต้องการ -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: '', // สำหรับเก็บไฟล์รูปภาพ
    }
  },
  methods: {
    handleFileUpload(event) {
      this.file = event.target.files[0]; // เก็บไฟล์ที่เลือก
    },
    submitForm() {
      let formData = new FormData();
      formData.append('img', this.file); // ใส่ไฟล์รูปภาพใน formData
      // อาจจะต้องใส่ข้อมูลอื่นๆ ใน formData ด้วย
      // formData.append('key', 'value');

      // ส่งข้อมูลไปยัง backend ด้วย Axios หรือ fetch API
      axios.post('YOUR_BACKEND_URL', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => {
        // การจัดการหลังจากส่งข้อมูลสำเร็จ
        console.log(response);
      })
      .catch(error => {
        // การจัดการข้อผิดพลาด
        console.error(error);
      });
    },
  },
}
</script>
