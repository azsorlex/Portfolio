import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { ApiResponseType, BaseDTO } from './BaseService';

export interface SkillDTO extends BaseDTO {
    type: string,
    priority: number,
};

const SkillsService = {

    getSkills: async (initialValue: boolean = false): Promise<ApiResponseType<SkillDTO[]>> => {
        return await BaseService.get<SkillDTO[]>(BASE_ENDPOINTS.SKILLS, initialValue);
    },

    getTopSkills: async (limit: number, initialValue: boolean = false): Promise<ApiResponseType<SkillDTO[]>> => {
        return await BaseService.get<SkillDTO[]>(`${BASE_ENDPOINTS.SKILLS}?limit=${limit}`, initialValue);
    }

}

export default SkillsService;