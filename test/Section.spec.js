import { mount } from '@vue/test-utils'
import NotFound from '@/components/Section.vue'

describe('Section', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NotFound)
    expect(wrapper.vm).toBeTruthy()
  })
})
