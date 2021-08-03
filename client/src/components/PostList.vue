<template>
  <div class="container">
    <div class="card my-5" v-for="post in posts" :key="post._id">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ post.title }}</p>
          </div>
        </div>

        <div class="content">
          {{ post.content }}
          <hr />
          <br />
          <strong>Creator: {{ post.creator }}</strong>
          <br />
          <time datetime="2016-1-1">{{ post.createdAt }}</time>
        </div>
      </div>

      <div class="card">
        <footer class="card-footer">
          <button
            class="card-footer-item button is-warning"
            @click="editPost(post._id)"
          >
            Edit
          </button>
          <button
            @click="removePost(post._id)"
            class="card-footer-item button is-danger"
          >
            Delete
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const posts = ref([]);
    const ENDPOINT = "http://localhost:5000/posts";

    onMounted(() => {
      getPosts();
    });

    async function getPosts() {
      const response = await fetch(ENDPOINT);
      const json = await response.json();
      posts.value = json;
    }

    async function removePost(_id) {
      if (confirm("Postu silmek istediginize emin misiniz")) {
        const response = await fetch(`${ENDPOINT}/${_id}`, {
          method: "DELETE",
        });
        getPosts();
      } else {
      }
    }

    async function editPost(_id) {
      router.push({
        name: "Update",
        params: {
          id: _id,
        },
      });
    }

    return {
      posts,
      removePost,
      editPost,
    };
  },
};
</script>

<style lang="sass" scoped></style>
