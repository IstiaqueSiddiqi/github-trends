import { Button } from '@material-ui/core';
import React, { FC, memo, ReactNode } from 'react';

interface IProps {
  startIcon?: ReactNode;
  btnText?: string;
};

/**
 * @author Istiaque Siddiqi
 */
const ButtonWithIcon: FC<IProps> = props => {
  const { btnText, startIcon } = props;

  return (
    <Button
      variant="outlined"
      color="secondary"
      size="small"
      startIcon={startIcon}
      disableElevation
    >
      {btnText}
    </Button>
  )
}

export default memo(ButtonWithIcon);