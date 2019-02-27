<template>
  <v-flex class="pa-2 bookmark">
    <v-card class="mx-auto elevation-3">
      <v-card-title>
        <v-icon left>chrome_reader_mode</v-icon>
        <h4 class="text-uppercase">News</h4>
        <v-spacer />
        <!-- <v-btn class="default v-btn--simple" icon> -->
          <v-icon>edit</v-icon>
        <!-- </v-btn> -->
      </v-card-title>

      <v-tabs
        v-model="active"
      >
        <v-tab
          v-for="n in 3"
          :key="n"
          ripple
        >
          Item {{ n }}

        </v-tab>
        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-card flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    active: null,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  }),
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>

<style>

</style>
