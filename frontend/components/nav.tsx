"use client"

import { CCollapse, CContainer, CImage, CNavbar, CNavbarNav, CNavbarToggler } from "@coreui/react";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Nav: React.FC<{buttenNames: Record<string, string>}> = ({buttenNames})=> {
    const [visible, setVisible] = useState(false)
    const router = useRouter(); 

    const handleLogout = () => {
        localStorage.removeItem("token"); 
        router.push("/auth/login"); 
    };

    return (
        <>
            <CNavbar expand="lg" className="navContainer">
                <CContainer fluid>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#22577a", fontSize: '75px'}} />
                <CNavbarToggler
                aria-label="Toggle navigation"
                aria-expanded={visible}
                onClick={() => setVisible(!visible)}
                />
                <CCollapse className="navbar-collapse d-flex justify-content-end" visible={visible}>
                <CNavbarNav as="nav">
                    {Object.keys(buttenNames).map((name) =>
                        name === "Logout" ? (<button key={name} onClick={handleLogout} className="navLink">{name}</button>) : (
                            <Link href={buttenNames[name]} className="navLink" key={name}>
                                {name}
                            </Link>
                        )
                    )}
                </CNavbarNav>
                </CCollapse>
                </CContainer>
            </CNavbar>
        </>
    )
}

export default Nav;