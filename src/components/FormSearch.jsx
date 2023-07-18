import { useRef, useState } from "react"
import getRandomNumber from "../utils/getRandomNumber"

const FormSearch = ({ setIdLocation }) => {

  const idLocationValue = useRef()

  const [inputIsEmpty, setInputIsEmpty] = useState(true)

  const handleSubmit = e => {

    
    e.preventDefault()
    const inputValue = idLocationValue.current.value.trim()
    console.log(inputValue)
    if (inputValue === '') {
      setIdLocation(getRandomNumber(126))
    } else {
      setIdLocation(inputValue)
    }
  }

  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Encuentra tu planeta"
          type="text"
          ref={idLocationValue}
        />
        <button>Search</button>
      </form>
    </>

  )
}

export default FormSearch