import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import About from './pages/About';
import NotFound from './pages/NotFound'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/posts/:slug" element={<Post/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;