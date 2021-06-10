import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { ISelector } from '../../types/useSelectorType';
import { MusicNote } from '@material-ui/icons';
import { IUser } from '../../types/types';
import { login as loginAct } from './../../store/user/actions';

export const Login = () => {
    const user = useSelector((state: ISelector) => state.user);
    const [loginUser, setLoginUser] = React.useState<IUser>({ username: '', password: '' });
    const dispatch = useDispatch();

    const inputChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setLoginUser(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const loginHandler = (e: any) => {
        e.preventDefault();
        dispatch(loginAct(loginUser));
    }

    return !user._id ? (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key">
                        <MusicNote className="music-note" />
                    </div>
                    <div className="col-lg-12 login-title">
                        LOGIN
                </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form onSubmit={loginHandler}>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input name="username" type="text" className="form-control"
                                        value={loginUser.username}
                                        onChange={inputChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input name="password" type="password" className="form-control"
                                        value={loginUser.password}
                                        onChange={inputChangeHandler} />
                                </div>

                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2"></div>
                </div>
            </div>
        </div>
    ) : <Redirect to="/" />
}
