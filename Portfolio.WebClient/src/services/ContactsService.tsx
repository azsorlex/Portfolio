import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { BaseDTO } from './BaseService';

export interface ContactDTO extends BaseDTO {
    id: number,
    icon: string,
    name: string,
    alt?: string,
    url?: string,
};

const ContactsService = {
    
    getContacts: async () => {
        return await BaseService.get<ContactDTO[]>(BASE_ENDPOINTS.CONTACTS);
    }

}

export default ContactsService;