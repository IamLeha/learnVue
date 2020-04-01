<template>
  <div id="app">
  <div>
    <h1>{{ msg }} </h1>
    <new-owner></new-owner>
  </div>
  </div>
</template>

<script>
import Owner from './ownerInfo';

export default {

  data() {
    return {
      msg: 'Hello it is a first vue application'
    }
  },
  components: {
    newOwner: Owner
  }
}
</script>

<style>

</style>
