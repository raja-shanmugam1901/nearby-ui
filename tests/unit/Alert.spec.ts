import { expect } from 'chai';
import {
  shallowMount,
} from '@vue/test-utils';
import Alert from '@/components/Alert.vue';

describe('Alert.vue', () => {
  it('tests whether Error component rendering proper error message', () => {
    const wrapper = shallowMount(Alert);
    expect(wrapper.html()).to.contain('You have 0 notification');
  });
});
