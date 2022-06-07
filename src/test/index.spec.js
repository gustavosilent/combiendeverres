import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import IndexPage from '@/src/pages/index.vue'

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(IndexPage, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
