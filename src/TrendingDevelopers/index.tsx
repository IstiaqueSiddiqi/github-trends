import { Box, Divider, LinearProgress, List } from '@material-ui/core';
import React, { lazy, memo } from 'react';
import { useQuery } from 'react-query';
import GitHubApi from '../services/GitHubApi';
import IDeveloper from './IDeveloper.model';

const Page = lazy(() => import('../components/Page'));
const SelectMenu = lazy(() => import('../components/SelectMenu'));
const DevListItem = lazy(() => import('./DevListItem'));

/**
 * @description - Valid props for TrendingDevelopers component
 */
interface ITrendingDevelopers {
};


/**
 * @description - Component to show list of trending developers
 * @param props - Accepts props the component
 * @author Istiaque Siddiqi
 */
const TrendingDevelopers = (props: ITrendingDevelopers) => {
    const { status, error, data = [] } = useQuery<IDeveloper[], Error>(['developers'], GitHubApi.getTrendingDevelopers, {
        staleTime: 60000
    });

    if ((status === 'loading')) return <LinearProgress color="secondary" />

    return (
        <>
            {
                (status === 'error' && error) &&
                <Box mt={2} fontSize="1rem">{error}</Box>
            }
            {
                (status === 'success') &&
                <Page title="Trending" description="These are the developers building the hot tools today.">
                    <>
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
                        {data.map(eachDev => {
                            return (
                                <React.Fragment key={eachDev.username}>
                                    <Box p={2}>
                                        <DevListItem devDetails={eachDev} />
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

export default memo(TrendingDevelopers);
