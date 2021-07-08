import React, { FC, lazy, memo } from "react";
import { Box } from "@material-ui/core";

const SelectMenu = lazy(() => import("./SelectMenu"));

interface IProps {
    label: string;
    value: string;
};

/**
 * @author Istiaque Siddiqi
 */
const Filter: FC<IProps> = ({ label, value = '' }) => (<>
    <Box>
        {label}:
    </Box>
    <Box>
        <SelectMenu value={value} />
    </Box>
</>)

export default memo(Filter);
