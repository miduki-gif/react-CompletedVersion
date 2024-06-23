const style = {
    backgroundColor:"#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius:"8px"
}
const inputStyle={
    borderRadius:"8px",
  border:"none",
  padding:"6px 16px",
}
export const InputTodo = (props) =>{
    {/*propsを分割代入で受け取る*/}
    const  {todoText,onChange, onClick, disabled } = props;
    return(
        <div style={style}>
        <input disabled={disabled} style={inputStyle}
         placeholder="TODOを入力" 
        value={todoText} 
        onChange={onChange}
        /> 
        <button disabled={disabled} onClick={onClick}>追加</button>
</div> 
    );
}