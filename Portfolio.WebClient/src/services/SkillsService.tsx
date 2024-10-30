import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { ApiResponseType, BaseDTO } from './BaseService';

export interface SkillDTO extends BaseDTO {
    type: string,
    priority: number,
};

const SkillsService = {

    getSkills: async (): Promise<ApiResponseType<SkillDTO[]>> => {
        return await BaseService.get<SkillDTO[]>(BASE_ENDPOINTS.SKILLS);
    },

    getTopSkills: async (limit: number): Promise<ApiResponseType<SkillDTO[]>> => {
        return await BaseService.get<SkillDTO[]>(`${BASE_ENDPOINTS.SKILLS}?limit=${limit}`);
    }

}

export default SkillsService;