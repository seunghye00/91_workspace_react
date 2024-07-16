import { useState } from 'react';
import './App.css';
/*
function App() {
  
  // 모든 UI는 상태에서 파생된다. ==> React의 철학. 즉, React로 개발을 한다면 꼭 지켜야 한다는 의미.
  // UI의 변경은 document.getElementById("counter").innerHTML = count; 이런 식으로 직접 변경하면 안된다.
  // 직접 접근해서 바꾸는 것이 아닌 React의 상태 변수에 의해 바뀌어야 한다.

  let count = 1;

  function plus() {
    count++;
    // console.log(count);
    document.getElementById("counter").innerHTML = count;
  }

  function minus() {
    count--;
    // console.log(count);
    document.getElementById("counter").innerHTML = count;
  }
  
  return (
    <div className="App">
      <div id="counter">{count}</div>
      <hr/>
      <button id="plus" onClick={plus}>+</button>
      <button id="minus" onClick={minus}>-</button>
    </div>
  );
}
*/

/*
function App() {
  // mount : 최초에 Component가 처음으로 그려지는 경우
  // unmount : Component 가 특정 명령에 의해 브라우저에서 아예 제거되는 상황
  // 새로고침 : unmount 후 mount 가능과 같음
  
  let count2 = 10;  // 함수가 다시 호출될 때 새로 선언됨. 값이 변경되지 않음.

  // Destructuring 문법 - 구조 분해 할당
  
  const [count, setCount] = useState(1);  
  // 상태 변수 생성 - 한 번 선언되면 rerendering에 의해서 다시 선언되지 않음.
  // 상태 값이 변경되는 경우 상태 변수를 포함하는 함수가 재호출되는데 이를 rendering이라고 함.
  // Component가 unmount될 때는 초기화됨.

  const handlePlus = () => {
    setCount(count + 1);
    count2++;
  };

  const handleMinus = () => {
    setCount(count - 1);
    count2--;
  };

  return (
    <div className='App'>
      <div>{count} , {count2}</div>  
      <hr/>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
}
*/
/*
function App() {

  const [str, setStr] = useState("기본메세지");

  const handleChange = (e) => {
    setStr(e.target.value);
  }

  return (
    <div>
      <h1>{str}</h1>
      <hr/>
      <div>
        <input type="text" onChange={handleChange}></input>
        <button onClick={() => {alert(str)}}>Popup!</button>
      </div>
    </div>
  );
}
*/
/*
function App() {

  const [messages, setMessages] = useState(["Hello", "React", "State"]); // 문자열 목록 상태 저장

  const [message, setMessage] = useState(''); // 하나의 입력 상태 값

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSave = () => {
    // spread 연산자 : ...배열, ...객체
    setMessages((prev) => {
      // console.log(prev);
      return [...prev, message];
    });
    // setMessages(prev => [...prev, message]);
    setMessage('');
  }

  return (
    <div>
      <ul>
        {
          messages.map((message, index) => {
            return (<li key={index}>{message}</li>);
          })      
        }
        { 
          //messages.map((message, index) => (<li key={index}>{message}</li>);)
        }
      </ul>
      <hr/>
      <input type='text' onChange={handleChange} value={message}></input>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
*/

function App() {
  const [datas, setDatas] = useState([
    {seq:1, writer:"Tom",message:"Hello React"},
    {seq:2, writer:"Sara",message:"React State Practice"},
    {seq:3, writer:"Jack",message:"Object Array"}
  ]);

  // const [seq, setSeq] = useState(0);
  // const [writer, setWriter] = useState('');
  // const [message, setMessage] = useState('');

  // const handleChangeSeq = (e) => {
  //   setSeq(parseInt(e.target.value));
  // }

  // const handleChangeWriter = (e) => {
  //   setWriter(e.target.value);
  // }

  // const handleChangeMessage = (e) => {
  //   setMessage(e.target.value);
  // }

  // ==============================================================
  
  const [data, setData] = useState({seq: 0, writer: '', message: ''});

  // const handleChangeSeq = (e) => {
  //   setData(prev=>({...prev, seq: e.target.value}));
  // }
  // const handleChangeWriter = (e) => {
  //   setData(prev=>({...prev, writer: e.target.value}));
  // }
  // const handleChangeMessage = (e) => {
  //   setData(prev=>({...prev, message: e.target.value}));
  // }

  const handleChange = (e) => {
    let {name, value} = e.target;
    console.log(`${name}, ${value}`);
    setData(prev => ({...prev, [name] : value}));
    // 변수의 값을 key로 사용하고 싶다면 [ ]를 사용하면 된다. 
  }

  const handleSave = () => {
    if(data.seq === '' || data.seq === 0) {
      alert("글 번호를 먼저 입력해주세요");
      return false;
    }
    if(data.writer === '') {
      alert("작성자를 먼저 입력해주세요");
      return false;
    }
    if(data.message === '') {
      alert("글 내용을 먼저 입력해주세요");
      return false;
    }

    // const addData = { seq: data.seq, writer: data.writer, message: data.message };
    
    setDatas(prev => [...prev, data]);
    setData({seq: 0, writer: '', message: ''});
  }

  const [delSeq, setDelSeq] = useState(0);
  const handleDeleteSeq = (e) => {
    setDelSeq(parseInt(e.target.value));
  }

  const handleDelete = () => {
    // delSeq가 삭제 된 목록 세팅
    setDatas(prevDatas => prevDatas.filter(data => data.seq !== delSeq));
    setDelSeq(0);
  }

  const [modiData, setModiData] = useState({seq: 0, writer: '', message: ''});
  const handleModiDataChange = (e) => {
    let {name, value} = e.target;
    // console.log(`${name}, ${value}`);
    setModiData(prev => ({...prev, [name] : value}));
    // 변수의 값을 key로 사용하고 싶다면 [ ]를 사용하면 된다. 
  }

  const handleModi = () => {

    if(modiData.seq === '' || modiData.seq === 0) {
      alert("글 번호를 먼저 입력해주세요");
      return false;
    }
    if(modiData.writer === '') {
      alert("작성자를 먼저 입력해주세요");
      return false;
    }
    if(modiData.message === '') {
      alert("글 내용을 먼저 입력해주세요");
      return false;
    }
    
    // setDatas(prevDatas => {
    //   let result = prevDatas.filter(data => data.seq !== parseInt(modiData.seq));
    //   return ([...result, modiData]);
    // });

    setDatas(prev => prev.map(data => {
        if(data.seq === parseInt(modiData.seq)){
          return modiData;
        }
        return data;
    }));
    setModiData({seq: 0, writer: '', message: ''});
  }

  
  const[searchDatas, setSearchDatas] = useState({});

  const handleSearch = (e) => {
    if(e.target.value !== ''){
      console.log("실행");
      setSearchDatas(prevDatas => prevDatas.filter(data => data.message.includes(e.target.value)));
    }


  }

  return (
    <div className='container'>
      <table className='messages'>
        <thead>  
          <tr>
            <th>글번호</th>
            <th>작성자</th>
            <th>메세지</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((d)=>{
              return (
                <tr key={d.seq}>
                  <td>{d.seq}</td>
                  <td>{d.writer}</td>
                  <td>{d.message}</td>
                </tr>
              );
            })
          }
          <tr>
            <td colSpan={3}>
              {
                ["seq", "writer", "message"].map((item, index) => {
                  return (
                    <input key={index} type="text" name={item} onChange={handleChange} value={data[item] || ''} placeholder={item}></input>
                  );
                })
              }
              {/* <input type='text' placeholder='글번호' name="seq" onChange={handleChange} value={data.seq||''}></input>
              <input type='text' placeholder='작성자' name="writer" onChange={handleChange} value={data.writer}></input>
              <input type='text' placeholder='글내용' name="message" onChange={handleChange} value={data.message}></input> */}
              &nbsp;<button onClick={handleSave}>추가</button>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <input type='text' placeholder='input seq to delete' onChange={handleDeleteSeq} value={delSeq || ''}></input> <button onClick={handleDelete}>삭제</button>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              {
                ["seq", "writer", "message"].map((item, index) => {
                  return (
                    <input key={index} type="text" name={item} onChange={handleModiDataChange} value={modiData[item] || ''} placeholder={item}></input>
                  );
                })
              }
              <button onClick={handleModi}>수정</button>
            </td>
          </tr>
          <tr>
            <td colSpan={3}><input type="text" placeholder='내용 검색' onChange={handleSearch}></input></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default App;

// <div>{count}</div>  ==>>  상태 변수를 표현식에 binding 했다.
// 상태 변수의 값이 변화하면 상태 변수를 포함하고 있는 함수가 다시 호출(실행)된다. 
// ==> 이때 상태 변수는 함수가 재호출된다고 하더라도 초기화되진 않는다. 일반 변수는 초기화 됨.
// 오직 상태 변수를 사용했을 때만 UI에 직접적으로 반영된다.
// React는 doucument.getElementById 처럼 변수에 직접 접근해서 값을 바꾸고 UI를 직접 바꾸는 코드는 XXXXX
// JSX 파일에서 코드 작성 시 UI는 react를 통해 변경되어야만 한다.
// react는 데이터가 바뀌면 UI가 자동으로 변경되는 단방향 바인딩으로 동작한다 !!