import React, { lazy, memo } from "react";
import { Avatar, Box, createStyles, Link, makeStyles, Theme } from "@material-ui/core";
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { GitRepoIcon, GitForkIcon } from '../../components/Icons';
import { IRepository, IBuiltBy } from "./Repository.model";

// Lazy loaded component
const ButtonWithIcon = lazy(() => import("../../components/ButtonWithIcon"));
const Text = lazy(() => import('../../components/Text'));
const IconText = lazy(() => import("../../components/IconText"));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        avatarGroup: {
            width: '20px',
            height: '20px'
        }
    }),
);

interface IProps {
    repository: IRepository
};

/**
 * @author Istiaque Siddiqi
 */
const TrendingRepoListItem = (props: IProps) => {
    const classes = useStyles();
    const { repository: { repositoryName, description, language, totalStars, forks, starsSince, builtBy } } = props;

    return (
        <>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                    <IconText mt={-0.5} icon={<GitRepoIcon />} text={repositoryName} fontSize="1.25rem" fontWeight={600} color="secondary.main" />
                </Link>
                <ButtonWithIcon startIcon={<StarOutlineIcon />} btnText="Star" />
            </Box>

            <Text>C{description}</Text>
            <Box display="flex" justifyContent="space-between" mt={1} mb={0} flexWrap="wrap">
                <Box display="flex" flexWrap="wrap">
                    <Box mr={2}><Text>{language}</Text></Box>
                    <Box mr={2}>
                        <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                            <IconText icon={<StarOutlineIcon fontSize="small" />} text={totalStars} mr={0.5} />
                        </Link>
                    </Box>
                    <Box mr={2}>
                        <Link color="secondary" href="#" onClick={(e) => e.preventDefault()} rel="noopener noreferrer">
                            <IconText icon={<GitForkIcon />} text={forks} mr={0.5} />
                        </Link>
                    </Box>
                    <Box mr={2}>
                        <Box display="flex">
                            <Text>Built by</Text>
                            <AvatarGroup spacing={0} classes={{ avatar: classes.avatarGroup }}>
                                {
                                    builtBy.map((eachItem: IBuiltBy) => (<Avatar key={eachItem.username} alt={eachItem.username} src={eachItem.avatar} />))
                                }
                            </AvatarGroup>
                        </Box>
                    </Box>
                </Box>
                <IconText icon={<StarOutlineIcon fontSize="small" />} text={`${starsSince} stars today`} mr={0.5} />
            </Box>
        </>

    )
}

export default memo(TrendingRepoListItem);


