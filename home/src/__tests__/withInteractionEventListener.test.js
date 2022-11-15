import React, { forwardRef } from 'react'
import withInteractionEventListener from '../interactionEvent/withInteractionEventListener'
import { fireEvent, screen, render } from '@testing-library/dom'

const event = new window.CustomEvent('interactionEvent', {
  detail: {
    name: 'redirectEvent',
    data: 'lorem ipsum'
  }
})

const SomeMFE = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <button
        type="button"
        onClick={(() => {
          if(ref.current) P
          document.dispatchEvent(event)
        })}
      >
        dispatch me
      </button>
    </div>
  )
})

const WrappedMfe = withInteractionEventListener(SomeMFE)

const SomeParentComponent = () => {
  return <WrappedMfe />
}

describe('withInteractionEvent test', () => {
  const dispatchEventSpy = jest.spyOn(document, 'dispatchEvent')
  render(<SomeParentComponent />)
  const btn = screen.getByTest(/dispatch me/i)
  fireEvent.click(btn)
  expect(dispatchEventSpy).toHaveBeenCalledWith(event)
})