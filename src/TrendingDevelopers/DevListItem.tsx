import { Avatar, Box, Button, Grid, Link } from '@material-ui/core';
import React, { lazy, memo } from 'react';
import IDeveloper from './IDeveloper.model';

const GitRepoIcon = lazy(() => import('../icons/GitRepoIcon'));
const PopularRepoIcon = lazy(() => import('../icons/PopularRepoIcon'));

/**
 * @description - Valid props for DevListItem component
 */
interface IProps {
    devDetails: IDeveloper;
};


/**
 * @description - List item layout to show each developer details
 * @param props - Accepts props the component
 * @author Istiaque Siddiqi
 */
const DevListItem = (props: IProps) => {
    const { devDetails: { rank, username, name, avatar, popularRepository } } = props;
    return (
        <Box display="flex">
            <Box component="span">{rank}</Box>
            <Box mx={2}><Avatar alt="Profile-pic" src={avatar} /></Box>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Grid container justifyContent="space-between">

                        <Grid item xs={8}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Box display="flex" flexDirection="column">
                                        <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                                            <Box component="span" fontWeight={600} fontSize="1.25rem" lineHeight="1.25" color="secondary.main">{name}</Box>
                                        </Link>
                                        <Link component="p" color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                                            <Box component="span" color="text.secondary" fontSize="1rem" fontWeight={400}>{username}</Box>
                                        </Link>
                                    </Box>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box display="flex" flexDirection="column">
                                        <Box display="flex" fontSize={"0.75rem"}>
                                            <Box mr={0.5}><PopularRepoIcon /></Box>
                                            <Box component="span" color="text.secondary">{"POPULAR REPO"}</Box>
                                        </Box>
                                        <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                                            <Box display="flex" fontSize={"1rem"} fontWeight={600}>
                                                <Box mr={0.5}><GitRepoIcon /></Box>
                                                <Box component="span" color={"secondary.main"} mt={-0.5}>{popularRepository.repositoryName}</Box>
                                            </Box>
                                        </Link>
                                        <Box fontSize="0.75rem">{popularRepository.description}</Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Button
                                variant="outlined"
                                color="secondary"
                                size="small"
                                disableElevation
                            >
                                Follow
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default memo(DevListItem);