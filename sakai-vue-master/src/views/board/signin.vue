<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goToMain = () => {
    router.push('/');
};
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-12">
            <div class="card p-fluid">
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
                <Button label="확인" class="w-full p-3 text-xl" @click="goToMain()"></Button>
            </div>
        </div>
    </div>
</template>
