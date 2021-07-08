import React, { FC, lazy, memo } from "react";

const Text  = lazy(() => import("./Text"));

interface IProps {
};

/**
 * @author Istiaque Siddiqi
 */
const PageNotFound: FC<IProps> = props => (<Text fontSize="1.25rem" mt={2}>Page Not Found</Text>);


export default memo(PageNotFound);
