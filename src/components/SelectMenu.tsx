import { MenuItem, TextField } from '@material-ui/core';
import React, { memo } from 'react';

interface IProps {
    value: string;
};

/**
 * @description Select component .i.e. drop-down box
 * @author Istiaque Siddiqi
 */
const SelectMenu = (props: IProps) => {
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

