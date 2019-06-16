<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-xs-center">
        <template v-for="(memo, i) in memos">
        <v-card :key="i">
          <v-card-title primary-title>
              <h3 class="headline mb-0">{{memo.title}}</h3>
          </v-card-title>
          <v-card-text>
            <p>{{memo.memo}}</p>
          </v-card-text>
        </v-card>
        </template>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    memos: Array
  },
}
</script>
