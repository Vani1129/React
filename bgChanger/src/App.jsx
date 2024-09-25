import { useState } from "react"

function App() {
  const [colour, setColour] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:colour}}
      >
        <h1>BackGround Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex  flex-wrap justify-center gap-3  shadow-xl bg-white rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-xl" onClick={() => setColour("red")} style={{backgroundColor:"red"}}>Red</button>
            <button className="outline-none px-4 py-1 rounded-xl" onClick={() => setColour("blue")} style={{backgroundColor:"blue"}}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-xl" onClick={() => setColour("green")} style={{backgroundColor:"green"}}>Green</button>
            <button className="outline-none px-4 py-1 rounded-xl" onClick={() => setColour("olive")} style={{backgroundColor:"olive"}}>Olive</button>
            <button className="outline-none px-4 py-1 rounded-xl" onClick={() => setColour("pink")} style={{backgroundColor:"pink"}}>Pink</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
