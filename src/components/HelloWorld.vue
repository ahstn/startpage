<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 sm8 md4>
        <v-card class="mx-auto">
          <v-card-title>
            <v-icon left>shopping_cart</v-icon>
            <h4 class="text-uppercase">Shopping</h4>
            <v-spacer />
            <!-- <v-btn class="default v-btn--simple" icon> -->
              <v-icon>edit</v-icon>
            <!-- </v-btn> -->
          </v-card-title>

          <v-list dense class="px-2 pt-0">
            <v-list-tile v-for="item in items" :key="item.title">
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Amazon' },
      { title: 'Hot UK Deals' },
      { title: 'Foot Locker' },
      { title: 'Adidas' },
      { title: 'End Clothing' }
    ]
  })
}
</script>

<style>

</style>
