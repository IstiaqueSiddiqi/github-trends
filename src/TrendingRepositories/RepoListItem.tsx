import { Avatar, Box, Button, createStyles, Link, makeStyles, Theme } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import React, { lazy, memo } from "react";
import IRepository from "./IRepository.model";

const GitForkIcon = lazy(() => import('../icons/GitForkIcon'));
const GitRepoIcon = lazy(() => import('../icons/GitRepoIcon'));
const GitStar = lazy(() => import('../icons/GitStar'));


/**
 * @description - Used to override default styling
 */
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        starIcon: {
            marginTop: '3px',
            marginRight: '0'
        },
        avatarGroup: {
            width: '20px',
            height: '20px'
        }
    }),
);

/**
 * @description - Valid props for RepoListItem component
 */
interface IProps {
    repoDetails: IRepository;
};



/**
 * @description - List item layout to show each repository details
 * @param props - Accepts props the component
 * @author Istiaque Siddiqi
 */
const RepoListItem = (props: IProps) => {
    const classes = useStyles();
    const { repoDetails: { username, repositoryName, description, language, totalStars, forks, starsSince, builtBy } } = props;

    return (
        <>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                    <Box display="flex" fontSize={"1.25rem"} fontWeight={600}>
                        <Box mt={0.5} mr={0.5}>
                            <GitRepoIcon />
                        </Box>
                        <Box component="span" color={"secondary.main"}>{`${username} / ${repositoryName}`}</Box>
                    </Box>
                </Link>
                <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<GitStar />}
                    disableElevation
                    classes={{
                        startIcon: classes.starIcon
                    }}
                >
                    Star
                </Button>
            </Box>
            <Box component="span" color="text.secondary">{description}</Box>
            <Box display="flex" justifyContent="space-between" mt={1} mb={0} flexWrap="wrap">
                <Box display="flex" flexWrap="wrap">
                    <Box mr={2}>
                        <Box component="span" color="text.secondary">{language}</Box>
                    </Box>
                    <Box mr={2}>
                        <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                            <Box display="flex" fontSize={"small"}>
                                <Box mr={0.5}><GitStar /></Box>
                                <Box component="span" color="text.secondary">{totalStars}</Box>
                            </Box>
                        </Link>
                    </Box>
                    <Box mr={2}>
                        <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                            <Box display="flex" fontSize={"small"}>
                                <Box mr={0.5}><GitForkIcon /></Box>
                                <Box component="span" color="text.secondary">{forks}</Box>
                            </Box>
                        </Link>
                    </Box>
                    <Box mr={2}>
                        <Box display="flex">
                            <Box component="span" color="text.secondary">Built by</Box>
                            <AvatarGroup spacing={0} classes={{ avatar: classes.avatarGroup }}>
                                {
                                    builtBy.map((eachItem) => (<Avatar key={eachItem.username} alt={eachItem.username} src={eachItem.avatar} />))
                                }
                            </AvatarGroup>
                        </Box>
                    </Box>
                </Box>
                <Box display="flex">
                    <Box display="flex" alignSelf="center" color="#c9d1d9">
                        <GitStar />
                    </Box>
                    <Box component="span" color="text.secondary">
                        {`${starsSince} stars today`}
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default memo(RepoListItem);


