import React, { FC, memo } from "react";
import { Box } from "@material-ui/core";

interface IProps {
    flexDirection?: string;
    p?: number;
    px?: number;
    children: React.ReactNode
};

/**
 * @author Istiaque Siddiqi
 */
const Center: FC<IProps> = props => {
    const { children, flexDirection = "row", p, px } = props;
    return (
        <Box display="flex" alignItems="center" flexDirection={flexDirection} p={p} px={px}>
            {children}
        </Box>
    );
};


export default memo(Center);
