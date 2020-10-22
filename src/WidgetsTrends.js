import React from 'react'
import './WidgetsTrends.css'
function WidgetsTrends({ranking,title,retweets}) {
    return (
        <div className="widgettrends">
            <div className="widgettrends__trends">
                <p>{ranking}- Trending</p>
                <h3>#{title}</h3>
                <span>{retweets} Tweets</span>
                <hr/>
            </div>
        </div>
    )
}

export default WidgetsTrends
