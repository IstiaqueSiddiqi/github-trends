import React, { lazy, memo } from 'react';
import IRepository from './IRepository.model';
import GitHubApi from '../services/GitHubApi';
import { useQuery } from "react-query";
import { Box, Divider, LinearProgress, List } from '@material-ui/core';

const Page = lazy(() => import('../components/Page'));
const SelectMenu = lazy(() => import('../components/SelectMenu'));
const RepoListItem = lazy(() => import('./RepoListItem'));

/**
 * @description - Valid props for TrendingRepositories component
 */
interface IProps {
};



/**
 * @description - Component to show list of trending repositories
 * @param props - Accepts props the component
 * @author Istiaque Siddiqi
 */
const TrendingRepositories = (props: IProps) => {
    const { status, error, data = [] } = useQuery<IRepository[], Error>(['repositories'], GitHubApi.getTrendingRepositories, {
        staleTime: 0
    });

    if (status === 'loading') return <LinearProgress color="secondary" />

    return (
        <>
            {
                (status === 'error' && error) &&
                <Box mt={2} fontSize="1rem">{error}</Box>
            }
            {
                (status === 'success') &&
                <Page title="Trending" description="See what the GitHub community is most excited about today.">
                    <>
                        <Box display="flex" alignItems="center" px={2}>
                            <label>Spoken Language: </label>
                            <SelectMenu value="Any" />
                        </Box>
                        <Box display="flex" alignItems="center" px={2}>
                            <label>Language: </label>
                            <SelectMenu value="Any" />
                        </Box>
                        <Box display="flex" alignItems="center" px={2}>
                            <label>Date Range: </label>
                            <SelectMenu value="Any" />
                        </Box>
                    </>
                    <List component="ul" aria-label="trending list" disablePadding>
                        {data.map(eachItem => {
                            return (
                                <React.Fragment key={eachItem.repositoryName}>
                                    <Box p={2}>
                                        <RepoListItem repoDetails={eachItem} />
                                    </Box>
                                    <Divider />
                                </React.Fragment>
                            )
                        })}
                    </List>
                </Page>
            }
        </>
    )
};

export default memo(TrendingRepositories);
