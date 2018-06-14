import { shallowMount } from '@vue/test-utils';
import HeaderMain       from '@/components/Header/HeaderMain';

describe('HeaderMain.vue', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(HeaderMain, {});
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  })
})
