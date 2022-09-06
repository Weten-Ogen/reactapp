import React from  'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Content from './Content';
import './Header.css';
import './Content.css';




class App extends React.Component{
  render (){
    
     const activities =[ 
      {
      timestamp : new Date().getTime(),
      text : 'Ate lunch',
      user : {
        id : 1,
        name : "Nate",
        avatar : "https://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments : [
        { from : 'Ari' , text : 'Me too'}
      ]
     },
     {
      timestamp : new Date().getTime(),
      text : 'woke up early',
      user : {
        id : 2,
        name : "Ari",
        avatar : "https://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments : [
        { from : 'Nate' , text : 'I am so jealous'}
      ]
    },
    {
      timestamp : new Date().getTime(),
      text : 'Ate some greenies',
      user : {
        id : 1,
        name : "Nate",
        avatar : "https://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments : [
        { from : 'Ari' , text : 'Me too'}
      ]
    },
    {
      timestamp : new Date().getTime(),
      text : 'walking home',
      user : {
        id : 1,
        name : "Nate",
        avatar : "https://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments : [
        { from : 'Ari' , text : 'Me too'}
      ]
    },
    {
      timestamp : new Date().getTime(),
      text : 'Singing ',
      user : {
        id : 1,
        name : "Nate",
        avatar : "https://www.croop.cl/UI/twitter/images/doug.jpg"
      },
      comments : [
        { from : 'Ari' , text : 'Me too'}
      ]
    }
    ]
    return(
      <div className='notificationsFrame'>
        <div className='panel'>
           {/*content goes here*/}
          <Header title="Timeline"/>
          <Content  activities= {activities}/>
          
          
        </div>
      </div>
    )
  }
}

export default App;