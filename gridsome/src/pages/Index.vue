<template>
  <div>
    <div v-for="edge in $page.allBlocks.edges" :key="edge.node.title">
      <g-image v-bind:src="edge.node.image" />
      <h1 v-html="edge.node.name" />
      <div v-html="edge.node.location" />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: ""
  }
};
</script>

<page-query>
  query {
    allBlocks {
      edges {
        node{
          image
          name
          location
        }
      }
    }
  }
</page-query>

<style>
img {
  width: 25vw;
}
</style>
