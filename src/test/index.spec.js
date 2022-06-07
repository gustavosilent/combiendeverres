import { shallowMount } from '@vue/test-utils'
import IndexPage from '@/src/pages/index.vue'

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
