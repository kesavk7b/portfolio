export const NavBar = ({menu})=>{
    const navclass = "nav";
    return (
        <nav className={navclass}>
            <ul>
                {
                    [...menu].reverse().map((menu,index)=>(
                        <li key={index} ><a href={'#'+menu}>{menu}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}