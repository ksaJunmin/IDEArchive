<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const router = useRouter();

const token = localStorage.getItem('token');

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const logoUrl = computed(() => {
    return `/layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
    
};
const onSignInClick = () => {
    topbarMenuActive.value = false;
    router.push('/signin');
};
const onLoginClick = () => {
    topbarMenuActive.value = false;
    router.push('/login');
};

const onNotificationClick = () => {
    topbarMenuActive.value = false;
    router.push('/notification');
}

const onMypageClick = () => {
    topbarMenuActive.value = false;
    router.push('/mypage');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img :src="logoUrl" alt="logo" />
            <span>IDEArchive</span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <div v-if="!token">
                <button @click="onSignInClick()" class="p-link layout-topbar-button">
                    <i class="pi pi-user-plus"></i>
                    <span>회원가입</span>
                </button>
                
                <button @click="onLoginClick()" class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <span>로그인</span>
                </button>
            </div>
            <div v-else>
                <button @click="onNotificationClick()" class="p-link layout-topbar-button">
                    <OverlayBadge value="2">
                        <i class="pi pi-bell" style="font-size: 2rem" />
                    </OverlayBadge>
                    <span>알림</span>
                </button>
                <button @click="onMypageClick()" class="p-link layout-topbar-button">
                    <i class="pi pi-user"></i>
                    <span>마이페이지</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
