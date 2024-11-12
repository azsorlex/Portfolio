import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { ApiResponseType } from './BaseService';

export interface QualificationDTO {
    id: number,
    name: string,
    institution: string,
    qualificationLevel: string,
    startDate: string,
    endDate?: string,
}

const QualificationsService = {

    getQualifications: async (initialValue = false): Promise<ApiResponseType<QualificationDTO[]>> => {
        return await BaseService.get<QualificationDTO[]>(BASE_ENDPOINTS.QUALIFICATIONS, initialValue);
    }

}

export default QualificationsService;