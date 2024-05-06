<script setup>
/*misc import*/
import { ref, onMounted, onBeforeUnmount } from 'vue';

const value = ref(0);
let interval = null;

const startProgress = () => {
    interval = setInterval(() => {
        let newValue = value.value + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
            newValue = 100;
        }
        value.value = newValue;
    }, 2000);
};
const endProgress = () => {
    clearInterval(interval);
    interval = null;
};

onMounted(() => {
    startProgress();
});

onBeforeUnmount(() => {
    endProgress();
});
</script>

<template>
    <div class="grid">
        <div class="col-12 md:col-3">
            <Card>
                <template v-slot:title>
                    <div class="flex align-items-center justify-content-between mb-0">
                        <h5><strong>나의 프로필</strong></h5>
                        <Button icon="pi pi-plus" class="p-button-text" @click="toggle" />
                    </div>
                    <Menu id="config_menu" ref="menuRef" :model="cardMenu" :popup="true" />
                </template>

                <template v-slot:content>
                    <img src="/src/views/board/mypageimage/profile.png" alt="Image" style="max-width: 100%; height: auto" />
                </template>
            </Card>
        </div>
        <div class="col-12 md:col-9">
            <div class="card p-fluid">
                <h5>기본정보</h5>
                <div class="field">
                    <label for="name1" class="large-font">이름: <strong>홍정우</strong></label>
                </div>
                <div class="field">
                    <label for="email1" class="large-font">학번: <strong>23-129</strong></label>
                </div>
                <div class="field">
                    <label for="age1" class="large-font">이메일: <strong>23-129@ksa.hs.kr</strong></label>
                </div>
                
            </div>
        </div>
    </div>
    <div class="col-12 md:col-12">
    <div class="card p-fluid">
    <div class = "stats">
        <div>내가 작성한 글의 수: <strong>10</strong></div>
        <div>내가 의뢰한 수: <strong>5</strong></div>
    </div>
    </div>
    </div>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>나의 포인트: <strong>500</strong> point</h5>
                <div class="grid">
                    <!----
                  <div class="col">
                      <ProgressBar :value="value"></ProgressBar>
                  </div>
                -->
                    <div class="col">
                        <ProgressBar :value="50" :showValue="false"></ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
    text-align: center;
}

.large-font {
    font-size: 22px; /* 원하는 크기로 조정 */
}
.stats{
    font-size: 20px;
}
</style>
