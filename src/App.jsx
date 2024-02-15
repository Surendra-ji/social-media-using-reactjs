import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  const [selectedTab, setselectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab}></Sidebar>
        <div className='content'>
          <Header></Header>
          {selectedTab === 'Home' ? <PostList></PostList> : <CreatePost></CreatePost>}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
