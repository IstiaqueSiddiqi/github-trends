import React, { FC, lazy, memo, useEffect } from "react";
import { Box, Divider, LinearProgress, List } from "@material-ui/core";
import { useQuery } from "react-query";
import { IRepository } from "./Repository.model";
import { ApiService } from "../../services/ApiService";
import { useState } from "react";

// Lazy loaded component
const TrendingRepoListItem = lazy(() => import("./TrendingRepoListItem"));
const PageFragment = lazy(() => import("../../components/PageFragment"));
const Text = lazy(() => import('../../components/Text'));

interface IProps {
};

/**
 * @author Istiaque Siddiqi
 */
const TrendingListOfRepo = (props: IProps) => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setLoading] = useState(false);

    // const { isLoading, error, data = [], status } = useQuery<IRepository[], Error>('trendingRepo', ApiService.getTrendingRepository);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
            setData(await ApiService.getTrendingRepository());
            } finally {
                setLoading(false);
            }
        })()
    }, []);

    if(isLoading) return <LinearProgress color="secondary" />

    return (
        <PageFragment subHeadingText="See what the GitHub community is most excited about today.">
            {/* {
                error?.message && (
                    <Text mt={2} fontSize="1rem">{error.message}</Text>
                )
            } */}
            <List component="ul" aria-label="trending list" disablePadding>
                {data.map((eachRepository: IRepository) => {
                    return (
                        <React.Fragment key={eachRepository.username}>
                            <Box p={2}>
                                <TrendingRepoListItem repository={eachRepository} />
                            </Box>
                            <Divider />
                        </React.Fragment>
                    )
                })}
            </List>
        </PageFragment>
    );
};

export default memo(TrendingListOfRepo);
