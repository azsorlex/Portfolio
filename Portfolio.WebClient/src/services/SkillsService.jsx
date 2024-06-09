import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

const SkillsService = {

    getSkills: async () => {
        return await axios.get(BASE_ENDPOINTS.SKILLS);
    },

    getTopSkills: async (limit) => {
        return await axios.get(`${BASE_ENDPOINTS.SKILLS}?limit=${limit}`);
    }

}

export default SkillsService;