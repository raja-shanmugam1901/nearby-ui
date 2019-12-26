  import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
  import { AmenitiesModel } from '@/model/AmenitiesModel';
  import AmenitiesService from '@/services/AmenitieService';
  import { NewToiletModel } from '@/model/NewToiletModel';

  @Module({
    namespaced: true,
  })
  export default class AmenitiesListModule extends VuexModule {
    private amenitiesList!: AmenitiesModel[];
    private reportData: any;
    @Mutation
    public setAmenitiesList(list: AmenitiesModel[]) {
      this.amenitiesList = list;
    }

    @Action({ commit: 'setAmenitiesList' })
    public async getAmenitiesList(): Promise<AmenitiesModel[]> {
      try {
        const AmenitiesList = await AmenitiesService.getAmenitiesList();
        return AmenitiesList;
      } catch (err) {
        throw err;
      }
    }
    @Action
    public async newToilet(data: NewToiletModel[]): Promise<NewToiletModel[]> {
      try {
        const newReport = await AmenitiesService.newToilet(data);
        return newReport;
      } catch (err) {
        throw err;
      }
    }
    @Action({ commit: 'setAmenitiesList '})
    public async deleteToilet(loo: string) {
      try {
        const resp = await AmenitiesService.deleteToilet(loo);
        return resp;
      } catch (error) {
        throw error;
      }
    }
  }
