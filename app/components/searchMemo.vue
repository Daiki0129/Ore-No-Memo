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
    <v-text-field
        append-icon="mic"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo
        v-model="word"
      ></v-text-field>
      <div class="text-xs-center">
        <template v-for="(memo, i) in filteredMemos">
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
  data () {
    return {
      word: ''
    }
  },
  computed: {
    filteredMemos: function() {
      var checkList = [];
      for(var i in this.memos) {
        var memo = this.memos[i];
        if(memo.title.indexOf(this.word) !== -1) {
          checkList.push(memo);
        }
      }
    return checkList
    }
  },
  methods: {
  }
}

</script>
