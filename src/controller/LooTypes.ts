import { Component, Vue } from 'vue-property-decorator';
import Amenities from '@/components/Amenities.vue';
import Constants from '../common/Constants';
import { AmenitiesModel } from '@/model/AmenitiesModel';

@Component({
    components: {
        Amenities,
    },
})
export default class LooTypes extends Vue {
    private amenties: AmenitiesModel[] = [];
    private errorMessage: string = '';
    private constants = Constants;
    private created() {
      this.getAmenitiesList();
    }

    private async getAmenitiesList() {
      try {
        await this.$store.dispatch('AmenitiesListModule/getAmenitiesList');
        this.amenties = this.$store.state.AmenitiesListModule.amenitiesList;
      } catch (err) {
        return this.errorMessage = Constants.ERROR_MESSAGE;
      }
    }
}
