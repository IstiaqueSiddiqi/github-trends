import { MenuItem, TextField } from '@material-ui/core';
import React, { FC, memo } from 'react';

interface IProps {
    value: string;
};

/**
 * @author Istiaque Siddiqi
 */
const SelectMenu: FC<IProps> = props => {
    const { value } = props;
    return (
        <TextField
            id="demo-simple-select"
            value=""
            select
            InputProps={{
                disableUnderline: true
            }}
            SelectProps={{
                displayEmpty: true, label: null
            }}
            disabled
        >
            <MenuItem value="">{value}</MenuItem>
        </TextField>
    );
};

export default memo(SelectMenu);

