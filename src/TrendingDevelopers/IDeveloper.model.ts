
/**
 * @description - Developer model to map response object
 * @author Istiaque Siddiqi
 */
export default interface IDeveloper {
    rank: number;
    username: string;
    name: string;
    url: string;
    avatar: string;
    since: string;
    popularRepository: IPopularRepository;
};

interface IPopularRepository {
    repositoryName: string | null;
    description: string | null;
    url: string | null;
};