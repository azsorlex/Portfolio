import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

const ExperiencesService = {

    getExperiences: async () => {
        return await axios.get(BASE_ENDPOINTS.EXPERIENCES);
    },

    getCurrentExperiences: async () => {
        return await axios.get(`${BASE_ENDPOINTS.EXPERIENCES}?current=true`);
    }

}

export default ExperiencesService;