<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex md4>
        <v-card class="mx-auto elevation-3">
          <v-card-title>
            <v-icon left>{{ folder.icon }}</v-icon>
            <h4 class="text-uppercase">{{ folder.title }}</h4>
            <v-spacer />
            <!-- <v-btn class="default v-btn--simple" icon> -->
              <v-icon>edit</v-icon>
            <!-- </v-btn> -->
          </v-card-title>

          <v-list dense class="px-2 pt-0">
            <v-list-tile v-for="item in folder.items" :key="item.title">
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
  props: {
    folder: Object
  }
}
</script>

<style>

</style>
