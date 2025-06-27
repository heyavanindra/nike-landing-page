import headerLogo from "../assets/images/header-logo.svg"
import hamberger from "../assets/icons/hamburger.svg"
import { navLinks } from "../constants/constants"

const Nav = () => {
  return (
    <header className="absolute padding-x py-3 z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="">
                <img src={headerLogo} alt="lOGO" width={130} height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item,idx)=>(
                    <li key={idx}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="min-lg:hidden">
                <img src={hamberger} alt=""height={25} width={25}/>
            </div>
        </nav>
    </header>
  )
}

export default Nav