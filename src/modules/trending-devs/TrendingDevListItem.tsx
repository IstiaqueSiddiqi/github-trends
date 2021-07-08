import React, { FC, lazy, memo } from "react";
import { Avatar, Box, Grid, Link } from "@material-ui/core";
import { IDeveloper } from "./Developer.model";
import { GitRepoIcon, PopularRepoIcon } from '../../components/Icons';

// Lazy loaded component
const ButtonWithIcon = lazy(() => import("../../components/ButtonWithIcon"));
const Text = lazy(() => import('../../components/Text'));
const IconText = lazy(() => import("../../components/IconText"));

interface IProps {
    developer: IDeveloper;
};

/**
 * @author Istiaque Siddiqi
 */
const TrendingDevListItem: FC<IProps> = props => {
    const { developer: { rank, username, name, avatar, popularRepository } } = props;

    return (
        <>
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
                                                <Text fontWeight={600} fontSize="1.25rem" lineHeight="1.25" color="secondary.main">{name}</Text>
                                            </Link>
                                            <Link component="p" color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                                                <Text fontSize="1rem" fontWeight={400}>{username}</Text>
                                            </Link>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Box display="flex" flexDirection="column">
                                            <IconText icon={<PopularRepoIcon />} text={"POPULAR REPO"} fontSize="0.75rem" />
                                            <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                                                <IconText icon={<GitRepoIcon />} text={popularRepository.repositoryName} fontSize="1rem" fontWeight={600} color="secondary.main" mt={-0.5} />
                                            </Link>
                                            <Text fontSize="0.75rem">{popularRepository.description}</Text>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <ButtonWithIcon btnText="Follow" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
};

export default memo(TrendingDevListItem);