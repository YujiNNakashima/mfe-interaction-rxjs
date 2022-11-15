import { useEffect } from 'react'
import { BehaviorSubject } from "rxjs";

export const outputProcessEventSubject = new BehaviorSubject(null);


const EventType = {
  REDIRECT_EVENT: 'redirectEvent',
  OUTPUT_PROCESS_EVENT: 'outputProcessEvent'
}

const redirectEvent = (event) => {
  // console.log(event)
}

const outputProcessEvent = (event) => {
  outputProcessEventSubject.next(event)
}

const optionsHandleMessage = new Map([
  [EventType.REDIRECT_EVENT, redirectEvent],
  [EventType.OUTPUT_PROCESS_EVENT, outputProcessEvent]
])

const useInteractionEvent = (ref) => {
  const handleEvent = (e) => {
    optionsHandleMessage.get(e.detail.name)(e)
  }

  useEffect(() => {
    const currRef = ref.current
    if(currRef) {
      currRef.addEventListener('interactionEvent', handleEvent)
    }

    return () => {
      if(currEvent) {
        currRef.removeEventListener('interactionEvent', handleEvent)
      }
    }
  }, [ref])
}

export default useInteractionEvent