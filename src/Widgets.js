import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import WidgetsTrends from './WidgetsTrends';
import fabio from './/IMG_4189.png';
import { Avatar } from '@material-ui/core';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__container">
                <div className="widgets__inputs">
                    <SearchIcon className="widgets__icon"/>
                    <input className="widgets__input" placeholder="Search Twitter"/>
                </div>
                <div className="widgets__trends">
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                    <WidgetsTrends ranking="1" title="NBA" retweets="614k"/>
                </div>
                <div className="widget_footer">
                    <h2>Who to follow</h2>
                    <hr/>
                    <div className="widget_footer_follow">
                        <Avatar src={fabio} />
                        <h3>Fabio</h3>
                        <button id="follow__btn">follow</button>
                    </div>
                    <hr/>
                    <div className="widget_footer_follow">
                         <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFPwqjsZFiBAg/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=ZSUEEY_L4G9sCCnroJnkAGfVZHBWO3yQQHTHsZp_nzc"/>
                        <h3>Vanessa</h3>
                        <button id="follow__btn">follow</button>
                    </div>
                    <hr/>
                    <div className="widget_footer_follow">
                        <Avatar src="data:image/jpeg;base64,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"/>
                        <h3>Dina</h3>
                        <button id="follow__btn">follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Widgets
