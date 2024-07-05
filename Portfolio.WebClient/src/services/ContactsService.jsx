import axios from 'axios';
import BASE_ENDPOINTS from '../data/constants/BaseEndpoints';

const ContactsService = {

    getContacts: async () => {
        return await axios.get(BASE_ENDPOINTS.CONTACTS);
    }

}

export default ContactsService;