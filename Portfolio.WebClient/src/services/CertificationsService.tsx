import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

export interface CertificationDTO {
    id: number,
    name: string,
    issuer: string,
    parent: null,
    credentialId: string,
    issueDate: string,
    expiryDate?: string,
    url?: string,
};

const CertificationsService = {

    getCertifications: async () => {
        return await axios.get<CertificationDTO[]>(BASE_ENDPOINTS.CERTIFICATIONS);
    }

}

export default CertificationsService;