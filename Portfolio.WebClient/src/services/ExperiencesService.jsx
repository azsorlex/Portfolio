import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

const ExperiencesService = {

    loadExperiences: async () => {
        return await axios.get(BASE_ENDPOINTS.EXPERIENCES);
    }

}

export default ExperiencesService;