import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './Header';
import { Meme } from './Meme';
const WebPage = () => {
  return(
    <>
      <Header />
      <Meme />
    </>
  )

}
ReactDOM.render(<WebPage />, document.getElementById("root"))