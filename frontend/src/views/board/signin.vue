<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();

const form = ref({
  name: '',
  schoolID: '',
  email: '',
  password: ''
});

const register = async () => {
  try {
    const response = await axios.post('http://localhost:3000/users', form.value);
    alert(response.data);
    router.push('/');  // 홈페이지 경로로 이동
  } catch (error) {
    alert('사용자 등록 오류: ' + (error.response ? error.response.data : error.message));
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
                    </div>
                    <div class="field">
                        <label for="schoolID">학번</label>
                        <InputText id="schoolID" v-model="form.schoolID" type="text" />
                    </div>
                    <div class="field">
                        <label for="email">이메일</label>
                        <InputText id="email" v-model="form.email" type="text" />
                    </div>
                    <div class="field">
                        <label for="password">비밀번호</label>
                        <Password v-model="form.password" :feedback="false" variant="filled" label="비밀번호를 입력하세요" />
                    </div>
                    <Button label="확인" class="w-full p-3 text-xl" type="submit"></Button>
                    </form>
            </div>
        </div>
    </div>
</template>
