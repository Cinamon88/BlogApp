import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SinglePost from "./components/pages/Post/SinglePost/SinglePost";
import About from "./components/pages/About/About";
import PageNotFound from "./components/pages/NotFound/NotFound";
import { Container } from 'react-bootstrap'
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import AddPostForm from "./components/features/AddPostForm";
import EditPostForm from "./components/features/EditPostForm";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPostForm />} />
        <Route path="/post/edit/:id" element={<EditPostForm />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
