import React, { createContext } from 'react';

const use = {id : null, email : null, session : false} ;

const UserContext = createContext(use);

const UserProvider = ({children}) => {

    return (
        <UserContext.Provider value={use}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}