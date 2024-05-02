import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/skills' element={<Skills />} />
            </Routes>
        </Layout>
    );
}

export default App;