import { Box, Button, ButtonGroup, Container } from '@material-ui/core';
import React, { memo, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * @description - Props for PageTitle component
 * @author Istiaque Siddiqi
 */
interface IProps {
    title: string;
    description: string;
    children: ReactNode[];
};

/**
 * @description - Page component shows page title
 * @param props - IProps
 * @author Istiaque Siddiqi
 */
const Page = (props: IProps) => {
    const { pathname } = useLocation();
    const { title, description, children } = props;

    return (
        <>
            <main>
                <Box pb={5}>
                    <section>
                        <Box /* bgcolor="#f6f8fa" */ display="flex" alignItems="center" flexDirection={'column'} p={5} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="divider">
                            <Box component="span" fontSize={"2rem"} fontWeight={600}>{title}</Box>
                            <Box color="text.secondary" component="span" fontSize={"1rem"}>{description}</Box>
                        </Box>
                    </section>

                    {/* PAGE SECTION */}
                    <Container component="section" maxWidth="lg">
                        <Box pt={5}>
                            <Box border={1} borderRadius="borderRadius" borderColor="divider">
                                {/* NAVIGATION & FILTERS */}
                                <Box component="nav" p={2} bgcolor="#21262d" border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="divider">
                                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                                        <ButtonGroup disableElevation size="small" aria-label="navigation button">
                                            <Button href="/" color="secondary" variant={pathname === "/" ? "contained" : "outlined"} aria-label="trending repository button">Repositories</Button>
                                            <Button href="/developers" color="secondary" variant={pathname === "/developers" ? "contained" : "outlined"} aria-label="trending developers button">Developers</Button>
                                        </ButtonGroup>
                                        <Box display="flex" color="text.secondary" flexWrap="wrap" fontSize="0.875rem">
                                            {children[0]}
                                        </Box>
                                    </Box>
                                </Box>
                                {children[1]}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </main>
        </>
    )
}

export default memo(Page);