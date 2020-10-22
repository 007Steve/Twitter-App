import React from 'react'
import './Post.css'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
function Post({ name,image, text, picture}) {
    

    return (
        <div className="post">
            <div className="post__picture">
                <img className="tweetform__inputs__image" alt="" src={picture}/>
            </div>
            <div  className="post__body">
                <div  className="post__header">
                    <div  className="post__headerText">
                        <h3>{name}</h3>
                        <p>@{name}</p>
                    </div>
                    <div  className="post__headerDescription">
                        <p>{text}</p>
                    </div>      
                </div>
                <img  className="post__image" src={image} alt=""/>
                <div className="post__buttons" >
                    <ChatBubbleOutlineIcon   className=" post__buttonsComment"/>
                    <RepeatIcon  className="  post__buttonsRetweet"/>
                    <FavoriteBorderIcon className=" post__buttonsLike"/>
                    <PublishIcon className=" post__buttonsUpload"/>
                </div>
            </div>
        </div>
    )
}

export default Post
