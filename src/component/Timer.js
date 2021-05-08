import './css/style.css';

const Timer = ({ days, hr, min, sec, expire }) => {
  return (
    <div>
      {!expire ?
        <div className="">
          <div className="timer_wrapper">
            <div className="time">
              <span>{days < 10 ? "0" + days : days}</span>
              <p className="text">DAYS</p>
            </div>
            <div className="time">
              <span>{hr < 10 ? "0" + hr : hr}</span>
              <p className="text">HOURS</p>
            </div>
            <div className="time">
              <span>{min < 10 ? "0" + min : min}</span>
              <p className="text">MINUTES</p>
            </div>
            <div className="time">
              <span>{sec < 10 ? "0" + sec : sec}</span>
              <p className="text">SECONDS</p>
            </div>
          </div>
        </div> : <div><h4 style={{fontSize:"2rem"}}>{expire}</h4></div>
      }
  </div>
  )
}
export default Timer;