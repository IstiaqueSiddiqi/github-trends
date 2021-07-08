/**
 * @author Istiaque Siddiqi
 */
export interface IRepository {
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

/**
 * @author Istiaque Siddiqi
 */
export interface IBuiltBy {
    username: string;
    url: string;
    avatar: string;
};