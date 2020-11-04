<template>
  <v-container>
    <v-row>
      <v-btn @click="exec">Exec</v-btn>
      <v-btn @click="rntoc">\r\n > ,</v-btn>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-textarea
          label=","
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="foo"
        ></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea
          label="\r\n"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="bar"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component({
  components: {}
})
export default class CommaToNewLine extends Vue {
  foo = ''
  bar = ''
  exec (): void {
    console.log('exec')
    Axios.get('/comma-to-newline',
      {
        params: { foo: this.foo }
      }).then(
      response => {
        this.bar = response.data
      }
    )
  }

  rntoc (): void {
    console.log('rntoc')
    Axios.get('/newline-to-comma',
      {
        params: { bar: this.bar }
      }).then(
      response => {
        this.foo = response.data
      }
    )
  }
}
</script>
