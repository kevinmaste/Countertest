import React, {useEffect} from 'react';

interface ItemProps {
    nb:number,
    onDone:()=>void
}
const CountdownComponent : React.FC<ItemProps> = (props) => {

    // he will refresh the page once , that means my variable nbNumber in the countdown will set to 1 because onDone it's about incrementation
    useEffect(() => {
        props.onDone()
    },[])
    return (
        <div>
            <p style={{textAlign: 'center',marginTop:'25px'}}>Question : <strong>{props.nb}</strong>  </p>
        </div>
    );
};

export default CountdownComponent;
