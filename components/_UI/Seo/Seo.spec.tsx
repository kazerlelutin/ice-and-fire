import { afterEach, describe, expect, it, } from 'vitest'
import { cleanup } from '@testing-library/react'
import { render, screen, } from '../../../utils/test-utils'
import Seo from './Seo'

describe('<CommonLayout />', () => {

  afterEach(cleanup)
  
  it('Check snapshot', async () => {
    
    const { asFragment } = render(<Seo title='my title'/>)
    expect(asFragment()).toMatchSnapshot()
  })
})
