function TabButton({children , onSelect}){

    
   return (
    <li ><button onClick={onSelect}>{children}</button></li>
    )
}

// function TabButton({label}){
//     return (
//         <li><button>{label}</button></li>
//     )
// }

export default TabButton