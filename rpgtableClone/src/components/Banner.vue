<template>
  <div class="Banner">
    <h2>Como podemos ajudar?</h2>
  </div>
</template>


<script>

export default {
    name:"Banner"
  
}
</script>

<style scoped>
.Banner{
  background-image: url(/public/imgs/caveiraHelp.png);
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: start;
  color: white;
  height: 40vh;
  background-repeat: no-repeat;
  width: 100vw;
  
}
.Banner h2 {
  padding-top: 4%;
  font-size: 47px;
  letter-spacing: 2px;
}

</style>
