import React, { FC, lazy, memo, ReactNode } from "react";

const Text = lazy(() => import("./Text"));

interface IProps {
    children: ReactNode;
};

/**
 * @author Istiaque Siddiqi
 */
const Heading: FC<IProps> = props => {
    const { children } = props;
    return (
        <Text fontSize="2rem" fontWeight={600} color="#c9d1d9">{children}</Text>
    );
};


export default memo(Heading);
