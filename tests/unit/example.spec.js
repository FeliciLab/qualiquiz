import { shallowMount, mount } from '@vue/test-utils'
import Welcome from '@/views/Welcome.vue'

describe('Welcome.vue', () => {
  it('renders text', () => {
    const msg = 'new message'
    const wrapper = mount(Welcome)
    // expect(wrapper.text('INICIAR AVALIAÇÃO')).toMatch(msg)
  })
})
