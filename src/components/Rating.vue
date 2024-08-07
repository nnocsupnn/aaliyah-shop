<template>
    <div class="ratings">
      <div>
        <span v-for="i in 5" class="fa fa-star" v-bind:class = "(rate >= i) ? 'checked' : '' "/>
      </div>
      <div>
        <i class="ratings-count">&nbsp;&nbsp;{{ ratings }} Ratings</i>
      </div>
    </div>
</template>

<script lang="ts">
    export default {
      name: 'Star',
      props: {
        rate: {
          required: true
        },
        ratings: {
          required: true
        }
      }
    }
</script>

<style>
.checked {
  color: orange;
}

.ratings {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  align-items: center;
}
</style>