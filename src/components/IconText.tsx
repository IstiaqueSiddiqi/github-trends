import React, { FC, lazy, memo, ReactNode } from "react";
import { Box } from "@material-ui/core";

const Text  = lazy(() => import('./Text'));

interface IProps {
    icon: ReactNode;
    text: string | number | null;
    fontSize?: string;
    fontWeight?: number;
    color?: string;
    mr?: number;
    mt?: number;
};

/**
 * @author Istiaque Siddiqi
 */
const IconText: FC<IProps> = props => {
    const { icon, text, fontSize, fontWeight, color, mr = 0.5, mt } = props;
    return (
        <Box display="flex" fontSize={fontSize} fontWeight={fontWeight}>
            <Box mr={mr}>{icon}</Box>
            <Text color={color} mt={mt}>{text}</Text>
        </Box>
    )
}

export default memo(IconText);
