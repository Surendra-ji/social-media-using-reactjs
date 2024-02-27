import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import PostListProvider from '../store/post-list-store';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar ></Sidebar>
        <div className='content'>
          <Header></Header>
          <Outlet/>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
