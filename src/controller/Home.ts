import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import NewToilet from '@/components/NewToilet.vue';
import LooTypes from '@/components/LooTypes.vue';
@Component({
  components: {
    Header,
    NewToilet,
    LooTypes,
  },
})
export default class Home extends Vue {}
