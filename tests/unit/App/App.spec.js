import { shallowMount, TransitionStub, TransitionGroupStub, config } from '@vue/test-utils';
import App from '@/components/App/App.vue';

describe('App.vue', () => {
  let component;

  config.stubs['router-view'] = TransitionGroupStub;

  beforeEach(() => {
    component = shallowMount(App, { stubs: { transition: TransitionStub }});
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
