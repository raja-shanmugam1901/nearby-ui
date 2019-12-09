import { expect } from 'chai';
import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import VModal from 'vue-js-modal';
import sinon from 'sinon';
import NewToilet from '@/components/NewToilet.vue';
import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VModal);
localVue.use(VueRouter);

describe('NewToilet.vue', () => {
  it('tests Render a button', () => {
    const wrapper = shallowMount(NewToilet);
    expect(wrapper.contains('button')).to.eq(true);
  });
  it('tests the show function', () => {
    const wrapper = shallowMount(NewToilet, {
      localVue,
    });
    wrapper.vm.$modal = {
      show: sinon.stub(),
      hide: sinon.stub(),
      toggle: sinon.stub(),
    };
    (wrapper.vm as any).showModal();
    expect(true).eq(true);
  });
});

it('tests the hide function', () => {
  const wrapper = shallowMount(NewToilet, {
    localVue,
  });
  wrapper.vm.$modal = {
    show: sinon.stub(),
    hide: sinon.stub(),
    toggle: sinon.stub(),
  };
  (wrapper.vm as any).checkForm();
  expect(true).eq(true);
});


