import React, {useRef} from 'react'
import useInteractionEvent from './useInteractionEvent'

const withInteractionEventListener = (Component) => (props) => {
  const currentRef = useRef(null)
  useInteractionEvent(currentRef)
  return <Component {...props} ref={currentRef} />
}

export default withInteractionEventListener