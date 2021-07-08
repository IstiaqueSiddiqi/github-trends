import React, { FC, lazy, memo, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Divider, Container, Box, ButtonGroup, Button } from "@material-ui/core";

const Center = lazy(() => import("./Center"));
const Filter = lazy(() => import("./Filter"));
const Heading = lazy(() => import("./Heading"));
const SubHeading = lazy(() => import("./SubHeading"));

interface IProps {
    children: ReactNode;
    subHeadingText: string;
};

/**
 * @author Istiaque Siddiqi
 */
const PageFragment: FC<IProps> = props => {
    const { pathname } = useLocation();
    const { subHeadingText, children } = props;

    return (
        <>
            {/* HEADER */}
            <Center flexDirection="column" p={5}>
                <Heading>Trending</Heading>
                <SubHeading>{subHeadingText}</SubHeading>
            </Center>
            <Divider />

            {/* PAGE SECTION */}
            <Container maxWidth="lg">
                <Box component="main" pt={5}>
                    <Box border={1} borderRadius="borderRadius" borderColor='#30363d'>
                        {/* NAVIGATION & FILTERS */}
                        <Box component="nav" p={2} bgcolor="#161b22">
                            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                                <ButtonGroup size="small" aria-label="navigation button">
                                    <Button href="/" color="secondary" variant={pathname === "/" ? "contained" : "outlined"} aria-label="trending repository button">Repositories</Button>
                                    <Button href="/developers" color="secondary" variant={pathname === "/developers" ? "contained" : "outlined"} aria-label="trending developers button">Developers</Button>
                                </ButtonGroup>
                                <Box display="flex" color="#8b949e" flexWrap="wrap">
                                    {
                                        pathname !== "/developers" && (
                                            <Center px={2}>
                                                <Filter label="Spoken Language" value="Any" />
                                            </Center>
                                        )
                                    }
                                    <Center px={2}>
                                        <Filter label="Language" value="Any" />
                                    </Center>
                                    <Center px={2}>
                                        <Filter label="Date Range" value="Any" />
                                    </Center>
                                </Box>
                            </Box>
                        </Box>
                        {/* RENDER UI COMPONENT */}
                        {children}
                    </Box>
                </Box>
            </Container>
        </>
    );
};


export default memo(PageFragment);
