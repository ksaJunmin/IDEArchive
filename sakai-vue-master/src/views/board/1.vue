<script setup>
import { ref } from 'vue';

import { onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';
import AppConfig from '@/layout/AppConfig.vue';

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
    productService.getProductsSmall().then((data) => (dataviewValue.value = data));
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
</script>


<template>
    <h3>Board 1-1</h3>

    <div class="grid">
        <div class="col-12">
            <div class="card">
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
                                <div class="flex flex-column p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                                    <div class="flex flex-column justify-content-between flex-1 gap-4">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                    <template #grid="slotProps">
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
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
                                        <div class="flex flex-column gap-4 mt-4">
                                            <div class="flex gap-2">
                                                <Button icon="pi pi-thumbs-up"></Button>
                                                <Button icon="pi pi-thumbs-down" outlined></Button>
                                            </div>
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