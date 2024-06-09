import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

const CertificationsService = {

    getCertifications: async () => {
        return await axios.get(BASE_ENDPOINTS.CERTIFICATIONS);
    }

}

export default CertificationsService;