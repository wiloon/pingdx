<template>
  <v-container>
    <v-row>
      <v-btn @click="encode">encode</v-btn>
      <v-btn @click="decode">decode</v-btn>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-textarea
          label="string"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="foo"
        ></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea
          label="base64.RawURLEncoding"
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
  checkbox = false

  encode (): void {
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

  decode (): void {
    Axios.get('/base64-decode',
      {
        params: { str: this.bar }
      }).then(
      response => {
        this.foo = response.data.decoded
      }
    )
  }
}
</script>
