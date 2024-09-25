import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

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
        return await axios.get<QualificationDTO[]>(BASE_ENDPOINTS.QUALIFICATIONS);
    }

}

export default QualificationsService;