import React from "react";
import {SearchLinkList,LinkItem} from './QueryNav.styled.js'



const QueryNav = ({onSubmit}) =>{
const topSearchedQuery = ['cat','dog','fire',"love",'unicorn']

return (
    <SearchLinkList>
        {topSearchedQuery.map(elem=>
            <li key={elem}>
                <LinkItem href='#' onClick={(e)=>{
                    e.preventDefault();
                    onSubmit(elem)
                }}>
                    {elem.toUpperCase()}
                </LinkItem>
            </li>
            )}
    </SearchLinkList>
)
}

export default QueryNav