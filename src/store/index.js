import { createStore } from 'vuex';
import { eventsModule } from './modules/main/events'
import { newsModule } from './modules/main/news'
import { partnersModule } from './modules/main/partners'
import { mediaModule } from './modules/main/media'

const store = createStore({
    modules:{
        eventsModule,
        newsModule,
        partnersModule,
        mediaModule,
    }
});

export default store;