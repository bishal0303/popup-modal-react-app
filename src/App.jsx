import { useState } from "react"
import Popup from "./components/Popup"

const App = () => {
  const [popup, setPopup] = useState(false)
  const [editPopup, setEditPopup] = useState(false)
  return (
    <div className="w-screen h-screen flex justify-center items-center gap-4">
      <button onClick={() => {
        setPopup(true)
      }} className="bg-amber-500 hover:bg-amber-300 hover:transition- px-5 py-2 cursor-pointer rounded-lg shadow-lg capitalize">delete</button>
      <Popup popup={popup} setPopup={setPopup} title={"Delete"}/>

      <button onClick={() => {
        setEditPopup(true)
      }} className="bg-amber-500 hover:bg-amber-300 px-5 py-2 cursor-pointer rounded-lg shadow-lg">Edit</button>
      <Popup popup={editPopup} setPopup={setEditPopup} title={"Edit"}/>

    </div>
  )
}

export default App