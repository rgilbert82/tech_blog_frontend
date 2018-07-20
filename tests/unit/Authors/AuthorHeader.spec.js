import { shallowMount } from '@vue/test-utils';
import AuthorHeader from '@/components/Authors/AuthorHeader.vue';

describe('AuthorHeader.vue', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(AuthorHeader, { propsData: { author: {} }});
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
