<script setup>
import { useLayout } from '@/layout/composables/layout.js';
import { ref, computed } from 'vue';
import { UserService } from '@/service/UserService.js';

const userService = new UserService();

const { layoutConfig } = useLayout();
const email = ref('');
const password = ref('');
const checked = ref(false);

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

import { useRouter } from 'vue-router';
const router = useRouter();

const loginError = ref(null);

const login = async () => {
  try {
    const response = await userService.login(email.value, password.value);
    
    const token = response.token;
    localStorage.setItem('token', token);
    router.push('/');
  } catch (error) {
    loginError.value = 'Invalid email or password';
    console.error('Error logging in:', error);
  }
  };
</script>

<template>
    <div class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
        <div class="flex flex-column align-items-center justify-content-center">
            <img :src="logoUrl" alt="Sakai logo" class="mb-5 w-6rem flex-shrink-0" />
            <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                <div class="w-full surface-card py-8 px-5 sm:px-8" style="border-radius: 53px">
                    <div class="text-center">
                        <div class="text-900 text-3xl font-medium mb-3">아이디어 아카이브 로그인</div>
                        <span class="text-600 font-medium">계속하려면 로그인하세요</span>
                    </div>

                    <form @submit.prevent="login">
                        <label for="email" class="block text-900 text-xl font-medium mb-2">Email</label>
                        <InputText id="email" type="email" placeholder="example@ksa.hs.kr" class="w-full md:w-30rem mb-5" style="padding: 1rem" v-model="email" />

                        <label for="password" class="block text-900 font-medium text-xl mb-2">Password</label>
                        <Password type="password" id="password" v-model="password" :feedback="false" placeholder="Password" :toggleMask="true" class="w-full mb-3" inputClass="w-full" :inputStyle="{ padding: '1rem' }"></Password>

                        <Button label="로그인" class="w-full p-3 text-xl" type="submit"></Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.6);
    margin-right: 1rem;
}

.pi-eye-slash {
    transform: scale(1.6);
    margin-right: 1rem;
}
</style>
