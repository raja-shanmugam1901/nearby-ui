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
        return this.errorMessage = this.constants.ERROR_MESSAGE;
      }
    }
    private async deleteToilet(loo: string) {
       try {
         await this.$store.dispatch('AmenitiesListModule/deleteToilet', loo);
         const response = this.$store.state.AmenitiesListModule.reportData;
         const data = response.data;
         const success = this.constants.SUCCESS;
         if (data === success) {
           this.$modal.show('alert-modal');
         }
       } catch (err) {
        return this.errorMessage = this.constants.ERROR_MESSAGE;
      }
    }
    private hideAlert() {
      this.$modal.hide('alert-modal');
  }
}
