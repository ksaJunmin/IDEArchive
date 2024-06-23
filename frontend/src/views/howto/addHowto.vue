<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { PostService } from '@/service/PostService.js';
import MathRenderer from '@/views/howto/MathRenderer.vue';

const postService = new PostService();
const router = useRouter();

const title = ref('');
const content1 = ref('');
const content2 = ref('');
const selectedCategory = ref('');
const categories = ['수학', '정보', '물리', '화학', '생물','지구과학','인문','기타'];
const file = ref('');

const onFileChange = (e) => {
  if (e.target.files) {
    file.value = e.target.files[0];
  }
};

const addPost = async () => {
  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('content1', content1.value);
  formData.append('content2', content2.value);
  formData.append('category', selectedCategory.value);
  formData.append('file', file.value);

  if (document.getElementById('fileInput').files[0]) {
    const filename = document.getElementById('fileInput').files[0].name;
    console.log(filename);

    formData.append('filename', filename);
  }

  try {
    const token = localStorage.getItem('token');
    await postService.addPost(formData, token);
    alert('Post added successfully!');
    clearForm();
    router.push('/howto');
  } catch (error) {
    console.error(error);
    alert('Failed to add post');
  }
};

const clearForm = () => {
  title.value = '';
  content1.value = '';
  content2.value = '';
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
            <Textarea v-model="content1" id="content1" required rows="12" cols="120" class="full" />
          </div>

          <div class="field">
            <label for="body">수식(LaTeX)</label>
            <Textarea v-model="content2" id="content2" rows="12" cols="120" class="full" />
          </div>

          <div v-if="content2">
            <h3>미리보기:</h3>
            <MathRenderer :content="content2" />
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
            <div>
              <input type="file" id="fileInput" @change="onFileChange"/>
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

}input[type=file]::file-selector-button {
  width: 100px;
  height: 30px;
  background: #fff;
  border: 1px solid rgb(77,77,77);
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #10b981;
  }
}

</style>
