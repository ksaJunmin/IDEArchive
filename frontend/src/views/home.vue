<script setup>
import { ref, onMounted } from 'vue';
import { PostService } from '@/service/PostService.js';
import { UserService } from '@/service/UserService.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const dataviewValue = ref(null);
const dataviewValue2 = ref(null);
const layout = ref('grid');
const sortOrder = ref(null);
const sortOrder2 = ref(null);
const sortField = ref(null);
const sortField2 = ref(null);

const postService = new PostService();
const userService = new UserService();



const user = ref(null);

postService.getPosts().then((data) => {
    // 데이터를 복사하여 정렬
    const sortedDataRcmest = [...data].sort((a, b) => b.like - a.like);
    dataviewValue.value = sortedDataRcmest.slice(0, 3);

    const sortedDataLatest = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    dataviewValue2.value = sortedDataLatest.slice(0, 3);
    /*Promise.all([postService.getpostsSmall1(), postService.getpostsSmall2()]).then(([data1, data2]) => {
      const data = [...data1, ...data2]
    });*/
});


const goToPost = (id) => {
  router.push('/howto/' + id);
};

const handlePoints = (value) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }
  userService
    .updatePoints(token, value)
    .then((updatedUser) => {
      user.value = updatedUser;
    })
    .catch((error) => {
      console.error('Error updating points:', error);
    });
};

onMounted(async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    router.push('/landing');
  };
});

</script>

<template>
  <!--<Button @click="handlePoints(100)"> submit </Button>-->

  <h3><strong>IDEArchive</strong>에 오신 걸 환영합니다!</h3>

  <div class="grid">
    <div class="col-12">
      <div class="card">
        <DataView :value="dataviewValue" :layout="layout" :paginator="false" :rows="3" :sortOrder="sortOrder" :sortField="sortField">
          <template #grid="slotProps">
            <h5>추천순 상위 3개</h5>
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer" @click="goToPost(item._id)">
                  <div>
                    <div class="flex flex-row justify-content-between align-items-start">
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
                      <div>{{ item.author.schoolID }} {{ item.author.name }}</div>
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

  <div class="grid">
    <div class="col-12">
      <div class="card">
        <DataView :value="dataviewValue2" :layout="layout" :paginator="false" :rows="3" :sortOrder="sortOrder2" :sortField="sortField2">
          <template #grid="slotProps">
            <h5>최신순 상위 3개</h5>
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer" @click="goToPost(item._id)">
                  <div>
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
                      <div>{{ item.author.schoolID }} {{ item.author.name }}</div>
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
</template>

<style>
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
