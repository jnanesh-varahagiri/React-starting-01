function TabButton({children , onSelect ,isSelected}){
    console.log(children)
    
   return (
    <li ><button className={ isSelected ? 'active' :''} onClick={()=>onSelect(children)}>{children}</button></li>
    )
}

// function TabButton({label}){
//     return (
//         <li><button>{label}</button></li>
//     )
// }

export default TabButton