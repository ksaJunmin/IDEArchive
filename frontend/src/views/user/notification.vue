<script setup>
import { ref, onMounted} from 'vue';
import { NotificationService } from '@/service/NotificationService.js';
import { useRouter } from 'vue-router';

const notificationService = new NotificationService();
const router = useRouter();
const dataviewValue = ref(null);
const layout = ref('list');
const sortOrder = ref(-1);
const sortField = ref('date');

const token = localStorage.getItem('token');

onMounted(() => {
  notificationService.getNotifications(token).then((data) => {
    dataviewValue.value = data;
  });
});

const goToRequest = (requestId) => {
  router.push('/request/' + requestId);
};
</script>

<template>
  <h3>알림</h3>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <DataView v-if="dataviewValue" :value="dataviewValue" :layout="layout" :paginator="true" :rows="9" :sortOrder="sortOrder" :sortField="sortField">
          <template #list="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(item, index) in slotProps.items" :key="item._id" class="col-12">
                <div class="flex flex-column p-4 gap-3 cursor-pointer" :class="{ 'border-top-1 surface-border': index !== 0 }" @click="goToRequest(item.request._id)">
                  <div class="flex flex-column justify-content-between flex-1">
                    <div class="flex flex-row justify-content-between align-items-start gap-2">
                      <div class="flex items-center">
                        <div>채택됨!</div>
                        <Divider layout="vertical"/>
                        <div class="min-w-0">
                          <div class="text-lg font-medium text-900 mt-2 ellipsis">{{ item.request.title }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
        <div v-else>
          알림 없음
        </div>
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