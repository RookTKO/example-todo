import { render } from '@redwoodjs/testing/web'

import CountPage from './CountPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CountPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CountPage />)
    }).not.toThrow()
  })
})
