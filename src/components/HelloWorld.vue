<template>
  <v-container>
    <v-row>
      <v-btn @click="compare" >Compare</v-btn>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-textarea
          label="List A"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="listA"
        ></v-textarea>
      </v-col>
      <v-col cols="2">
        <v-textarea
          label="List B"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="listB"
        ></v-textarea>
      </v-col>
      <v-col cols="2">
        <v-textarea
          label="Intersection"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="intersection"
        ></v-textarea>
      </v-col>
      <v-col cols="3">
        <v-textarea
          label="Only In A"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="onlyInA"
        ></v-textarea>
      </v-col>
      <v-col cols="3">
        <v-textarea
          label="Only In B"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="onlyInB"
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
  onlyInA = ''
  onlyInB = ''
  intersection = ''
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
        let tmp = ''
        for (const entry of response.data.OnlyInA) {
          tmp = tmp + entry + '\n'
        }
        this.onlyInA = tmp
        this.onlyInB = this.arrayToString(response.data.OnlyInB)
        this.intersection = this.arrayToString(response.data.Intersection)
      }
    )
  }

  arrayToString (params: string[]): string {
    let tmp = ''
    for (const entry of params) {
      tmp = tmp + entry + '\n'
    }
    return tmp
  }

  mounted () {
    this.env = process.env.NODE_ENV
    console.log('mounted: ' + process.env.NODE_ENV)
  }
}
</script>
