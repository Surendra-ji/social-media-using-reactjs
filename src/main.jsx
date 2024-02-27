import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostList, { postLoader } from './components/PostList.jsx';
import CreatePost from './components/CreatePost.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      {path: '/', element: <PostList/>, loader: postLoader},
      {path: '/create-post', element: <CreatePost/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
