<script setup>
import { ref, onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';
import AppConfig from '@/layout/AppConfig.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const dataviewValue = ref(null);
const layout = ref('list');
const sortKey = ref(null);
const sortOrder = ref(null);
const sortField = ref(null);
const sortOptions = ref([
    { label: '최신순', value: '!id' },
    { label: '오래된 순', value: 'id' },
    { label: '추천 높은 순', value: '!rating' },
    { label: '추천 낮은 순', value: 'rating' }
]);

const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall2().then((data2) => (dataviewValue.value = data2, products.value = data2));
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

const goToPost = (id) => {
  router.push('/post/'+ id);
};


import { FilterMatchMode } from 'primevue/api';
import { onBeforeMount } from 'vue';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const products = ref(null);
const productDialog = ref(false);
const deleteProductDialog = ref(false);
const deleteProductsDialog = ref(false);
const product = ref({});
const selectedProducts = ref(null);
const dt = ref(null);
const filters = ref({});
const submitted = ref(false);



onBeforeMount(() => {
    initFilters();
});

const openNew = () => {
    product.value = {};
    submitted.value = false;
    productDialog.value = true;
};

const hideDialog = () => {
    productDialog.value = false;
    submitted.value = false;
};

const saveProduct = () => {
    submitted.value = true;
    if (product.value.name && product.value.name.trim()) {
        {
            product.value.id = createId();
            product.value.code = createId();
            product.value.rating = 0;
            product.value.time = "2초 전";
            products.value.push(product.value);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        }
        productDialog.value = false;
        product.value = {};
    }
};


const createId = () => {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};


const confirmDeleteSelected = () => {
    deleteProductsDialog.value = true;
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};


</script>


<template>
    <h3>도와줘요 게시판</h3>

    <div class="grid">
        <div class="col-12">
            <div class="card">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button label="글쓰기" icon="pi pi-plus" class="mr-2" severity="success" @click="openNew" />
                        </div>
                    </template>
                </Toolbar>
                <DataView :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
                    <template #header>
                        <div class="grid grid-nogutter">
                            <div class="col-6 text-left">
                                <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="추천 순 정렬" @change="onSortChange($event)" />
                            </div>
                            <div class="col-6 text-right">
                                <DataViewLayoutOptions v-model="layout" />
                            </div>
                        </div>
                    </template>
					<template #list="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                                <div class="flex flex-column p-4 gap-3 cursor-pointer" :class="{ 'border-top-1 surface-border': index !== 0 }" @click="goToPost(item.id)">
                                    <div class="flex flex-column justify-content-between flex-1">
                                        <div class="flex flex-row justify-content-between align-items-start gap-2">
                                            <div class="min-w-0">
                                                <div class="text-lg font-medium text-900 mt-2 ellipsis">{{ item.name }}</div>
                                                <div class="font-medium text-secondary text-sm ellipsis">{{ item.description }}</div>
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

                    <template #grid="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column cursor-pointer" @click="goToPost(item.id)">
                                    <div>
                                        <div class="flex flex-row justify-content-between align-items-start gap-2">
                                            <div class="min-w-0">                       
                                                <div class="text-lg font-medium text-900 mt-2 ellipsis">{{ item.name }}</div>
                                                <div class="font-medium text-secondary text-sm ellipsis">{{ item.description}}</div>
                                            </div>
                                            <div>
                                                <div class="surface-100 p-1" style="border-radius: 30px">
                                                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                        <div class="text-900 font-medium text-sm">{{ item.rating }}</div>
                                                        <i class="pi pi-thumbs-up"></i>
                                                    </div>
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
                <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" header="Product Details" :modal="true" class="p-fluid">
                    <img :src="'/demo/images/product/' + product.image" :alt="product.image" v-if="product.image" width="150" class="mt-0 mx-auto mb-5 block shadow-2" />
                    <div class="field">
                        <label for="name">제목</label>
                        <InputText id="name" v-model.trim="product.name" required="true" autofocus :invalid="submitted && !product.name" />
                        <small class="p-invalid" v-if="submitted && !product.name">제목을 입력하세요.</small>
                    </div>
                    <div class="field">
                        <label for="description">본문</label>
                        <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
                    </div>

                    <template #footer>
                        <Button label="취소" icon="pi pi-times" text="" @click="hideDialog" />
                        <Button label="저장" icon="pi pi-check" text="" @click="saveProduct" />
                    </template>
                </Dialog>
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