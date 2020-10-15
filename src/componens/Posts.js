import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Search from './Search';
import Post from './Post'
import Main from './MyArchive';


function Posts() {      
    const [value, setValue] = useState("all");
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        fetchImages()
     
    }, []
    );


    const fetchImages = () => {
        fetch(`http://api.unsplash.com/search/photos?client_id=GSMRDQzMVfpyzn8I36-SulYxX3xyPEVL84R_S7cGLfU&query=${value}`)
            .then(res => res.json())
            .then(data => {
                let dat = data.results
                dat.forEach((item, index) => {
                    item['id'] = index
                })
                console.log(dat)
                setResults(dat)
            })
            .then(() => setLoaded(true))
            .then(setValue(''))
    }

    const addPost=(id)=>{
        return ( 
           console.log(results[id])
            )
          
    }

    return (
        <div className="App">
            <Search
                search={() => fetchImages()}
                val={(e) =>  setValue(e.target.value) }
                value={value}
            />
            <div className="gallery">
                {!loaded ? <Spinner animation="border" />
                    : results.map(item => {
                     
                        return (
                            <>
                            <Post
                                key={item.id}
                                img={item.urls.regular}
                                description={item.alt_description}
                                add={()=> addPost(item.id)}
                            />
                          
</>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Posts;



