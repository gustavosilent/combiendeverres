import { mount } from '@vue/test-utils'
import IndexPage from '@/src/pages/index.vue'

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexPage)
    expect(wrapper.vm).toBeTruthy()
  })
})