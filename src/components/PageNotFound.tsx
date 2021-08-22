import { Box } from "@material-ui/core";
import React, { memo } from "react";

interface IProps {
};

/**
 * @description - Fallback page for invalid page route
 * @author Istiaque Siddiqi
 */
const PageNotFound = (props: IProps) => (<Box color="text.secondary" fontSize="1.25rem" mt={2}>Page Not Found</Box>);

export default memo(PageNotFound);
