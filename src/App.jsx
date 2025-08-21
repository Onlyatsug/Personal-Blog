import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/blog/post/:slug" element={<Post/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;