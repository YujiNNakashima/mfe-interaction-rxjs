import React, {forwardRef} from "react";


export default forwardRef((props, ref) => {
  
  const event = new window.CustomEvent('interactionEvent', {
    detail: {
      name: 'outputProcessEvent',
      data: {
        name: 'wcapp:open-modal'
      }
    }
  })


  return (
    <div ref={ref} className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-as-web-component</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>

      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          ref.current.dispatchEvent(event)
        }}
      >
        Dispatch Event!!!
      </button>
     </div>
  )
})

