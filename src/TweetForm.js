import React, { useState,  } from 'react'
import './TweetForm.css'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EventIcon from '@material-ui/icons/Event';
import db from "./firebase";
function TweetForm() {

    const [tweetPost,setTweetPost] = useState("")
    const [tweetImage,setTweetImage] = useState("")
  
    const sendPost = (e) =>
    {
        e.preventDefault()
        db.collection("posts").add({
            name: "Stephen",
            image: tweetImage,
            text: tweetPost,
            picture: "https://pbs.twimg.com/profile_images/1264317852234010625/16bEMDAl_400x400.jpg"
        })
        setTweetImage("")
        setTweetPost("")
    }

    
    return (
        <div className="tweetform">
            <form>
                <div className="tweetform__inputs">
                    <img className="tweetform__inputs__image" src="https://pbs.twimg.com/profile_images/1264317852234010625/16bEMDAl_400x400.jpg"  alt=""/>
                    <input placeholder="What's happening?" value={tweetPost} onChange={(e) => setTweetPost(e.target.value)}/>
                    <input id="input2" placeholder="Add A image" value={tweetImage} onChange={(e) => setTweetImage(e.target.value)}/>
                </div>

                <div className="tweetform__row">
                    <div className="tweetform__icons">
                        <CropOriginalIcon className="tweetform__icon" />
                        <GifIcon className="tweetform__icon" />
                        <BarChartIcon className="tweetform__icon"/>
                        <InsertEmoticonIcon className="tweetform__icon"/>
                        <EventIcon className="tweetform__icon"/>
                    </div>
                    <button type="submit"  onClick={sendPost} className="tweetform__button">Tweet</button>
                </div>
            </form>
        </div>
    )
}

export default TweetForm
