import React, { FC, lazy, memo, ReactNode } from "react";

const Text = lazy(() => import("./Text"));

interface IProps {
    children: ReactNode;
};

/**
 * @author Istiaque Siddiqi
 */
const SubHeading: FC<IProps> = props => {
    const { children } = props;
    return (
        <Text fontSize="1rem">{children}</Text>
    );
};


export default memo(SubHeading);
