import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Skills from './pages/Skills';
import { ThemeProvider } from '@mui/material';
import THEME from './data/constants/Theme';

const App = () => {
    return (
        <ThemeProvider theme={THEME}>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/skills' element={<Skills />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;