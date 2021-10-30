import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
import loading from '../../images/loading.gif'

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <div className="text-center pt-5 w-75 mx-auto"><img src={loading} alt="" className="img-fluid" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName || user.email ? (
                    children
                ) : (

                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;