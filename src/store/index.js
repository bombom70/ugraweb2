import { createStore } from 'vuex';
import { newsModule } from "@/store/modules/newsModule";

const store = createStore({
    modules:{
        newsModule
    }
});

export default store;