<template>
  <div class="grid justify-content-center">
    <div class="col-12 md:col-6">
      <div>
        <h2 class="text-center">새 글 작성</h2>
        <form @submit.prevent="addPost">
          <div class="field">
            <label for="title">제목</label>
            <InputText v-model="title" id="title" required autofocus />
          </div>
          <div class="field">
            <label for="body">본문</label>
            <Textarea v-model="content" id="body" required rows="5" cols="30" />
          </div>

          <div class="field">
            <label class="mb-3">분류</label>
            <div class="formgrid grid">
              <div class="field-radiobutton col-6" v-for="(category, index) in categories" :key="index">
                <RadioButton v-model="selectedCategory" :id="'category' + index" name="category" :value="category" />
                <label :for="'category' + index">{{ category }}</label>
              </div>
            </div>
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

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import AppConfig from '@/layout/AppConfig.vue';

const title = ref('');
const content = ref('');
const selectedCategory = ref('');
const categories = ['수학', '정보', '물리', '화학'];

const addPost = async () => {
  const newPost = {
    title: title.value,
    content: content.value,
    category: selectedCategory.value,
  };

  try {
    await axios.post('http://localhost:3000/posts/add', newPost);
    clearForm();
    alert('Post added successfully!');
  } catch (error) {
    console.error(error);
    alert('Failed to add post');
  }
};

const clearForm = () => {
  title.value = '';
  content.value = '';
  selectedCategory.value = '';
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
