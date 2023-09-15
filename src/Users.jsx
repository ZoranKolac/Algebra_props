import React from 'react';

const Users = ({users, children}) => {
    return (
        <div>
            {children}&nbsp;
            {
                users.lenght > 0
                ? "Ime:" + users.join(', ')                              
                : "Nema korisnika"
            }
        </div>
    );
};

export default Users; 