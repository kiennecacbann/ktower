import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Function from './components/Function/Function';
import CreatePost from './container/CreatePost/CreatePost';
import Posts from './container/Post/Posts';
import RightSidebar from './components/RightSidebar/RightSidebar';
import Report from './container/Report/Report';

const App = () => (
  <div className='bg-[#1c1e21]'>
    <Header />
    <div className='flex h-full '>
      <Function />
      <div className='mx-auto'>
        <CreatePost />
        <Posts />
      </div>
      <RightSidebar />

    </div>
  </div>
);

export default App;
