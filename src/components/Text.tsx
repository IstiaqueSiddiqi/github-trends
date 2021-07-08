import React, { FC, memo, ReactNode } from "react";
import { Box } from "@material-ui/core";

interface IProps {
    children: ReactNode,
    fontSize?: string,
    fontWeight?: number,
    color?: string;
    lineHeight?: string;
    mt?: number;
};

/**
 * @author Istiaque Siddiqi
 */
const Text: FC<IProps> = ({ children = '', color = "#8b949e", fontSize, fontWeight, lineHeight, mt }) => <Box mt={mt} color={color} fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight}>{children}</Box>

export default memo(Text);
