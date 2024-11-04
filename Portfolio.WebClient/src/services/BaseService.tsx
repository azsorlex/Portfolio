import axios from 'axios';

export interface BaseDTO {
    id: number | string,
    name: string,
};
type ApiValidResponseType = BaseDTO | BaseDTO[];
export type ApiResponseType<T extends ApiValidResponseType> = T | undefined | null;

const cache: Map<string, ApiValidResponseType> = new Map<string, ApiValidResponseType>();

const BaseService = {

    get: async function get<T extends ApiValidResponseType>(endpoint: string, initialValue: boolean = false): Promise<ApiResponseType<T>> {
        if (cache.has(endpoint) || initialValue) {
            if (!initialValue) {
                console.log(`Cache hit for ${endpoint}`);
            }
            return cache.get(endpoint) as ApiResponseType<T>;
        }

        try {
            console.log(`Fetching ${endpoint}...`);
            const response = await axios.get<T>(endpoint);
            cache.set(endpoint, response.data);
            console.log(`${endpoint} fetched.`);
            return response.data as ApiResponseType<T>;
        } catch (error) {
            console.error(error);
            return null;
        }
    },

}

export default BaseService;