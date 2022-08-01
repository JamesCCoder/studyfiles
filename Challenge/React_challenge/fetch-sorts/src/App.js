import React,{useState, useEffect} from "react";
import './App.css';



function App() {
  let [page, setPage] = useState(0);
  let [data, setData] = useState([]);
  let [showPage, setShowPage] = useState(false);

  let pageAll = [1,2,3,4];

  const numPerPage = 5;
  let [firstIndex, setFirstIndex] = useState(0);
  let [show, setShow] = useState(-1);
  
  let [side, setSide] = useState(false);

  useEffect(() =>{
    getData();
  },[])
  
  const getData = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie/?api_key=ddcc8b10cbbf464724f1ceb922d6a8d1`;
    const response = await fetch(url);
    if(response){
      const jsonData = await response.json();
      const result = await jsonData.results;
      for(let i = 0; i<result.length; i++){
        result[i].like = false;
        result[i].block = false;
      }
      setData(result);
      console.log(data);
    }else{
      throw new Error("something is wrong with the fetching")
    }
    
  };

  const showHandler = (e) =>{
      const num = Number(e.target.innerHTML);
      console.log(num);
      setFirstIndex(
        numPerPage * (num - 1)
        );
  }

  const colorHandler = (index) =>{
      let newData1 = [...data];
      newData1[index].like = !newData1[index].like;
      setData(newData1);
  }

  const blockHandler = (index) =>{
      let newData2 = [...data];
      newData2[index].block = !newData2[index].block;
      setData(newData2);
  }

  


  return (
    <div>
    {
      side === true ? (
      <>
      <div className="nav-fake"></div>
      <div className="sidebar" onClick={() => setSide(false)}>
          <div>main</div>
          <div>list</div>
          <div>like</div>
          <div>block</div>
      </div>
      </>
      
    ):null}

    {
      side === false ? (
        <>
        
        <div className="navagation">
            <div className="left">
            <div className="three" onClick={() => setSide(true)}>
             <div></div>
             <div></div>
             <div></div>
           </div>
            </div>
            <div className="right">
           <div onClick={() => {setPage(0);setShowPage(false);setShow(-1)}}>main</div>
           <div onClick={() => {setPage(1);setShowPage(true);setShow(-1)}}>list</div>
           <div onClick={() => {setPage(1);setShowPage(true);setShow(1)}}>like</div>
           <div onClick={() => {setPage(1);setShowPage(true);setShow(2)}}>block</div>
          </div>
          </div>
        </>
         
           
          
       
      ):null
    }

       
       {
         page === 0 ? 
         (
           <div className="main">
             <div>This is the main page of the webpage</div>
           </div>
         ) : null
       }
       {
         page === 1 ? 
         (
          <div className="non-main">
           <div>
               <p>This is the list page of the webpage</p>
               <p>{firstIndex}</p>
               <ul>
                  {
                    data
                    .filter((one) => {
                      return show === 1 ? one.like === true 
                            :show === 2 ? one.block === true
                            :one
                    })
                    .filter((one) => show === -1 ? one.block === false : one)
                    .map((one,i) => {
                      const {id, title, overview, like, block} = one;
                      return(
                      <div style={{marginTop:"20px"}}>
                         <li key={i}>
                          {i}
                        </li>
                        <li key={id}>
                          {id}
                        </li>
                        <li key={title}>
                          {title}
                        </li>
                        <li key={overview}>
                          {overview}
                        </li>
                        <li key={i+1}>
                          <p onClick = {() => colorHandler(i)}
                          style={{color: like ? "red" : "black"}}>like</p>
                        </li>
                        <li key={i+2}>
                          <p onClick = {() => blockHandler(i)} 
                          style={{color: block ? "red" : "black"}}>block</p>
                        </li>
                     </div>
                      )
                    })
                    
                    .filter((one, i) => i === firstIndex 
                    || i === firstIndex + 1
                    || i === firstIndex + 2
                    || i === firstIndex + 3
                    || i === firstIndex + 4
                    )
                    
                  }
               </ul>
           </div>
          </div>
         ) : null
       }
       
      {
        showPage ?
        (
          <div className="pagination">
         {
           pageAll.map((one) => {
             return (
               <div>
                 <div className="pagination-number"
                      onClick = {(e) => showHandler(e)}
                 >{one}</div>
               </div>
             )
           })
         }
      </div>
        ):null

      }
     
    </div>
  );
}

export default App;
