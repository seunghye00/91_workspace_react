import { useState } from 'react';
import './App.css';

function App() {

  const [datas, setDatas] = useState([
    {
      id: 1,
      title: "Inception",
      genre: "Science Fiction",
      publish: "2010-07-16"
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      publish: "2008-07-18"
    },
    {
      id: 3,
      title: "Parasite",
      genre: "Thriller",
      publish: "2019-05-30"
    },
    {
      id: 4,
      title: "La La Land",
      genre: "Musical",
      publish: "2016-12-09"
    },
    {
      id: 5,
      title: "Avatar",
      genre: "Science Fiction",
      publish: "2009-12-18"
    }
  ]);

  // 항목 추가를 위한 로직
  const [data, setData] = useState({id: 0, title: '', genre: '', publish: ''});
  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setData(prev => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleAddData = () => {
    setDatas(prev => {
      const updated = [...prev, data];
      setSearchDatas(updated);
      return updated;
    });
    setData({id: 0, title: '', genre: '', publish: ''});
  };

  // ID를 입력 받아 해당 항목을 삭제하기 위한 로직
  const [delID, setDelID] = useState(0);
  const handleDelID = (e) => {
    setDelID(parseInt(e.target.value));
  };
  const handleDelData = () => {
    setDatas(prev => {
      const result = prev.filter(data => data.id !== delID);
      setSearchDatas(result);
      return result;
    });
    setDelID(0);
  };

  // ID를 입력 받아 해당 항목을 수정하기 위한 로직
  const [updateData, setUpdateData] = useState({id: 0, title: '', genre: '', publish: ''});
  const handleUpdateDataChange = (e) => {
    setUpdateData(prev => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleUpdateData = () => {
    setDatas(prev => {
      const result = prev.map(data => {
        if(data.id === parseInt(updateData.id)){
          return updateData;
        }
        return data;
      });
      setDatas(result);
      return result;  
    });
    setUpdateData({id: 0, title: '', genre: '', publish: ''});
  };

  // 검색어를 포함하는 title 검색을 위한 로직
  const [searchDatas, setSearchDatas] = useState(datas);
  const handleSearchData = (e) => {
    const keyword = e.target.value;
    const result = datas.filter(data => data.title.includes(keyword));
    setSearchDatas(result);
  };

  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Publish</th>
          </tr>
        </thead>
        <tbody>
          {
            searchDatas.map(data => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.genre}</td>
                <td>{data.publish}</td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={3}>
              <input type='text' placeholder='id' name='id' onChange={handleChange} value={data.id || ''}/><br/>
              <input type='text' placeholder='title' name='title' onChange={handleChange} value={data.title}/><br/>
              <input type='text' placeholder='genre' name='genre' onChange={handleChange} value={data.genre}/><br/>
              <input type='date' name='publish' onChange={handleChange} value={data.publish}/><br/>
            </td>
            <td>
              <button onClick={handleAddData}>추가</button>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <input type='text' placeholder='enter id for delete' onChange={handleDelID} value={delID || ''}/><br/>
            </td>
            <td>
              <button onClick={handleDelData}>삭제</button>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <input type='text' placeholder='enter id for update' name='id' onChange={handleUpdateDataChange} value={updateData.id || ''}/><br/>
              <input type='text' placeholder='enter title to update' name='title' onChange={handleUpdateDataChange} value={updateData.title}/><br/>
              <input type='text' placeholder='enter genre to update' name='genre' onChange={handleUpdateDataChange} value={updateData.genre}/><br/>
              <input type='date' name='publish' onChange={handleUpdateDataChange} value={updateData.publish}/><br/>
            </td>
            <td>
              <button onClick={handleUpdateData}>수정</button>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <input type='text' placeholder='enter keyword for search' onChange={handleSearchData}/><br/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
