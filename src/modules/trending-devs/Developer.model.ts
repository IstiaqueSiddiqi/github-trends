
/**
 * @author Istiaque Siddiqi
 */
export interface IDeveloper {
    rank: number;
    username: string;
    name: string;
    url: string;
    avatar: string;
    since: string;
    popularRepository: IPopularRepository;
};

/**
 * @author Istiaque Siddiqi
 */
export interface IPopularRepository {
    repositoryName: string | null;
    description: string | null;
    url: string | null;
};