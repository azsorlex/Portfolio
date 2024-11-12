import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { ApiResponseType, BaseDTO } from './BaseService';

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

    getExperiences: async (initialValue = false): Promise<ApiResponseType<ExperienceDTO[]>> => {
        return await BaseService.get<ExperienceDTO[]>(BASE_ENDPOINTS.EXPERIENCES, initialValue);
    },

    getCurrentExperiences: async (initialValue = false): Promise<ApiResponseType<ExperienceDTO[]>> => {
        return await BaseService.get<ExperienceDTO[]>(`${BASE_ENDPOINTS.EXPERIENCES}?current=true`, initialValue);
    }

}

export default ExperiencesService;