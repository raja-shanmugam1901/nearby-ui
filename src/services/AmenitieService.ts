import { AmenitiesModel } from '@/model/AmenitiesModel';

import { NewToiletModel } from '@/model/NewToiletModel';
import axios from 'axios';
import Constants from '../common/Constants';
class AmenitieService {
  private ListOfAmenities: AmenitiesModel[] = [];
  private NewToilet: NewToiletModel[] = [];
  private instance = axios.create({
    baseURL: Constants.API_BASE_URL,
    timeout: Constants.API_TIMEOUT,
  });
  public async getAmenitiesList(): Promise<AmenitiesModel[]> {
    try {
      const response = await this.instance.get('http://localhost:3000/amenities');
      this.ListOfAmenities = response.data.AmenitiesList;
    } catch (err) {
      throw (err);
    }
    return this.ListOfAmenities;
  }

  public async newToilet(data: NewToiletModel[]): Promise<NewToiletModel[]> {
    try {
      const response = await this.instance.post('http://localhost:3000/toilet', data);
    } catch (err) {
      throw (err);
    }
    return this.NewToilet;
  }
  public async deleteToilet(loo: string): Promise<any> {
   try {
     const response = await this.instance.delete('http://localhost:3000/toilet', { headers: { loo } });
     return response;
   } catch (error) {
     throw (error);
   }
  }
}
export default new AmenitieService();
