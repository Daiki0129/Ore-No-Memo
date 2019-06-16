<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="title" :counter="10" :rules="titleRules" label="Title" required></v-text-field>

          <v-text-field v-model="memo" :counter="300" :rules="memoRules" label="Memo" required></v-text-field>
          <v-btn
            block
            color="primary"
            dark
            @click="createMemo()"
          >
            Create Memo
          </v-btn>
        </v-form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      title: '',
      memo: '',
      titleRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      memoRules: [
        v => !!v || 'Memo is required',
        v => v.length <= 300 || 'Memo must be less than 10 characters'
      ]
    }
  },
  methods: {
    createMemo(){
      this.$emit("create", { title: this.title, memo: this.memo})
    }
  }
}
</script>
