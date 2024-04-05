<!-- ReservationConfirmationModal.vue -->
<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <p>คุณต้องการยืนยันการจองที่นั่งหรือไม่?</p>
      <button @click="confirmReservation">ยืนยัน</button>
      <button @click="cancelReservation">ยกเลิก</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showModal'],
  methods: {
    confirmReservation() {
      this.$emit('confirm'); // ส่ง Event ยืนยันการจอง
    },
    cancelReservation() {
      this.$emit('cancel'); // ส่ง Event ยกเลิกการจอง
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
