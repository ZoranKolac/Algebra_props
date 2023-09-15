import React, { useState } from 'react';
import Users from './Users';
import Props from './Props';

const App = () => {
    const [users, setUsers] = useState({});
    
    const handleProps = (props) => {
        setUsers({...users, props})
    }

    return (
        <div>
           <Props handleProps={handleProps}/> 
           <Users users={users}>Korisnici:</Users>            
        </div>
    );
};

export default App;