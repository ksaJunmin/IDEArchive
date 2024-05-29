<script setup>

import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { RequestService } from '@/service/RequestService.js';
import MathRenderer from '@/views/howto/MathRenderer.vue';

const requestService = new RequestService();
const route = useRoute();
const router = useRouter();

const requestId = ref(route.params.requestId);
const request = ref(null);

const token = localStorage.getItem('token');

const handleLike = async () => {
  try {
    const updatedRequest = await requestService.updateLike(token, requestId.value);
    request.value = updatedRequest;
  } catch (error) {
    console.error('Error updating like:', error);
  }
};

const answers = ref([]);
const isLoggedIn = ref(false);

const user = ref(null);

const fetchAnswers = async () => {
  try {
    answers.value = await requestService.fetchAnswers(requestId.value);
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

const addComment = async () => {
  if (!newComment.value) return;

  try {
    await commentService.addComment(postId.value, newComment.value, token);
    newComment.value = '';
    await fetchComments();
  } catch (error) {
    console.error('Error adding comment:', error);
  }
};

const addAnswer = (id) => {
  router.push(`/request/${id}/letmedo`);
};

const chooseAnswer = async (id) => {
  await requestService.chooseAnswer(requestId.value, id);
}

onMounted(async () => {
  try {
    const data = await requestService.getRequestById(requestId.value);
    request.value = data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  try {
    await fetchAnswers();
    isLoggedIn.value = !!token;
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
});

</script>


<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <div v-if="request">
          <h2>{{ request.title }}</h2>
          <div>
            <div class="flex flex-row gap-2 mt-4 align-items-center">
              <div class="text-gray-500">{{ new Date(request.date).toLocaleString() }}</div>
              <div class="surface-100 p-1" style="border-radius: 30px">
                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                  <div class="text-900 font-medium text-sm">{{ request.like }}</div>
                  <i class="pi pi-thumbs-up"></i>
                </div>
              </div>
              <div v-if="request.author">{{ request.author.schoolID }} {{ request.author.name }} {{ request.points }} points</div>
              <div v-else> 옛날 글 </div>
            </div>
          </div>
          <Divider />
          <!-- 렌더링된 LaTeX 구문을 표시할 부분 -->
          <div v-if="request.islatex == 1"  class="font-medium">
            <MathRenderer :content="request.content" />
          </div>
          <div v-else class="font-medium text-xl">
            {{ request.content }}
          </div>
          <div>
            <div class="flex flex-column mt-4 align-items-center justify-center">
              <div class="flex gap-2">
                <Button :label="isLiked ? '좋아요 취소' : '좋아요'" icon="pi pi-thumbs-up" @click="handleLike"></Button>
              </div>
            </div>
          </div>
          <Divider />
          <div>
            <h3>답변</h3>
            <div class="grid">
              <div class="col-12">
                <div v-for="answer in answers" :key="answer._id">
                    
                  <div class="card">
                    <div v-if="request.chosenAnswer == answer._id">
                      채택되었습니다! <br/> --------------------------
                    </div>
                    <p>
                      <strong>{{ answer.author.name }}:</strong> {{ answer.content }}
                    </p>
                    <div v-if="!request.chosenAnswer">
                      <Button @click="chooseAnswer(answer._id)"> 채택하기 </Button>
                    </div>
                  </div>
                    <!--<small>{{ new Date(answer.date).toLocaleString() }}</small>-->
                  
                </div>
              </div>
            </div>

            <div v-if="isLoggedIn && !request.chosenAnswer">
              <Button @click="addAnswer(requestId)">답변 추가하기</Button>
            </div>
            <!--<div v-else>
              <p>로그인 후 답변을 작성할 수 있습니다.</p>
            </div>-->
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reply {
  margin-left: 20px;
  border-left: 1px solid #ccc;
  padding-left: 10px;
}
</style>