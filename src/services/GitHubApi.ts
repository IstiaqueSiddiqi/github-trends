import Http from "./Http";

/**
 * @description Utility class for GitHub APIs
 * @author Istiaque Siddiqi
 */
export default class GitHubApi {

    /**
     * @description Return list of trending repositories
     * @returns {(Promise<IRepository[]>) | Error}
     */
    static async getTrendingRepositories() {
        try {
            return await (await Http.get('/repositories')).data;
        } catch (error) {
            throw error;
        }
    }

    /**
     * @description Return list of trending developers
     * @returns {(Promise<IDeveloper[]>) | Error}
     */
    static async getTrendingDevelopers() {
        try {
            return await (await Http.get('/developers')).data;
        } catch (error) {
            throw error;
        }
    }
}