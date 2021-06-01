import * as React from 'react';
import {AuthReducer} from '../Reducers/AuthReducer';
import {TOGGLE_AUTH} from '../Reducers/types';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const {children} = props;
  const [isAuthenticated, dispatch] = React.useReducer(AuthReducer ,[false]);

  React.useEffect(() => {
    alert(isAuthenticated ? 'Login Successful' : 'You are logged out. Please login to see todos')
  }, [isAuthenticated])

  const AuthContextData = {
    isAuthenticated,
    dispatch
  }

  return(
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;