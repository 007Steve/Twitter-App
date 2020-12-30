import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import WidgetsTrends from './WidgetsTrends';

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
               
            </div>
        </div>
    )
}

export default Widgets
