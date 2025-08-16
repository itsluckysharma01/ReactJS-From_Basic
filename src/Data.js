import React, {useState} from 'react';
import datas from './datas.json';

const Data = ()=> {

    const [nData, setnData] = useState(datas);
    console.log(datas[0].id)
  return (
    <div>
        <ul>
        {
            datas.map((items) =>{
                <li key={items.id}>
                   console.log(items.id)
                </li>
            }
        

        )}
        </ul>
       
    </div>
  ) 
}

export default Data;