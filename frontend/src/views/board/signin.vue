<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';


const name = ref('');
const schoolID = ref('');
const email = ref('');
const password = ref('');

const registerUser = async () => {
  try {
    const response = await axios.post('/users', {
      name: name.value,
      schoolID: schoolID.value,
      email: email.value,
      password: password.value
    });
    console.log(response.data);
    alert('회원가입이 완료되었습니다.');
    router.push('/');
  } catch (error) {
    console.error('회원가입 중 오류가 발생했습니다:', error);
    alert('회원가입에 실패했습니다.');
  }
};
const router = useRouter();
const goToMain = () => {
    
    router.push('/');
};
</script>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      form: {
        name: '',
        schoolID: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post('http://localhost:3000/users', this.form);
        alert(response.data);
        router.push('/');
      } catch (error) {
        alert('Error registering user: ' + error.response.data);
      }
    }
  }
};
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card p-fluid">
<<<<<<< Updated upstream
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
=======
                <h5>회원가입</h5>
                <div class="field">
                    <label for="name1">이름</label>
                    <InputText id="name1" type="text" />
                </div>
                <div class="field">
                    <label for="email1">학번</label>
                    <InputText id="id1" type="text" />
                </div>
                <div class="field">
                    <label for="age1">이메일</label>
                    <InputText id="email1" type="text" />
                </div>
                <div class="field">
                    <label for="age1">비밀번호</label>
                    <Password v-model="value" :feedback="false" variant="filled" label="비밀번호를 입력하세요" />
                </div>
                <Button label="확인" class="w-full p-3 text-xl" @click="registerUser()"></Button>
>>>>>>> Stashed changes
            </div>
        </div>
    </div>
</template>
