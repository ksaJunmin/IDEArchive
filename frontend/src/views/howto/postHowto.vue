<script setup>

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { PostService } from '@/service/PostService.js';
import { CommentService } from '@/service/CommentService.js';
import MathRenderer from '@/views/howto/MathRenderer.vue';

const postService = new PostService();
const commentService = new CommentService();
const route = useRoute();

const postId = ref(route.params.postId);
const post = ref(null);

const token = localStorage.getItem('token');

const handleLike = async () => {
  try {
    const updatedPost = await postService.updateLike(token, postId.value);
    post.value = updatedPost;
  } catch (error) {
    console.error('Error updating like:', error);
  }
};

const comments = ref([]);
const newComment = ref('');
const replyContent = ref({});
const isLoggedIn = ref(false);


const fetchComments = async () => {
  try {
    comments.value = await commentService.fetchComments(postId.value);
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

const addReply = async (commentId) => {
  if (!replyContent.value[commentId]) return;

  try {
    await commentService.addReply(commentId, replyContent.value[commentId], token);
    replyContent.value[commentId] = '';
    await fetchComments();
  } catch (error) {
    console.error('Error adding reply:', error);
  }
};

onMounted(async () => {
  try {
    const data = await postService.getPostById(postId.value);
    post.value = data;
  } catch (error) {
    console.error('Error fetching post:', error);
  }

  try {
    await fetchComments();
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
        <div v-if="post">
          <h2>{{ post.title }}</h2>
          <div>
            <div class="flex flex-row gap-2 mt-4 align-items-center">
              <div class="text-gray-500">{{ new Date(post.date).toLocaleString() }}</div>
              <div class="surface-100 p-1" style="border-radius: 30px">
                <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                  <div class="text-900 font-medium text-sm">{{ post.like }}</div>
                  <i class="pi pi-thumbs-up"></i>
                </div>
              </div>
              
            </div>
            <div>{{ post.author.schoolID }} {{ post.author.name }}</div>
          </div>
          <Divider />
          <!-- 렌더링된 LaTeX 구문을 표시할 부분 -->
          <div v-if="post.islatex == 1"  class="font-medium">
            <MathRenderer :content="post.content" />
          </div>
          <div v-else  class="font-medium">
            {{ post.content }}
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
            <h3>댓글</h3>
            <div>
              <div v-for="comment in comments" :key="comment._id">
                <div v-if="!comment.isReply">
                  <p>
                    <strong>{{ comment.author.name }}:</strong> {{ comment.content }}
                  </p>
                  <small>{{ new Date(comment.date).toLocaleString() }}</small>

                  <div v-for="reply in comment.replies" :key="reply._id" class="reply">
                    <p><strong>{{ reply.author.name }}:</strong> {{ reply.content }}</p>
                    <small>{{ new Date(reply.date).toLocaleString() }}</small>
                  </div>
                  
                  <div v-if="isLoggedIn">
                    <Textarea v-model="replyContent[comment._id]" placeholder="답글을 입력하세요"></Textarea>
                    <Button @click="addReply(comment._id)">답글 추가</Button>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="isLoggedIn">
              <Textarea v-model="newComment" placeholder="댓글을 입력하세요"></Textarea>
              <Button @click="addComment">댓글 추가</Button>
            </div>
            <div v-else>
              <p>로그인 후 댓글을 작성할 수 있습니다.</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  </div>
    <!---
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
                                <Button label="좋아요" icon="pi pi-thumbs-up" @click="handleLike(1)"></Button>
                                <Button label="싫어요" icon="pi pi-thumbs-down" outlined @click="handleLike(-1)"></Button>
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
-->
</template>

<style scoped>
.reply {
  margin-left: 20px;
  border-left: 1px solid #ccc;
  padding-left: 10px;
}
</style>