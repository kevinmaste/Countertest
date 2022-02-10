import React, {useEffect, useState} from 'react';
import CountdownComponent from "./components/CountdownComponent";


const Countdown = () => {
   const nbNumber = 0
    const [nb,setNb]=useState(nbNumber)
    const minute = 0
    const [counterDown, setCountdown]  =useState(30)

    //that was about the test for take my timer variable
    //const myRef = useRef<any>()
    //myRef.current = counterDown

    /**
     * i have done all here that means when my counterDowwn inferior to 0  , i decrements the counterDown initial value
     * after we verify if it's equal to 0 , after that we restart the counterDown to 30 and apply the onDone function
     * */
    useEffect(()=>{
       const timer:any =
           counterDown >0 && setInterval(()=>setCountdown(counterDown-1),1000)
        counterDown === 0 && setCountdown(30)
        counterDown ===0 && onDone()
        return ()=> clearInterval(timer)
        },[counterDown])

    //this function it's about incrementation
    const onDone = () =>{
            setNb(nb+1)
            //setCountdown(30)
        }
    return (
        <div>
            <CountdownComponent nb={nb} onDone={onDone}/>
            <div style={{textAlign:"center"}}>
                    <>
                        <p>
                            <strong>{minute}:{counterDown < 10 ? `0${counterDown}` :counterDown}s </strong>
                        </p>
                        <div style={{textAlign:"center"}}>
                            {(counterDown <=3 && counterDown >0 )
                            &&
                            (
                                <p style={{fontWeight:"bold"}}> il vous reste
                                <strong style={{color:"red"}}> {counterDown}S</strong>
                                </p>
                            ) }
                        </div>
                    </>
            </div>
        </div>
    );

};

export default Countdown;
