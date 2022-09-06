import React from 'react';

class ActivityItem extends React.Component{
  render(){
    const {activity} = this.props;
    return(
      <div className='content'>
          <div className='item'>
            <div className='avatar'>
              <img  className='circle'
              src={activity.user.avatar}
              alt={activity.text}
              />
              <div className='txt'>
                <span className='time'>
                  {activity.timestamp}
                </span>
                <p className='para'>{activity.text}</p>
              </div>
            </div>
            <div className='commentCount'>{activity.comments.length}</div>
          </div>
      </div>
    )
  }
}
export default ActivityItem;