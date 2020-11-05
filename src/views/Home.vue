<template>
  <div class="home">
    <router-link :to="{ path: 'comma-to-newline'}">
      comma && newline
    </router-link>
    <router-link :to="{ path: 'compare'}">
      compare
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
}
</script>
