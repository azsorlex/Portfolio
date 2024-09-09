import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

export interface SkillDTO {
    id: string,
    name: string,
    type: string,
    priority: number,
};

const SkillsService = {

    getSkills: async () => {
        return await axios.get<Array<SkillDTO>>(BASE_ENDPOINTS.SKILLS);
    },

    getTopSkills: async (limit: number) => {
        return await axios.get<Array<SkillDTO>>(`${BASE_ENDPOINTS.SKILLS}?limit=${limit}`);
    }

}

export default SkillsService;