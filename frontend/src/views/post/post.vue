<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { PostService } from '@/service/PostService';

const postService = new PostService();
const route = useRoute();

const postId = ref(route.params.postId);
const post = ref(null);

onMounted(async () => {
  try {
    const data = await postService.getPostById(postId.value);
    post.value = data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
});

watch(post, (newValue, oldValue) => {})
</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <div v-if="post">
                    <h2>{{ post.title }}</h2>
                    <div>
                        <div class="flex flex-row gap-2 mt-4 align-items-center">
                            <div class="text-gray-500">{{ post.date }}</div>
                            <div class="surface-100 p-1" style="border-radius: 30px">
                                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                    <div class="text-900 font-medium text-sm">{{ post.like }}</div>
                                    <i class="pi pi-thumbs-up"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div class="font-medium">{{ post.content }}</div>
                    <div>
                        <div class="flex flex-column mt-4 align-items-center justify-center">
                            <div class="flex gap-2">
                                <Button label="좋아요" icon="pi pi-thumbs-up"></Button>
                                <Button label="싫어요" icon="pi pi-thumbs-down" outlined></Button>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div class="text-gray-500">댓글 0</div>
                    <div class="flex gap-2">
                        <Textarea placeholder="댓글을 입력하세요" :autoResize="true" rows="1" cols="50" />
                        <Button label="입력" class="mr-10 mb-10"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
