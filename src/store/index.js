import { createStore } from 'vuex';
import { eventsModule } from './modules/main/events'
import { newsModule } from './modules/main/news'
import { partnersModule } from './modules/main/partners'
import { mediaModule } from './modules/main/media'
import {sliderModule} from "./modules/main/slider";

const store = createStore({
    modules:{
        eventsModule,
        newsModule,
        partnersModule,
        mediaModule,
        sliderModule
    }
});

export default store;