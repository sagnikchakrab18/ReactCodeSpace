import React from 'react';

const UpdComp = OriginalComp =>{
    class NewComp extends React.Component{
        render(){
            return <OriginalComp name="Byas"></OriginalComp>;
        }
    }
    return NewComp;
}
export default UpdComp;