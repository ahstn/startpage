<template>
  <v-toolbar id="core-toolbar" flat prominent style="background: #eee;">
    <v-toolbar-title class="tertiary--text font-weight-light" >
      {{ title }}
      <v-btn class="default v-btn--simple" icon @click.stop="onClickBtn">
        <v-icon>arrow_drop_down</v-icon>
      </v-btn>
    </v-toolbar-title>

    <v-text-field
      flat
      solo
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>

    <v-spacer />

    <v-btn icon>
      <router-link v-ripple class="toolbar-items" to="/">
        <v-icon color="tertiary">dashboard</v-icon>
      </router-link>
    </v-btn>
    <v-btn icon>
      <router-link v-ripple class="toolbar-items" to="/user-profile">
        <v-icon color="tertiary">person</v-icon>
      </router-link>
    </v-btn>
  </v-toolbar>
</template>

<script>

export default {
  data: () => ({
    title: 'Google'
  })
}
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>
