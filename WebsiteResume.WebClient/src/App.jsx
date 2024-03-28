import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        loadSkills();
    }, []);

    if (skills.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            <h1 id="tabelLabel">Alexander Rozsa</h1>
            <p>These are my skills (only a small sample for the time being)</p>
            {skills.map(x => {
                return (
                    <div key={x.id}>{x.id}</div>
                )
            })}
            <p>Check out development progress at <a href='https://github.com/azsorlex/website-resume'>my repository</a></p>
        </div >
    );

    async function loadSkills() {
        try {
            const response = await axios.get('Skills');
            setSkills(response.data);
        } catch (error) {
            const placeholder = [{
                'id': 'Error',
                'order': 0
            }];
            setSkills(placeholder);
        }
    }
}

export default App;