import React, { useState, useEffect } from 'react';
import Dexie from "dexie";
// import './myArchive.css'
import Post from './postArhive'
import { Container, Spinner } from 'react-bootstrap';
import MyForm from './formArchive';



const Main = () => {

    //set the database 
    const db = new Dexie("ReactDexie");
    //create the database store
    db.version(1).stores({
        posts: "title, content, file, format"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })

    //set the state and property
    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const [postFile, setFile] = useState("");
    const [postFormat, setFormat] = useState("");
    const [postSize, setSize] = useState("");


    const [posts, setPosts] = useState("");

    //read the file and decode it
    const getFile = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e[0]);
        reader.onload = (e) => {
            setFile(reader.result);
        }
    }

    const deletePost = async (id) => {

        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        //set the posts
        setPosts(allPosts);
    }


    //submit 
    const getPostInfo = (e) => {
        e.preventDefault();

        if (postTitle !== "" && postContent !== "" && postFile !== "") {
            let post = {
                title: postTitle,
                content: postContent,
                file: postFile,
                format : postFormat,
                size : postSize,
            }

            db.posts.add(post).then(async () => {
                //retrieve all posts inside the database
                let allPosts = await db.posts.toArray();
                //set the posts
                setPosts(allPosts);
            });
        }
    }

    useEffect(() => {

        //get all posts from the database
        const getPosts = async () => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
        }
        getPosts();

    }, [])

    let postData;

    if (posts.length > 0) {
        postData = <div className="postsContainer">
            {posts.map(post => {
                return <div className="post" key={post.title}>
                    <Post
                        title={post.title}
                        post={post.content}
                        img={post.file}
                        format={post.format}
                        size={post.size}
                        del={() => deletePost(post.title)}
                    />
                </div>
            })
            }
        </div>
    } else {

        postData = <div className="message">
            <p>Загружаю архив</p>
            <Spinner animation="border" />
        </div>
    }

    return (
        <>
          <Container fluid>
             <MyForm getPostInfo={getPostInfo}
                setTitle={setTitle}
                setContent={setContent}
                getFile={getFile}
                setFormat={setFormat}
                setSize={setSize}

            />
            </Container>

            {postData}
        </>
    );
}

export default Main;