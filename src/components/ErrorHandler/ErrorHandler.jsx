import React from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

const ErrorHandler = ({isError, children}) => {
    return (
        isError ? (
            <Navigate to ={ROUTES.ERROR_PAGE} />
        ) : (
            {...children}
        )
    )
}

export default ErrorHandler