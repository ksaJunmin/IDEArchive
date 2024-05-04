<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { ProductService } from '@/service/ProductService';

const dataviewValue = ref(null);
const dataviewValue2 = ref(null);
const layout = ref('grid');
const sortOrder = ref(null);
const sortOrder2 = ref(null);
const sortField = ref(null);
const sortField2 = ref(null);

const productService = new ProductService();

onMounted(() => {
    productService.getProductsSmall().then((data) => {
        const sortedDataRcmest = data.sort((a, b) => b.rating - a.rating);
        dataviewValue.value = sortedDataRcmest.slice(0, 3);
        const sortedDataLatest = data.sort((a, b) => b.id - a.id);
        dataviewValue2.value = sortedDataLatest.slice(0, 3);
    });
});
</script>

<template>
    <h3>Main Page</h3>

    <div class="grid">
        <div class="col-12">
            <div class="card">
                <DataView :value="dataviewValue" :layout="layout" :paginator="false" :rows="3" :sortOrder="sortOrder" :sortField="sortField">
                    <template #grid="slotProps">
                        <h5>추천순 상위 3개</h5>
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
                                    <div>
                                        <div class="flex flex-row justify-content-between align-items-start gap-2">
                                            <div class="flex-grow-1">
                                                <div class="text-lg font-medium text-900 mt-2 overflow-hidden whitespace-nowrap">
                                                    <div class="truncate">{{ item.name }}</div>
                                                </div>
                                                <span class="font-medium text-secondary text-sm">{{ item.description}}</span>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
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

    <div class="grid">
        <div class="col-12">
            <div class="card">
                <DataView :value="dataviewValue2" :layout="layout" :paginator="false" :rows="3" :sortOrder="sortOrder2" :sortField="sortField2">
                    <template #grid="slotProps">
                        <h5>최신순 상위 3개</h5>
                        <div class="grid grid-nogutter">
                            <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 p-2">
                                <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
                                    <div>
                                        <div class="flex flex-row justify-content-between align-items-start gap-2">
                                            <div>
                                                <div class="text-lg font-medium text-900 mt-2">{{ item.name }}</div>
                                                <span class="font-medium text-secondary text-sm">{{ item.description}}</span>
                                            </div>
                                            <div class="surface-100 p-1" style="border-radius: 30px">
                                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                                    <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
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
</template>

<style>
    .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>