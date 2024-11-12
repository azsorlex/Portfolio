import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';
import BaseService, { ApiResponseType, BaseDTO } from './BaseService';

export interface ContactDTO extends BaseDTO {
    id: number,
    icon: string,
    name: string,
    alt?: string,
    url?: string,
};

const ContactsService = {

    getContacts: async (initialValue = false): Promise<ApiResponseType<ContactDTO[]>> => {
        return await BaseService.get<ContactDTO[]>(BASE_ENDPOINTS.CONTACTS, initialValue);
    }

}

export default ContactsService;