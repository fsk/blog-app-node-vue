<template>
  <PostForm :post="post" :submitForm="updatePost"/>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  components: {
    PostForm
  },

  setup() {
    const router = useRouter();
    const route = useRoute();

    const ENDPOINT = "http://localhost:5000/posts";

    const post = ref({
      title: "",
      content: "",
      creator: "",
    });

    onMounted(() => {
      //console.log("OnMounted");
      getPost();
    });

    async function getPost() {
      const { id } = route.params;
      const res = await fetch(`${ENDPOINT}/${id}`);
      const json = await res.json();
      console.log(json);
      post.value = json;
    }


    async function updatePost() {
        const {id} = route.params;
        const res = await fetch(`${ENDPOINT}/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify({
                title: post.value.title,
                content: post.value.content,
                creator: post.value.creator
            })
        })

        const json = await res.json();
        router.push({
            name: 'Home'
        })
    }

    return {
      post,
      updatePost
    };
  },
};
</script>

<style></style>
