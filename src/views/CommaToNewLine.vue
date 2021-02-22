<template>
  <v-container>
    <v-row>
      <v-btn @click="commaToRn">, > \r\n</v-btn>
      <v-btn @click="rntoComma">\r\n > ,</v-btn>
      <v-checkbox
        v-model="checkbox"
        :label="`add single quotation marks: ${checkbox.toString()}`"
      ></v-checkbox>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-textarea
          label=","
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="stringComma"
        ></v-textarea>
      </v-col>
      <v-col cols="6">
        <v-textarea
          label="\r\n"
          auto-grow
          outlined
          rows="25"
          row-height="15"
          v-model="stringRn"
        ></v-textarea>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="error"
    >
      {{ snackBarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="#fff"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component({
  components: {}
})
export default class CommaToNewLine extends Vue {
  stringComma = ''
  stringRn = ''
  checkbox = false
  snackBarText = ''
  timeout = 3000
  snackbar = false

  commaToRn (): void {
    if (this.stringComma === '') {
      this.snackBarText = 'string comma is empty'
      this.snackbar = true
      return
    }
    Axios.get('/comma-to-newline',
      {
        params: { foo: this.stringComma }
      }).then(
      response => {
        this.stringRn = response.data
      }
    )
  }

  rntoComma (): void {
    if (this.stringRn === '') {
      this.snackBarText = 'string rn is empty'
      this.snackbar = true
      return
    }
    Axios.get('/newline-to-comma',
      {
        params: { bar: this.stringRn, addsinglequotationmarks: this.checkbox }
      }).then(
      response => {
        this.stringComma = response.data
      }
    )
  }
}
</script>
