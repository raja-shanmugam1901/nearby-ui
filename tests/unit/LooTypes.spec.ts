import { expect } from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import sinon from 'sinon';
import LooTypes from '@/components/LooTypes.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
describe('LooTypes.vue', () => {
    let actions;
    let store: any;
    let list = [];
    const data = {
        AmenitiesList : [
             {
                Amenities : [
                    'Soap Dispenser',
                    'Washbasin',
                    'Security Lights',
                    'Faucet for Washing',
                    'Lock on doors',
                    'Security Windows',
                ],
            },
            {
                toilets : [
                    'Public Toilet',
                    'Coal Farm Toilet',
                    'Private Toilet ',
                ],
            },
        ],
    };
    beforeEach(() => {
        actions = {
            AmenitiesList: sinon.stub().returns(data.AmenitiesList),
        };
        list = data.AmenitiesList;
        const AmenitiesListModule = {
            namespaced: true,
            state: {
                list,
            },
            actions,
        };
        store = new Vuex.Store({
            modules: {
                AmenitiesListModule,
            },
        });
    });
    it('tests the amenities details', () => {
        const wrapper = shallowMount(LooTypes, {
            store,
         });
        expect(wrapper.vm.$data.amenties).to.eql([]);
    });
});
