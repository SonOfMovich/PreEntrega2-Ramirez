import { Cartwidget } from "./cartwidget/index";

export default function Navbar () {
    
    return (
    <nav className="nav">
        <a href="/" className="site-title">Movich's Store</a>
        <ul>   
           <li>
             <a href="/cartwidget"><Cartwidget /></a>
           </li>
            <CustomLink href="/precios">Precios</CustomLink>
            <CustomLink href="/contacto">Contacto</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({href,children, ...props}) {
    const path = window.location.pathname

    return (
            <li className={path === href ? "active" : ""}>
                <a href={href} {...props}>{children}</a>
            </li>
    )
}