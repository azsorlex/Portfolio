import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

export interface ExperienceDTO {
    id: string,
    type: string,
    name: string,
    company?: string,
    location?: string,
    skills?: Array<string>,
    descriptionLines?: Array<string>,
    media?: Array<MediaDTO>,
    startDate?: string,
    endDate?: string,
};

export interface MediaDTO {
    title: string,
    description?: string,
    url?: string,
};

const ExperiencesService = {

    getExperiences: async () => {
        return await axios.get<Array<ExperienceDTO>>(BASE_ENDPOINTS.EXPERIENCES);
    },

    getCurrentExperiences: async () => {
        return await axios.get<Array<ExperienceDTO>>(`${BASE_ENDPOINTS.EXPERIENCES}?current=true`);
    }

}

export default ExperiencesService;