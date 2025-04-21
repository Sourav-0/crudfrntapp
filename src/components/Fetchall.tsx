import {useState,useEffect} from "react"; 
import axios from "axios";

export default function Fetchall()
{
    const[info,setInfo]=useState<any[]>([]); 

    useEffect(()=>{
      setTimeout(()=>{
           axios.get('https://crudtest2.vercel.app/ejob/viewall')
           .then(
              (res)=>{ setInfo(res.data.data)}
           ).catch(
              (err)=>{ console.log(err); }
           )
      },5000)
    },[]) 

    return(
        <>
         {
            (info.length>0)? <table> 
                             <tr>  
                                 <th>Name</th>
                                 <th>Loc</th>
                                 <th>Email</th>
                                 <th>Dept</th>
                                 <th>Gender</th>
                             </tr>
              {
                info.map((v)=>{
                    return <tr> 
                                <td>{v.empnm}</td>
                                <td>{v.emploc}</td>
                                <td>{v.empem}</td>
                                <td>{v.empdp}</td>
                                <td>{v.empgen}</td>
                           </tr>
                })
              }
            </table>: <h3>plz wait for 5 sec....!</h3>
         }
        
        </>
    )

}