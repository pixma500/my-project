import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Search from './Search';
import Title from './Post1';
import './foto.css';


function Posts() {
    const [value, setValue] = useState("all");
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        fetchImages();
    }, []
    );

    const fetchImages = () => {
        fetch(`http://api.unsplash.com/search/photos?client_id=GSMRDQzMVfpyzn8I36-SulYxX3xyPEVL84R_S7cGLfU&query=${value}&per_page=9`)
            .then(res => res.json())
            .then(data => {
                let dat = data.results
                dat.forEach((item, index) => {
                    item['id'] = index
                })

                setResults(dat)
            })
            .then(() => setLoaded(true))
            .then(setValue(''))
    }

    return (
        <div >
            <Search
                search={() => fetchImages()}
                val={(e) => setValue(e.target.value)}
                value={value}
            />
            <div className="tiles">
                {!loaded ? <Spinner animation="border" />
                    : results.map(item => {
                        return <Title img={item.urls.regular} key={item.id} />
                    })
                }
            </div>
        </div>
    );
}

export default Posts;



