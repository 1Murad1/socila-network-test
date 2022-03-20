import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return (
            <Component {...props} />
        );
    }
    let withAuthRedirectContainerComponent = connect(mapStateToProps)(RedirectComponent);
    return withAuthRedirectContainerComponent
}