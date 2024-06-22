import { useState } from 'react';
import './styles.css';

export const Todo =() => {
     {/*追加ボタンを押したら未完了のTODOに移動するための状態管理*/}
    const [todoText, setTodoText] = useState("");
        {/* Stateを使った形での画面のマークアップ*/}
        const [incompleteTodos, setIncompleteTodos] = useState([]);
        const [completeTodos, setcompleteTodos] = useState([]);
      {/* Onchage等のイベントで今回であればinputの値が変化したときに発火してeventに情報が渡ってきて、event.target.valueという風にすると実際の入力した値を取得することができる。*/}
        const onChangeTodoText = (event) => setTodoText(event.target.value);

        const onClickAdd = () =>{
            {/*if文も一行で書くときに｛｝省略できる。*/}
             {/*returnで処理を終了→ボタンを押してもリストに追加されないようにする。*/}
            if (todoText === "" )return;
            {/*未完了のリストに入力したテキストを配列の中に追加して新しい配列を生成する。*/}
            const newTodos = [...incompleteTodos, todoText];
            setIncompleteTodos(newTodos);
            setTodoText("");
        }

            {/*削除ボタンを押したときにリストの何番目かを探して未完了リストから削除する。*/}
        const onClickDelete = (index) =>{
            const newTodos = [...incompleteTodos]
            {/*配列の何番目の要素で該当の要素を何個消すかという判定*/}
            newTodos.splice(index, 1);
            {/*未完了リストを更新*/}
            setIncompleteTodos(newTodos);
        }

        const onClickComplete = (index) =>{
            const newIncompleteTodos = [...incompleteTodos];
            newIncompleteTodos.splice(index, 1);
            const newColmpleteTodos = [...completeTodos,incompleteTodos[index]];
            setIncompleteTodos(newIncompleteTodos);
            setcompleteTodos(newColmpleteTodos);
        }

        const onClickBack = (index) =>{
            const newCompleteTodos = [...completeTodos];
            newCompleteTodos.splice(index,1);
         
            const newInColmpleteTodos = [...incompleteTodos, completeTodos[index]];
            setcompleteTodos(newCompleteTodos);
            setIncompleteTodos(newInColmpleteTodos);
        }
        return(
                <>
                <div className="input-area">
                        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/> 
                        <button onClick={onClickAdd}>追加</button>
                </div> 
                <div className="incomplete-area">
                        <p className="title">未完了のTODO</p> 
                <ul>
                {/* mapの引数にはループさせたい要素を入れる。li要素をループしてレンダリングさせたい*/}
                {/* ループするときにはループさせたい一位の要素に対してキーを設定する必要がある。何個目の要素かを実際のDOMに反映するときに把握するため*/}
                {/* 単一式の書き方の考え方を活かして（）でくくるとreturnとアロー関数の{}を省略してすっきりと書くことができる。*/}
           
                    {/*リストの何番目かを判断するためにmapの第2引数としてindexを持たせる。*/}
                    {incompleteTodos.map((todo, index) =>
                       (
                                <li key={todo}>
                                <div className="list-row">
                                    <p className="todo-item">{todo}</p> 
                                    <button onClick={() => onClickComplete(index)}>完了</button>  
                                     {/*削除ボタンを押したときに関数を実行するが新しく関数を作成して作成した関数の中身で関数を実行してその引数としてindexを持たせる。←この書き方をしないと関数を読み取った時点でループしてしまうから。*/}
                                    <button onClick={() => onClickDelete(index)}>削除</button>  
                                </div>
                              </li>
                        )
                    )}   
                </ul>
                </div>
                <div className="complete-area">
                    <p className="title">完了のTODO</p> 
                <ul>
                {completeTodos.map((todo, index) =>
                       (
                                <li key={todo}>
                                <div className="list-row">
                                    <p className="todo-item">{todo}</p> 
                                    <button onClick={() => onClickBack(index)}>戻す</button>  
                                </div>
                              </li>
                        )
                    )}   
                </ul>
                </div>
                </>
        );
};