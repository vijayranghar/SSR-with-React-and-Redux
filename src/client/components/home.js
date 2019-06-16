import React from 'react'

const Home = () => {
  return (
    <div>
      <div>I'm the home component in SSR</div>
      <button onClick={() => console.log("hello")}>Click me</button>
    </div>
  )
}

export default Home