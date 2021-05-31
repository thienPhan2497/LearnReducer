import * as React from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const {children} = props;
  const [isAuthenticated, setAuthenticated] = React.useState(false);

  const toggleAuth = () => {
    setAuthenticated(!isAuthenticated);
  }

  React.useEffect(() => {
    alert(isAuthenticated ? 'Login Successful' : 'You are logged out. Please login to see todos')
  }, [isAuthenticated])

  const AuthContextData = {
    isAuthenticated,
    toggleAuth
  }

  return(
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;