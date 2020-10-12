import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, Spinner } from 'react-bootstrap'

function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [visible, setVisible] = useState(3)

  useEffect(() => {
    fetchImages()
}, []
)


  const fetchImages = () => {
    fetch(`http://api.unsplash.com/search/photos?client_id=GSMRDQzMVfpyzn8I36-SulYxX3xyPEVL84R_S7cGLfU&query=${value}`)
      .then(res => res.json())
      .then(data => {
        let dat=data.results
        dat.forEach((item,index)=>{
          item['id']=index
      } )
        console.log(dat)
        setResults(dat)
      })
      .then(() => setLoaded(true))
  }

  return (
    <>
      <div className="App">
        <div className="mydiv">
          <h4>Поиск</h4>
          <input
            style={{ width: '60%' }}
            type="text" value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={() => fetchImages()} variant="success">Найти</Button>
        </div>
        <div  className="gallery">
        {console.log(loaded)}
          {!loaded ? <Spinner animation="border" /> 
         
            : results.map(item => {
              return (
                <div key={item.id} >
                < img  src={item.urls.regular} alt={item.alt_description} />
                  { item.alt_description }
                  </div>
                  )
          }

            )
          }
        </div>
      </div>
    </>
  );
}

export default App;
