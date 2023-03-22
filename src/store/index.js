import { createStore } from 'vuex';
import { newsModule } from "./modules/newsModule";
import {mainModule} from "./modules/mainModule";

const store = createStore({
    modules:{
        newsModule,
        mainModule
    }
});

export default store;