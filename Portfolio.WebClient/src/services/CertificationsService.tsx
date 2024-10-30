import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { BaseDTO } from './BaseService';

export interface CertificationDTO extends BaseDTO {
    issuer: string,
    parent: null,
    credentialId: string,
    issueDate: string,
    expiryDate?: string,
    url?: string,
};

const CertificationsService = {

    getCertifications: async () => {
        return await BaseService.get<CertificationDTO[]>(BASE_ENDPOINTS.CERTIFICATIONS);
    }

}

export default CertificationsService;