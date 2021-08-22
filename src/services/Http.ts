import axios, { AxiosRequestConfig } from "axios";

/**
 * @description Helper methods for all HTTP methods
 * @author Istiaque Siddiqi
 */
export default class Http {

    /**
     * 
     * @param apiEndpoint 
     * @param config 
     * @returns {(Promise<any> | Error)}
     */
    static async get(apiEndpoint: string, config: AxiosRequestConfig = {
        headers: {
            "Accept": "application/json"
        }
    }) {
        try {
            return await axios.get(apiEndpoint, config);
        } catch (error) {
            throw error;
        }
    }
}