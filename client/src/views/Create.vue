<template>
  <PostForm :post="post" :submitForm="createPost"/>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {

  components: {
    PostForm
  },

  setup() {
    const ENDPOINT = "http://localhost:5000/posts";

    const router = useRouter()

    const post = reactive({
      title: "",
      content: "",
      creator: "",
    });

    async function createPost() {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          content: post.content,
          creator: post.creator,
        }),
      });

      const json = await response.json();
      router.push({
          name: 'Home'
      })
    }

    return {
        post,
        createPost
    }
  },
};
</script>

<style></style>
