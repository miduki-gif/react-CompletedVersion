const DivIncompleteArea ={
    border:"2px solid #aacfd0",
  width:"400px",
  minHeight:"200px",
  padding:"8px",
  margin:"8px",
  borderRadius:"8px"
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
export const IncompleteTodos = (props) =>{
    const { todos, onClickComplete, onClickDelete } = props;
    return(
        <div style={DivIncompleteArea}>
                        <p style={title}>未完了のTODO</p> 
                <ul>
                {/* mapの引数にはループさせたい要素を入れる。li要素をループしてレンダリングさせたい*/}
                {/* ループするときにはループさせたい一位の要素に対してキーを設定する必要がある。何個目の要素かを実際のDOMに反映するときに把握するため*/}
                {/* 単一式の書き方の考え方を活かして（）でくくるとreturnとアロー関数の{}を省略してすっきりと書くことができる。*/}
           
                    {/*リストの何番目かを判断するためにmapの第2引数としてindexを持たせる。*/}
                    {todos.map((todo, index) =>
                       (
                                <li key={todo}>
                                <div style={DivStyle}>
                                    <p style={ListPstyle}>{todo}</p> 
                                    <button onClick={() => onClickComplete(index)}>完了</button>  
                                     {/*削除ボタンを押したときに関数を実行するが新しく関数を作成して作成した関数の中身で関数を実行してその引数としてindexを持たせる。←この書き方をしないと関数を読み取った時点でループしてしまうから。*/}
                                    <button onClick={() => onClickDelete(index)}>削除</button>  
                                </div>
                              </li>
                        )
                    )}   
                </ul>
                </div>
    );
}