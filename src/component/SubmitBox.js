import '../component/css/style.css';
const SubmitBox = ({ input, value }) => {
  return (
    <div className="input_wrapper">
      <div className="input">
        <input type="date" className="input_area" onChange={input} value={value}/>
      </div>
    </div>
  )
}
export default SubmitBox;
