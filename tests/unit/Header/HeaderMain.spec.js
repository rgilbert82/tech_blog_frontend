import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import HeaderMain       from '@/components/Header/HeaderMain';

describe('HeaderMain.vue', () => {
  let component;

  beforeEach(() => {
    component = shallowMount(HeaderMain, { stubs: { RouterLink: RouterLinkStub }});
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
})
