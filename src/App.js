import './App.css';
import React from 'react';
import { components } from './component/index';
import webdata from './webPageData.json';
import './style.css';
function App() {
  return (
    <React.Fragment>
      {
        webdata.map((item,index)=>{
          let Component = components[item.component];
          let props = item.props;
          return <Component key={index} {...props}>test</Component>
        })
      }
    </React.Fragment>
  );
}

export default App;
