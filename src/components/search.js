import React from "react";

const Search=(props)=>{
    return(
        <div>
            search for more characters: <input value={props.searchval} onChange={props.searchchange}/>
        </div>
    )
}
export default Search;