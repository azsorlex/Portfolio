import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

const SkillsService = {

    loadSkills: async () => {
        return await axios.get(BASE_ENDPOINTS.SKILLS);
    }

}

export default SkillsService;