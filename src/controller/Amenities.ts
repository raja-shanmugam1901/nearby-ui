import { Component, Vue } from 'vue-property-decorator';
import Constants from '../common/Constants';
import { AmenitiesModel    } from '@/model/AmenitiesModel';

@Component({})
export default class Amenities extends Vue {
private amenities: AmenitiesModel[] = [];
private errorMessage: string = '';
private constants = Constants;
private async created() {
    try {
      await this.$store.dispatch('AmenitiesListModule/getAmenitiesList');
      this.amenities = this.$store.state.AmenitiesListModule.amenitiesList;
    } catch (err) {
      return this.errorMessage = Constants.ERROR_MESSAGE;
    }
}

}
