import React from 'react';

const UpdatedComp = OriginalComp => {
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name="Sagnik" date="12-Mar-21~~Shivratri"></OriginalComp>;
        }
    }
    return NewComp;
}

export default UpdatedComp;