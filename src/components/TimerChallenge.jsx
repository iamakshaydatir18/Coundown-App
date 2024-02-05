import {useState , useRef} from 'react';
import ResultModel from './ResultModel';



export default function TimerChallenge({title,targetTime}){

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining,setTimeRemaining] = useState(targetTime * 1000);
    //const[timeExpired,setTimeExpired] = useState(false);
    //const[timeStarted,setTimeStarted] = useState(false);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function resetTimer(){
        setTimeRemaining(targetTime * 1000);
    }

    function handleTimer(){
       timer.current = setInterval(() =>{
           // setTimeExpired(true);
           setTimeRemaining(previousTime => previousTime - 10);
            
        }
        ,10);
        //setTimeStarted(true);
    }

    function stopTimer(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    return <> 
        <ResultModel ref={dialog} targetTime={targetTime} 
        timeRemaining={timeRemaining}
        onReset={resetTimer}
        />
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ?'s':''}
        </p>
        <p>
            <button onClick={timerIsActive ? stopTimer:handleTimer}>
                {timerIsActive ? 'Stop':'Start'} Challenge
            </button>
        </p>
        <p className={timerIsActive?'active':undefined}>
            {timerIsActive ? 'Timer is running...': 'timer is inactive'}
        </p>
    </section>
    </>
}