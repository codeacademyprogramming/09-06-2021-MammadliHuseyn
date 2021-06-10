import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { ISelector } from '../types/useSelectorType';

interface IProps {
    children: any;
    exact:boolean;
    path:string;
}

export const AuthRouter: React.FC<IProps> = ({ children, ...rest }) => {
    const user = useSelector((state: ISelector) => state.user)

    return user._id ? (
        <Route {...rest}>
            {children}
        </Route>
    ) : <Redirect to="/login" />
}
