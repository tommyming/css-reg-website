<template>
        <div id = "eventMenu">
            <div class = "event" v-for="event in events">
                <a :href = "event.link" target = "_blank"><img :alt = "event.name" :src = "event.imgSrc"/></a>
            </div>   
        </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            events: []
        }
    },
     mounted() {
         var self = this;
        axios.get('/events')
            .then(function(res){
                console.log('Data', res.data);
                self.events = res.data;
            })
            .catch(function(err){console.log('Error', err);});
  }
}
</script>
