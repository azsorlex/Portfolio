import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { BaseDTO } from './BaseService';

export interface ExperienceDTO extends BaseDTO {
    type: string,
    company?: string,
    location?: string,
    skills?: string[],
    descriptionLines?: string[],
    media?: MediaDTO[],
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
        return await BaseService.get<ExperienceDTO[]>(BASE_ENDPOINTS.EXPERIENCES);
    },

    getCurrentExperiences: async () => {
        return await BaseService.get<ExperienceDTO[]>(`${BASE_ENDPOINTS.EXPERIENCES}?current=true`);
    }

}

export default ExperiencesService;