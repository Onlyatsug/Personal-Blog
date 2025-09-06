import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/posts/:slug" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;