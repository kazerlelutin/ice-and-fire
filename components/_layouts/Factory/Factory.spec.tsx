import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import { render, screen } from '../../../utils/test-utils'
import Factory from './Factory'

describe('<Factory />', () => {

  afterEach(cleanup)
  
  it('Check snapshot', async () => {
    
    const useFakeHook = ()=>{
      return  {msg: 'hi !'}
    }

    const FakeComp = ({msg})=>{
      return <p>{msg}</p>
    }
    const FakeCompWithFactory = Factory(useFakeHook,FakeComp);
    const { asFragment } = render(<FakeCompWithFactory/>)

    expect(await screen.findByText('hi !')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
