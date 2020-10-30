<template>
  <v-container>
    <v-row>
      <v-btn @click="compare" >Compare</v-btn>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-textarea
          label="A"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="listA"
        ></v-textarea>
      </v-col>
      <v-col cols="4">
        <v-textarea
          label="B"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="listB"
        ></v-textarea>
      </v-col>
      <v-col cols="4">
        <v-textarea
          label="One row"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="listC"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component({
  components: { }
})
export default class HelloWorld extends Vue {
  listA = ''
  listB = ''
  listC = ''
  drawer = false
  env = ''
  compare (): void {
    console.log('comp')
    Axios.post('/compare',
      {
        lista: this.listA,
        listb: this.listB
      }).then(
      response => {
        console.log(response.data)
      }
    )
  }

  mounted () {
    this.env = process.env.NODE_ENV
    console.log('mounted: ' + process.env.NODE_ENV)
  }
}
</script>
