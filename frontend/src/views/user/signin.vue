<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { UserService } from '@/service/UserService.js';
import bcrypt from 'bcryptjs';

const userService = new UserService();
const router = useRouter();

const form = ref({
  name: '',
  schoolID: '',
  email: '',
  password: ''
});

//add
const errors = ref({
  name: '',
  schoolID: '',
  email: '',
  password: ''
});

const validateForm = () => {
  let valid = true;
  if (form.value.name === '') {
    errors.value.name = '이름을 입력하세요';
    valid = false;
  } else {
    errors.value.name = '';
  }

  if (form.value.schoolID.length !== 6) {
    errors.value.schoolID = '학번은 6자리여야 합니다';
    valid = false;
  } else {
    errors.value.schoolID = '';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.value.email)) {
    errors.value.email = '유효한 이메일 주소를 입력하세요';
    valid = false;
  } else {
    errors.value.email = '';
  }

  if (form.value.password.length < 8) {
    errors.value.password = '비밀번호는 8자 이상이어야 합니다';
    valid = false;
  } else {
    errors.value.password = '';
  }

  return valid;
};


const register = async () => {
  if (!validateForm()) {
    return;
  }

  try {
    const userData = form.value;
    //userData.password 솔트 필요 
    const salt = bcrypt.genSaltSync(10);  // 솔트 생성
    userData.password = bcrypt.hashSync(userData.password, salt);  // 비밀번호 해시

    const response = await userService.register(userData);
    router.push('/');  // 홈페이지 경로로 이동
    alert('사용자 등록 성공: ' + response);
  } catch (error) {
    alert('사용자 등록 오류: ' + error.message);
  }
  };
</script>

<template>
  <div class="grid">
    <div class="col-12 md:col-12">
      <div class="card p-fluid">
        <form @submit.prevent="register">
          <h5>회원가입</h5>
          <div class="field">
            <label for="name">이름</label>
            <InputText id="name" v-model="form.name" type="text" />
            <small v-if="errors.name" class="p-error">{{ errors.name }}</small>
          </div>
          <div class="field">
            <label for="schoolID">학번</label>
            <InputText id="schoolID" v-model="form.schoolID" type="text" />
            <small v-if="errors.schoolID" class="p-error">{{ errors.schoolID }}</small>
          </div>
          <div class="field">
            <label for="email">이메일</label>
            <InputText id="email" v-model="form.email" type="text" />
            <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
          </div>
          <div class="field">
            <label for="password">비밀번호</label>
            <Password v-model="form.password" :feedback="false" variant="filled" label="비밀번호를 입력하세요" />
            <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
          </div>
          <Button label="확인" class="w-full p-3 text-xl" type="submit"></Button>
        </form> 
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>

</template>