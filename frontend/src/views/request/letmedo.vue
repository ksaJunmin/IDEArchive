<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { RequestService } from '@/service/RequestService.js';

const requestService = new RequestService();
const router = useRouter();
const route = useRoute();

const requestId = ref(route.params.requestId);
const request = ref(null);

const content = ref('');

const addAnswer = async () => {
  const newAnswer = {
    content: content.value,
  };

  try {
    console.log(requestId.value);
    const token = localStorage.getItem('token');
    await requestService.addAnswer(requestId.value, newAnswer, token);
    alert('Answer added successfully!');
    clearForm();
    router.push('/request/' + requestId.value);
  } catch (error) {
    console.error(error);
    alert('Failed to add answer');
  }
};

onMounted(() => {
  requestService.getRequestById(requestId.value).then((data) => {
    request.value = data;
  });
});

const clearForm = () => {
  content.value = '';
};
</script>

<template>
  <div class="grid justify-content-center">
    <div class="col-12 md:col-10">
        {{ request.content }}
      <div>
        <h2 ><strong>새 답변 작성</strong></h2>
        <form @submit.prevent="addAnswer">
          <div class="field">
            <Textarea v-model="content" id="body" required rows="12" cols="120" class="full" />
          </div>

          <div class="button-group">
            <Button label="취소" icon="pi pi-times" text @click="clearForm" />
            <Button label="저장" icon="pi pi-check" text type="submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>

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

.field-radiobutton {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.field-radiobutton label {
  margin-left: 0.5rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

button {
  width: 48%;
}
</style>
