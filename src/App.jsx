import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/Location'
import ResidentCard from './components/ResidentInfo'
import FormSearch from './components/FormSearch'

function App() {

  const randomId = getRandomNumber(126)

  const [idLocation, setIdLocation] = useState(randomId)

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`

 
  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [idLocation])

  return (
    <div className='app'>
      <div className="rickandmorty">
        <div className='logoRick'>
          <h1 className='h1logo'>Rick and Morty </h1>
        </div>
        <FormSearch
          setIdLocation={setIdLocation} />
      </div>

      {
        hasError
          ? <h2 className='error'>❌ You only have planets from 1 to 126 🤣 </h2>
          : (
            <>
              <LocationInfo
                location={location}
              />
              <div className='resident-container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      url={url}
                      key={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
    </div>
    
  )
}

export default App