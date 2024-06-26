import Image from "next/image"
import Link from "next/link"

import salesforcelogo from "../Assets/img/salesforcelogo.svg"

import "./header.css"

const Header = () => {
    return(
        <>
         <header>
    <div className="cabecalho">
        <Link href="/"><Image src={salesforcelogo} alt="" className="logoimg"/></Link>
        <div className="modosbut">
            <button className="modosbutt">Modo baixa Visao</button>

            <button className="modosbutt">Modo daltonismo</button>

            <Link href="/Integracao">
            <button className="modosbutt">Integração</button>
            </Link>


        </div>
        <button className="butlogin">Login</button>
        <button className="butTeste">Teste Gratis</button>

    </div>
</header>
        </>
    )
   
}
export default Header

