import { useState } from 'react'

import Title from './Title.jsx'
import TextOne from './TextOne.jsx'
import TextTwo from './TextTwo.jsx'

function App() {
  const [name, setName] = useState('Nicolai Klokmose')

  return (
    <div className="app">
      <Title name={name}/>
      <TextOne name={name}/>
      <TextTwo name={name}/>
    </div>
  )
}

export default App
