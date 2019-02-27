<template>
  <v-app>
    <Toolbar />

    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex lg6>
            <HelloWorld lg3 v-for="folder in folders" :key="folder.title" v-bind:folder="folder" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Toolbar
  },
  data: () => ({
    folders: [
      {
        title: "Shopping",
        icon: "shopping_cart",
        items: [
          { title: 'Amazon' },
          { title: 'Hot UK Deals' },
          { title: 'Foot Locker' },
          { title: 'Adidas' },
          { title: 'End Clothing' }
        ]
      },
      {
        title: "Reddit",
        icon: "whatshot",
        items: [
          { title: '/r/programming' },
          { title: '/r/hiphopheads' },
          { title: '/r/streetwear' },
          { title: '/r/soccer' },
          { title: '/r/nba' }
        ]
      },
      {
        title: "News",
        icon: "chrome_reader_mode",
        items: [
          { title: 'BBC' },
          { title: 'Guardian' },
          { title: 'Highsnob' },
          { title: 'Hypebeast' }
        ]
      }
    ]
  })
}
</script>
