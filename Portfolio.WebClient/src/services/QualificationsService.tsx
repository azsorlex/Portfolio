import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService from './BaseService';

export interface QualificationDTO {
    id: number,
    name: string,
    institution: string,
    qualificationLevel: string,
    startDate: string,
    endDate?: string,
}

const QualificationsService = {

    getQualifications: async () => {
        return await BaseService.get<QualificationDTO[]>(BASE_ENDPOINTS.QUALIFICATIONS);
    }

}

export default QualificationsService;