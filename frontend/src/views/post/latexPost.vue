<script setup>
import { ref } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';
import { useRouter } from 'vue-router';
import { PostService } from '@/service/PostService.js';
import MathRenderer from '@/views/post/MathRenderer.vue';

const postService = new PostService();
const router = useRouter();

const title = ref('');
const content = ref('');
const selectedCategory = ref('');
const categories = ['수학', '정보', '물리', '화학', '생물','지구과학','인문','기타'];

const addPost = async () => {
  const newPost = {
    title: title.value,
    content: content.value,
    category: selectedCategory.value,
    islatex : 1
  };

  try {
    const token = localStorage.getItem('token');
    await postService.addPost(newPost, token);
    alert('Post added successfully!');
    clearForm();
    router.push('/board/1');
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

<template>
  <div class="grid justify-content-center">
    <div class="col-12 md:col-10">
      <div>
        <h2><strong>새 글 작성</strong></h2>
        <form @submit.prevent="addPost">
          <div class="field">
            <label for="title">제목</label>
            <InputText v-model="title" id="title" required autofocus />
          </div>
          <div class="field">
            <label for="body">본문</label>
            <Textarea v-model="content" id="body" required rows="12" cols="120" class="full" />
          </div>
<!-- 렌더링된 LaTeX 구문을 표시할 부분 -->
<div v-if="content">
    <h3>미리보기:</h3>
    <MathRenderer :content="content" />
  </div>
  <Divider/>
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