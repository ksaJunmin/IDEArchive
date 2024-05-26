<template>
    <div class="p-fluid">
      <div class="p-field p-grid">
        <label for="title">제목</label>
        <InputText id="title" v-model="newRequest.title" />
      </div>
      <div class="p-field p-grid">
        <label for="description">내용</label>
        <InputText id="description" v-model="newRequest.description" />
      </div>
      <div class="p-field p-grid">
        <label for="points">포인트</label>
        <InputText id="points" v-model="newRequest.points" />
      </div>
      <Button label="의뢰 게시" @click="postRequest" />
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
    description: '',
    points: 0
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
  /* 필요한 스타일링 추가 */
  </style>
  