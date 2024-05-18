<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const axiosInstance = inject('http');

const router = useRouter();
const dataviewValue = ref(null);
const dataviewValue2 = ref(null);
const layout = ref('grid');
const sortOrder = ref(null);
const sortOrder2 = ref(null);
const sortField = ref(null);
const sortField2 = ref(null);

const productService = new ProductService();

onMounted(() => {
    Promise.all([productService.getProductsSmall1(), productService.getProductsSmall2()]).then(([data1, data2]) => {
        const data = [...data1, ...data2]
        const sortedDataRcmest = data.sort((a, b) => b.rating - a.rating);
        dataviewValue.value = sortedDataRcmest.slice(0, 3);
        const sortedDataLatest = data.sort((a, b) => b.id - a.id);
        dataviewValue2.value = sortedDataLatest.slice(0, 3);
    });
});

const goToPost = (id) => {
  router.push('/post/'+ id);
};

const responseMessage = ref('');
const foo = () => {
    axiosInstance.get('/users')
        .then(response => {
            responseMessage.value = response.data;
        })
};

</script>

<template>
    <div class="home">
    <form action="/users" method="POST">
      <input type="text" name="id">
      <input type="text" name="password">
      <input type="submit">
    </form>
  </div>
    <div>
    <Button @click="foo"> submit </Button>
    <div class="home">
        <form action="/users" method="POST">
            <input type="text" name="id">
            <input type="text" name="password">
            <input type="submit">
        </form>
    </div>
    <p v-if="responseMessage">{{ responseMessage }}</p>
    <p v-else>No users available.</p>
    </div>
    <h3><strong>IDEArchive</strong>에 오신 걸 환영합니다!</h3>
    

    <div class="grid">
        <div class="col-12">
            <div class="card">
                <DataView :value="dataviewValue" :layout="layout" :paginator="false" :rows="3" :sortOrder="sortOrder" :sortField="sortField">
                    <template #grid="slotProps">
                        <h5>추천순 상위 3개</h5>
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer" @click="goToPost(item.id)">
                                    <div>
                                        <div class="flex flex-row justify-content-between align-items-start">
                                            <div class="min-w-0">
                                                <div class="text-lg font-medium text-900 mt-2 ellipsis" >{{ item.name }}</div>
                                                <div class="font-medium text-secondary text-sm ellipsis">{{ item.description}}</div>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <div class="text-900 font-medium text-sm">{{ item.rating }}</div>
                                                    <i class="pi pi-thumbs-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-column gap-2 mt-4">
                                            <div class="text-sm text-gray-500">{{ item.time }}</div>
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
                                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer" @click="goToPost(item.id)">
                                    <div>
                                        <div class="flex flex-row justify-content-between align-items-start gap-2">
                                            <div class="min-w-0">                       
                                                <div class="text-lg font-medium text-900 mt-2 ellipsis">{{ item.name }}</div>
                                                <div class="font-medium text-secondary text-sm ellipsis">{{ item.description}}</div>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <div class="text-900 font-medium text-sm">{{ item.rating }}</div>
                                                    <i class="pi pi-thumbs-up"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-column gap-2 mt-4">
                                            <div class="text-sm text-gray-500">{{ item.time }}</div>
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