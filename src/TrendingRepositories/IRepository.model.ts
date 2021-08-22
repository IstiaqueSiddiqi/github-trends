
/**
 * @description - Repository model to map response object
 * @author Istiaque Siddiqi
 */
export default interface IRepository {
    rank: number;
    username: string;
    repositoryName: string;
    url: string;
    description: string;
    language: string | null;
    languageColor: string | null;
    totalStars: number;
    forks: number;
    starsSince: number;
    since: string;
    builtBy: IBuiltBy[];
};

interface IBuiltBy {
    username: string;
    url: string;
    avatar: string;
};
