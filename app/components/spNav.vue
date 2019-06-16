<template>
  <v-card>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      :app="true"
      :fixed="true"
      color="light"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
        @click="pages(1)"
      >
        <span>Search</span>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
        @click="pages(2)"
      >
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
        @click="pages(0)"
      >
        <span>Create</span>
        <v-icon>edit</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'recent'
    }
  },
  methods: {
    pages(page){
      this.$emit("transition", {page: page})
    }
  }
}
</script>