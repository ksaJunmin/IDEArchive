
<script setup>
import { ref, onMounted } from 'vue';
import AppConfig from '@/layout/AppConfig.vue';
import { useRouter } from 'vue-router';
import { PostService } from '@/service/PostService.js';

const router = useRouter();
const dataviewValue = ref(null);
const layout = ref('list');
const sortOrder = ref(-1);
const sortField = ref('date');
const sortOptions = ref([
  { label: '최신순', value: '!date' },
  { label: '오래된 순', value: 'date' },
  { label: '추천 높은 순', value: '!like' },
  { label: '추천 낮은 순', value: 'like' }
]);

const sortSubject = ref([
  { label: '전체', value: '전체'},
  { label: '수학', value: '수학' },
  { label: '화학', value: '화학' },
  { label: '정보', value: '정보' },
  { label: '생물', value: '생물' },
  { label: '물리', value: '물리' },
  { label: '지구과학', value: '지구과학' },
  { label: '인문', value: '인문' },
  { label: '기타', value: '기타' },
]);

const postService = new PostService();

onMounted(() => {
  postService.getPosts().then((data) => {
    dataviewValue.value = data;
  });
});

const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};
 
const onSortSubject = (event) => {
  const selectedSubject = event.value.value;

  postService.getPosts().then((data) => {
    if (selectedSubject === '전체') {
      dataviewValue.value = data;
    } else {
      dataviewValue.value = data.filter(post => post.category === selectedSubject);
    }
  });
};

const goToPost = (id) => {
  router.push('/post/' + id);
};

const goToAddPost = () => {
  router.push('/addpost');
};
const goToLatexPost = () => {
  router.push('/latexpost');
};
</script>

<template>
  <h3>해줘요 게시판</h3>

  <div class="grid">
    <div class="col-12">
      <div class="card">
        <Toolbar class="mb-4">
          <template v-slot:start>
            <div class="my-2">
              <Button label="글쓰기" icon="pi pi-plus" class="mr-2" severity="success" @click="goToAddPost" />
              <Button label="수식 쓰기" icon="pi pi-plus" class="mr-2" severity="success" @click="goToLatexPost" />
            </div>
          </template>
        </Toolbar>
        <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
          <template #header>
            <div class="grid grid-nogutter">
              <div class="col-6 text-left">
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="최신순" @change="onSortChange($event)" />
                <Dropdown v-model="selectedSubject" :options="sortSubject" optionLabel="label" placeholder="전체" @change="onSortSubject($event)" />
              </div>
              <div class="col-6 text-right">
                <DataViewLayoutOptions v-model="layout" />
              </div>
            </div>
          </template>
          <template #list="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="item._id" class="col-12">
                <div class="flex flex-column p-4 gap-3 cursor-pointer" :class="{ 'border-top-1 surface-border': index !== 0 }" @click="goToPost(item._id)">
                  <div class="flex flex-column justify-content-between flex-1">
                    <div class="flex flex-row justify-content-between align-items-start gap-2">
                      <div class="min-w-0">
                        <div class="text-lg font-medium text-900 mt-2 ellipsis">{{ item.title }}</div>
                        <div class="font-medium text-secondary text-sm ellipsis">{{ item.content }}</div>
                      </div>
                      <div class="surface-100 p-1" style="border-radius: 30px">
                        <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                          <div class="text-900 font-medium text-sm">{{ item.like }}</div>
                          <i class="pi pi-thumbs-up"></i>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row justify-content-between align-items-start mt-4">
                      <div class="text-sm text-gray-500">{{ new Date(item.date).toLocaleString() }}</div>
                      <div v-if="item.author">{{ item.author.schoolID }} {{ item.author.name }}</div>
                      <div v-else> 옛날 글 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>

          <template #grid="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="_id" class="col-12 sm:col-6 md:col-4 p-2">
                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer" @click="goToPost(item._id)">
                  <div>
                    <div class="flex flex-row justify-content-between align-items-start gap-2">
                      <div class="min-w-0">
                        <div class="text-lg font-medium text-900 mt-2 ellipsis">{{ item.title }}</div>
                        <div class="font-medium text-secondary text-sm ellipsis">{{ item.content }}</div>
                      </div>
                      <div>
                        <div class="surface-100 p-1" style="border-radius: 30px">
                          <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                            <div class="text-900 font-medium text-sm">{{ item.like }}</div>
                            <i class="pi pi-thumbs-up"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row justify-content-between align-items-start mt-4">
                      <div class="text-sm text-gray-500">{{ new Date(item.date).toLocaleString() }}</div>
                      <div v-if="item.author">{{ item.author.schoolID }} {{ item.author.name }}</div>
                      <div v-else> 옛날 글 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>
  <AppConfig simple />
</template>

<style>
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>