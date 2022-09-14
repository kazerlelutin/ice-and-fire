import { afterEach, describe, expect, it } from 'vitest'
import {cleanup } from '@testing-library/react'
import Home from './Home'
import { render} from '../../../utils/test-utils'

describe('<Home />', () => {
  afterEach(cleanup)

  it('Check snapshot', async () => {
    const { asFragment } = render(<Home/>)
    expect(asFragment()).toMatchSnapshot()
  })
})


