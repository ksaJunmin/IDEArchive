<template>
  <div class="p-fluid">
    <div class="p-field p-grid">
      <h2><strong>의뢰 작성</strong></h2>
      <label for="title">제목</label>
      <InputText id="title" v-model="newRequest.title"  required autofocus />
    </div>
    <div class="p-field p-grid">
      <label for="content">내용</label>
      <Textarea v-model="newRequest.content" id="body" required rows="12" cols="120" class="full" />
    </div>
    <div class="p-field p-grid">
      <label for="points">포인트</label>
      <InputText id="points" v-model="newRequest.points" />
    </div>
    <div class="button-group">
          <Button label="취소" icon="pi pi-times" text @click="resetForm" />
          <Button label="저장" icon="pi pi-check" text @click="postRequest" />
        </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RequestService } from '@/service/RequestService.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const token = localStorage.getItem('token');
const requestService = new RequestService();

const newRequest = ref({
  title: '',
  content: '',
  points: ''
  });

const postRequest = async () => {
  try {
    await requestService.postRequest(newRequest.value, token);
    // 성공적으로 게시된 의뢰 처리
    resetForm();
    router.push('/board/3');
  } catch (error) {
    console.error('Error creating request: ', error.message);
  }
};

const resetForm = () => {
  newRequest.value.title = '';
  newRequest.value.description = '';
  newRequest.value.points = '';
};
</script>

<style scoped>
.grid {
margin-top: 2rem;
}

.text-center {
text-align: center;
}

.field {
margin-bottom: 1.5rem;
}

.field label {
display: block;
margin-bottom: 0.5rem;
font-weight: bold;
}

.button-group {
display: flex;
justify-content: space-between;
margin-top: 1.5rem;
}

button {
width: 48%;
}
/* 필요한 스타일링 추가 */
</style>
