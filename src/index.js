import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import './index.css'


function App () {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/posts'}>Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
            <Route path='/posts' element={<PostsPage />}/>
            <Route path='/posts/:id' element={<PostPage />}/>
        </Routes>
      </main>
      <footer>Footer</footer>
    </>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,document.getElementById('root')
);
