import React, { useState , useEffect } from 'react'
import styles from './chatApp.module.css'; 
import { Button, Card, CardContent, Modal, TextField  } from '@material-ui/core';
import Container from '@material-ui/core/Container/Container';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import classNames from 'classnames'
import LogoutButton from "../components/logout-button"
import { useMutation, useQuery } from '@apollo/client';
import { NewMessageMutation, 
         NewMessageDocument, 
         NewMessageMutationVariables, 
         GetPostsDocument, 
         Post } from '../graphql/generated/graphql';
import { Login } from '../components/login';
    

const ChatApp = () => {

    const [thisUser, setThisUser] = useState<string | null>( localStorage.getItem('email') ?? null )
    const [posts, setPosts] = useState<Post[]>([])
    const [newMessage, setNewMessage] = useState("")
    const [showPopUp, setShowPopUp] = useState(false)
    const [write, { loading }] = useMutation<NewMessageMutation, NewMessageMutationVariables>(NewMessageDocument)

    const postData = useQuery(GetPostsDocument)
    
    useEffect(() => {
        if(thisUser === null){
            setShowPopUp(true)
        }else{
            setShowPopUp(false)
        }
    }, [thisUser])

    useEffect(() => {
        setPosts(postData.data?.posts) 
    }, [postData])

    const addPost = (message:string) => {  
        if (thisUser && !loading) {
            write({ variables: { email: thisUser , message: message } }).then(result =>{
                const data =result.data
                if(data){
                    if( data.postMessage?.success && data.postMessage?.posts){
                        setPosts(data.postMessage.posts.map(el=> el as Post))
                    }
                }
            })
            setNewMessage("")
        }
    }

    const updateWord = (e: any) =>{
        setNewMessage(e.target.value)
    }

    return (
    <Container>
        <Modal
            open={showPopUp}
            onClose={()=>{
                     if(thisUser !== null){ setShowPopUp(false) }
                    }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <Card className={styles.modal}>
                <CardContent>   
                    <Login  setEmail={(e)=>setThisUser(e)}/>
                </CardContent>
             </Card>
        </Modal>
        <Card className={styles.box}>
            <CardContent>   
            <div> 
                {posts  && posts.length > 0 && posts.map(el =>(   
                        <div className={classNames( styles.post , el.user_email === thisUser ? styles.myPost  : styles.otherPost )} >
                                {el.postData}
                                { el.user_email !== thisUser && 
                                    <div className={styles.userName}>{el.user_email}</div>
                                }
                        </div>
                ))
                }
            </div>
            </CardContent>
        </Card>
        <Card className={styles.inputText}>
            <CardContent>
                <form noValidate autoComplete="off" onChange={(e) => updateWord(e.nativeEvent) } className={styles.text}>
                    <TextField id="outlined-basic"  variant="outlined"  fullWidth={true} value={newMessage} />
                </form>
                <div className={styles.submit}>
                    <Button  variant="outlined" onClick={()=> addPost(newMessage)} disabled={false}>
                        <ArrowUpwardIcon />
                    </Button>
                </div>
                
            </CardContent>
        </Card>
        <div>
            <LogoutButton 
                onClick={()=>{
                        setThisUser(null)
                        setShowPopUp(true) } 
                }
            />
        </div>
   </Container >
  );
}

export default ChatApp;
