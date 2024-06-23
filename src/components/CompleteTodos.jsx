const DivCompleteArea ={
    border:"2px solid #aacfd0",
  width:"400px",
  minHeight:"200px",
  padding:"8px",
  margin:"8px",
  borderRadius:"8px",
  backgroundColor:"#c9dede"
}

const title ={
    textAlign:"center",
  marginTop:"0",
  fontWeight:"bold"
}
const DivStyle ={
    display:"flex",
    alignItems:"center"
}
const ListPstyle ={
    margin:"6px"
}
export const CompleteTodos = (props) =>{
    const { todos, onClickBack } =props;
    return(
        <div style={DivCompleteArea}>
                    <p style={title}>完了のTODO</p> 
                <ul>
                {todos.map((todo, index) =>
                       (
                                <li key={todo}>
                                <div style={DivStyle}>
                                    <p style={ListPstyle}>{todo}</p> 
                                    <button onClick={() => onClickBack(index)}>戻す</button>  
                                </div>
                              </li>
                        )
                    )}   
                </ul>
                </div>
    );
}