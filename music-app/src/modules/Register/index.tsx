import { MusicNote } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router'
import { IUser } from '../../types/types';
import { ISelector } from '../../types/useSelectorType';
import { register as registerAct } from './../../store/user/actions';

export const Register = () => {
    const user = useSelector((state: ISelector) => state.user);
    const [registerUser, setRegisterUser] = React.useState<IUser>({ username: '', password: '' });
    const { push } = useHistory();
    const inputChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setRegisterUser(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const registerHandler = (e: any) => {
        e.preventDefault();
        registerAct(registerUser);
    }
    const goToLogin = (e: any) => {
        push('/login');
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
                        REGISTER
                    </div>
                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form onSubmit={registerHandler}>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input name="username" type="text" className="form-control"
                                        value={registerUser.username}
                                        onChange={inputChangeHandler} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input name="password" type="password" className="form-control"
                                        value={registerUser.password}
                                        onChange={inputChangeHandler} />
                                </div>

                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="submit" className="btn btn-outline-primary" >Register</button>
                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="button" className="btn btn-outline-primary" onClick={goToLogin}>LOGIN</button>
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
