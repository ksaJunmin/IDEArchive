<template>
  <div class="p-fluid">
    <div class="p-field p-grid">
      <h2><strong>의뢰 작성</strong></h2>
      <label for="title">제목</label>
      <InputText id="title" v-model="newRequest.title"  required autofocus />
    </div>
    <div class="p-field p-grid">
      <label for="content">내용</label>
      <Textarea v-model="newRequest.content" id="content" required rows="12" cols="120" class="full" />
    </div>
    <div class="p-field p-grid">
      <label for="points">포인트</label>
      <InputText type="number" id="points" min="1" :max="user?.points" v-model.number="newRequest.points" />
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
    <div class="button-group">
          <Button label="취소" icon="pi pi-times" text @click="resetForm" />
          <Button label="저장" icon="pi pi-check" text @click="postRequest" />
        </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RequestService } from '@/service/RequestService.js';
import { UserService } from '@/service/UserService.js';
import { useRouter } from 'vue-router';

const user = ref(null);

const router = useRouter();
const token = localStorage.getItem('token');
const requestService = new RequestService();
const userService = new UserService();

const newRequest = ref({
  title: '',
  content: '',
  points: ''
  });

const postRequest = async () => {
  try {
    if (newRequest.value.points > user.value.points) {
    errorMessage.value = `포인트는 최대 ${user.value.points}까지 입력할 수 있습니다.`;
  } else {
    errorMessage.value = '';
    await requestService.postRequest(newRequest.value, token);
    // 성공적으로 게시된 의뢰 처리
    resetForm();
    router.push('/board/3');
  }
  } catch (error) {
    console.error('Error creating request: ', error.message);
  }
};

const resetForm = () => {
  newRequest.value.title = '';
  newRequest.value.content = '';
  newRequest.value.points = '';
};

const getProfile = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const userData = await userService.fetchUser(token);
      user.value = userData;
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  } else {
    console.error('No token found');
  }
};
const errorMessage = ref('');


onMounted(getProfile);
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
