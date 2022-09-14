import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import { render, screen } from '../../../utils/test-utils'
import CommonLayout from './CommonLayout'

describe('<CommonLayout />', () => {
  afterEach(cleanup)

  it('Check snapshot', async () => {
    const { asFragment } = render(
      <CommonLayout>
        <p>my content</p>
      </CommonLayout>
    )

    expect(await screen.findByText('my content')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
