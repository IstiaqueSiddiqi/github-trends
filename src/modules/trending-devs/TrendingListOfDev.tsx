import React, { FC, lazy, memo } from "react";
import { Box, Divider, LinearProgress, List } from "@material-ui/core";
import { useQuery } from "react-query";
import { IDeveloper } from "./Developer.model";
import { ApiService } from "../../services/ApiService";

// Lazy loaded component
const TrendingDevListItem = lazy(() => import("./TrendingDevListItem"));
const PageFragment = lazy(() => import("../../components/PageFragment"));
const Text = lazy(() => import('../../components/Text'));

interface IProps { };

/**
 * @author Istiaque Siddiqi
 */
const TrendingListOfDev = (props: IProps) => {
    const { isLoading, error, data = [], status } = useQuery<IDeveloper[], Error>('trendingDev', ApiService.getTrendingDevelopers);
    
    // const repoList: IDeveloper[] = [];
    // const [data, setTrendingList]: [IDeveloper[], (lists: IDeveloper[]) => void] = useState(repoList);

    // useEffect(() => {
    //     (async () => {
    //         setTrendingList(await ApiService.getTrendingDevelopers())
    //     })();
    // }, []);

    if(isLoading) return <LinearProgress color="secondary" />

    return (
        <PageFragment subHeadingText="These are the developers building the hot tools today.">
            {
                error?.message && (
                    <Text mt={2} fontSize="1rem">{error.message}</Text>
                )
            }
            <List component="ul" aria-label="trending list" disablePadding>
                {data.map(eachDev => {
                    return (
                        <React.Fragment key={eachDev.username}>
                            <Box p={2}>
                                <TrendingDevListItem developer={eachDev} />
                            </Box>
                            <Divider />
                        </React.Fragment>
                    )
                })}
            </List>
        </PageFragment>
    );
};

export default memo(TrendingListOfDev);