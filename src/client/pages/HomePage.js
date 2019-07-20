import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div>I'm the home component in Server Side Rendering</div>
      <button onClick={() => console.log("hello")}>Click me</button>
    </div>
  )
}

export default {
  component: Homepage
}