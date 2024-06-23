import { useState } from 'react';
import './styles.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';


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

        const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;
        return(
                <>
                <InputTodo 
                todoText={todoText} 
                onChange={onChangeTodoText} 
                onClick={onClickAdd}
                disabled={isMaxLimitIncompleteTodos}
                />
                {isMaxLimitIncompleteTodos && (
                    <p style={{color:"red"}}>
                    登録できるTODOは5個までだよ～。消化しろ～。
                    </p>
                )}
                <IncompleteTodos 
                todos={incompleteTodos} 
                onClickComplete={onClickComplete} 
                onClickDelete={onClickDelete}
                />
                <CompleteTodos
                todos={completeTodos}
                onClickBack={onClickBack}
                />
                </>
        );
};