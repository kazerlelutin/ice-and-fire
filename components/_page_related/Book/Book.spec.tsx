import { afterEach, describe, expect, it } from 'vitest'
import {cleanup } from '@testing-library/react'
import Book from './Book'
import { render} from '../../../utils/test-utils'

describe('<Book />', () => {
  afterEach(cleanup)

  it('Check snapshot', async () => {
    const { asFragment } = render(<Book/>)
    expect(asFragment()).toMatchSnapshot()
  })
})


