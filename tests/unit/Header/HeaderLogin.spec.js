import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex        from 'vuex';
import HeaderLogin from '@/components/Header/HeaderLogin';

describe('HeaderLogin', () => {
  const localVue = createLocalVue();
  let component;
  let store;

  localVue.use(Vuex);

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        loggedIn: false,
        currentUser: {}
      },
      actions: {
        googleSession: jest.fn()
      }
    });

    component = shallowMount(HeaderLogin, { store, localVue });
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
