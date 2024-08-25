import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

export interface ContactDTO {
    id: number,
    icon: string,
    name: string,
    alt?: string,
    url?: string,
};

const ContactsService = {
    
    getContacts: async () => {
        return await axios.get<Array<ContactDTO>>(BASE_ENDPOINTS.CONTACTS);
    }

}

export default ContactsService;