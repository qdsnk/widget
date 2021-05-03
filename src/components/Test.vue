<template>
    <div>
        <form @submit="postData" method="post">
        <input type="text" name="author" placeholder="author" v-model="posts.author">
        <input type="text" name="title" placeholder="title" v-model="posts.title">
        <button type="submit">Post</button>
        </form>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: "Test",
  data() {
    return {
      posts: {
        title:null,
        author:null
      }
    }
  },
  methods: {
    postData(e) {
        // this.axios.post("")
      this.axios.post("http://localhost:3000/posts/",this.posts)
      .then((result)=>{
        console.warn(result)
      })
      e.preventDefault();
    }
  },
}
</script>

<style scoped>
    .testFrom {
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>