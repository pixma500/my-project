import React from 'react';
import { Button} from 'react-bootstrap';


const Search=({search,val,value}) =>{
   

    return(
        
        <div className="App">
          <div className="mydiv">
            <h4>Поиск</h4>
            <input
              style={{ width: '60%' }}
              type="text" value={value}
              placeholder='поиск, например :cat, dog, boy'
              onChange={val}
            />
            <Button onClick={search} variant="success">Найти</Button>
          </div>
          </div>
  
    )
}

export default Search;