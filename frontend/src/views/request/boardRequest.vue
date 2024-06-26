
<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { RequestService } from '@/service/RequestService.js';

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

const requestService = new RequestService();

onMounted(() => {
  requestService.getRequests().then((data) => {
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

const goToRequest = (requestId) => {
  router.push('/request/' + requestId);
};

const goToAddRequest = () => {
  router.push('/request/add');
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
              <Button label="글쓰기" icon="pi pi-plus" class="mr-2" severity="success" @click="goToAddRequest" />
              <!--<Button label="수식 쓰기" icon="pi pi-plus" class="mr-2" severity="success" @click="goToLatexPost" />-->
            </div>
          </template>
        </Toolbar>
        <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
          <template #header>
            <div class="grid grid-nogutter">
              <div class="col-6 text-left">
                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="최신순" @change="onSortChange($event)" />
              </div>
              <div class="col-6 text-right">
                <DataViewLayoutOptions v-model="layout" />
              </div>
            </div>
          </template>
          <template #list="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="item._id" class="col-12">
                <div class="flex flex-column p-4 gap-3 cursor-pointer" :class="{ 'border-top-1 surface-border': index !== 0 }" @click="goToRequest(item._id)">
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
</template>

<style>
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>