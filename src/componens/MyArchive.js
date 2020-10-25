import React, { useState, useEffect } from 'react';
import Dexie from "dexie";
import Post from './postArhive'
import { Container, Spinner, Col, Row, Button } from 'react-bootstrap';
import MyForm from './formArchive';


const Main = () => {
    //set the database 
    const db = new Dexie("ReactDexie");
    //create the database store
    db.version(1).stores({
        posts: "title, content, file, collectiont"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })

    //set the state and property
    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const [postFile, setFile] = useState("");
    const [postCollectiont, setCollectiont] = useState("");
    const [postSize, setSize] = useState("");
    const [postType, setType] = useState("");
    const [postDate, setDate] = useState([]);
    const [posts, setPosts] = useState("");

    //read the file and decode it
    const getFile = (e) => {
        console.log(e[0])  //данные загруженного фото File {name: "IMG_20200419_133120.jpg", 
        //lastModified: 1587292282000, lastModifiedDate: Sun Apr 19 2020 13:31:22 GMT+0300 (Восточная Европа, летнее время),
        //webkitRelativePath: "", size: 4633774, …}
        let meta = e[0];
        console.log(meta.lastModified);
        setSize(meta.size);
        setType(meta.type);
        setDate(meta.lastModified);

        let reader = new FileReader();

        reader.readAsDataURL(e[0]);
        reader.onload = () => {
            setFile(reader.result);
        }
    }

    const deletePosts = async () => {

        db.posts.clear();
        let allPosts = await db.posts.toArray();
        //set the posts
        setPosts(allPosts);
    }


    const deletePost = async (id) => {

        db.posts.delete(id);
        let allPosts = await db.posts.toArray();
        //set the posts
        setPosts(allPosts);
    }


    const updatePost = (id) => {

        let post1 = {
            title: postTitle,
            content: postContent,
            collectiont: postCollectiont,
        }

        db.posts.update(id, post1).then(async () => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
        });
    }

    //submit 
    const getPostInfo = (e) => {
        e.preventDefault();

        if (postTitle !== "" && postContent !== "" && postFile !== "") {
            let post = {
                title: postTitle,
                content: postContent,
                file: postFile,
                collectiont: postCollectiont,
                size: postSize,
                type: postType,
                date: postDate,
            }

            db.posts.add(post).then(async () => {
                //retrieve all posts inside the database
                let allPosts = await db.posts.toArray();
                //set the posts
                setPosts(allPosts);
                setTitle("");
                setCollectiont("");
                setContent("");
             
                

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
    // if (posts.length==0){return <div>Нет фото</div>}

    if (posts) {
        postData = <div className="postsContainer">
            {posts.map(post => {
                return <div className="post" key={post.title}>
                    <Post
                        title={post.title}
                        post={post.content}
                        img={post.file}
                        collectiont={post.collectiont}
                        size={post.size}
                        type={post.type}
                        date={post.date}
                        update={() => updatePost(post.title)}
                        del={() => deletePost(post.title)}
                    />
                </div>
            })
            }
        </div>
    } 
     else {
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
                    setCollectiont={setCollectiont}
                    postTitle={postTitle}
                    postCollectiont={postCollectiont}
                    postContent={postContent}
                    postFile={postFile}
                />
            </Container>
            <Container>
                <Row>
                    <Col sm={3}>
                        { posts.length>1 ?  
                        <Button onClick={deletePosts} type="submit" style={{ margin: "auto", width: '60%' }} variant="primary">
                            Удалить все
                        </Button> : '' }
                    </Col>
                    <Col style={{ margin: "10px" }} sm={8}>
                        {postData}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Main;