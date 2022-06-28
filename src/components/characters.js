import React,{useEffect} from "react";


const characters =(props)=>{

      return(
        props.characters.filter((val)=>{
          if (props.search===''){
            return val
          }
          else if (val.name.toLocaleLowerCase().includes(props.search.toLocaleLowerCase())){
            return val
          }
        } ).map((char) => (
          <div>
         <li key={char.id}> {char.name}</li>
          </div>
        ))
      )
}
export default characters