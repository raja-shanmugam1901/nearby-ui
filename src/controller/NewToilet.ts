import { Component, Vue } from 'vue-property-decorator';
import { NewToiletModel } from '@/model/NewToiletModel';
import axios from 'axios';

@Component({})
export default class NewToilet extends Vue {
    private report = {
        title: '',
        location: '',
        extraInfo: '',
        type: [],
    };

    public showModal() {
    this.$modal.show('report-modal');
    }
    public async checkForm() {
    const response = await this.$store.dispatch('AmenitiesListModule/newToilet', this.report);
    this.$modal.hide('report-modal');
    this.$modal.show('alert-modal');
    }
    public async hideAlert() {
        this.$modal.hide('alert-modal');
        await this.$store.dispatch('AmenitiesListModule/getAmenitiesList');
        window.location.reload();
    }
    public cancel() {
        this.$modal.hide('report-modal');
    }
}
