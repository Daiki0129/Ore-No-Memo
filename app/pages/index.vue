
<template>
  <v-layout>
    <PcNav/>
    <v-flex>
      <div class="text-xs-center">
        <CreateMemo
          v-if="step === 0"
          key="create"
          @create="sandMemo"
        />
      </div>
      <div class="text-xs-center">
        <SearchMemo
          v-if="step === 1"
          :memos="memos"
        />
      </div>
      <div class="text-xs-center">
        <ListMemo
          key="next"
          v-if="step === 2"
          :memos="memos"
        />
      </div>
    </v-flex>
    <SpNav
      @transition="pages"
    />
  </v-layout>
</template>

<script>
import firestore from '~/plugins/firestore'
// import functions from '~/plugins/functions'
import CreateMemo from '~/components/createMemo.vue'
import SearchMemo from '~/components/searchMemo.vue'
import ListMemo from '~/components/listMemo.vue'
import PcNav from '~/components/pcNav.vue'
import SpNav from '~/components/spNav.vue'


export default {
  components: {
    CreateMemo,
    SearchMemo,
    ListMemo,
    PcNav,
    SpNav
  },
  data() {
    return {
      step: 0,
      memos: [],
    }
  },
  async created() {
    await this.getMemo()
  },
  methods: {
    async pages(i){
      this.step = i.page
    },
    async sandMemo(memoData) {
      console.log(this.page)
      console.log(memoData)
      await firestore.createMemo(memoData)
      await this.getMemo()
    },
    async getMemo() {
      this.memos = []
      await firestore.getMemo()
      .then((result) => {
        result.forEach((value) => {
          this.memos.push(value)
        })
        console.log(this.memos)
      }).catch((err) => {
        console.log('error: ', err)
      })
    }
  }
}
</script>
