<template>
  <div class="container">
    <br /><br />
    <form @submit.prevent="submitForm">
      <div class="field mx-6">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="post.title" class="input" type="text" placeholder="Title" />
        </div>
      </div>

      <div class="field mx-6">
        <label class="label">Post Content</label>
        <div class="control">
          <textarea v-model="post.content" class="textarea" placeholder="...."></textarea>
        </div>
      </div>

      <div class="field mx-6">
        <label class="label">Creator</label>
        <div class="control">
          <input class="input" v-model="post.creator" type="text" placeholder="Creator" />
        </div>
      </div>

      <div class="field is-grouped mx-6">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ['post', 'submitForm'],
};
</script>

<style></style>
