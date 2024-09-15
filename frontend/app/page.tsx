import styles from "./page.module.css";
import Nav from "@/components/nav";
import { CCol, CContainer, CImage, CRow } from "@coreui/react";



const buttenNames = {
  Login: "auth/login",
  Register: "auth/register"
}

export default function Home() {
  return (
    <main>
      <Nav buttenNames={buttenNames} />
      <CContainer style={{marginTop: '100px'}}>
        <CRow>
          <CCol>
            <CImage src="/main-avatar.png" alt="Book Image" style={{width: "400px"}} />
          </CCol>
          <CCol className={styles.text}>
            <h2>Welcome to Email Sender (Gmail)</h2>
            <p className={styles.par}> Easily send emails using your Gmail account with our simple,
              secure web app. Just connect your Gmail using an App Password and start sending messages instantly.
              No complex setup—just fast, reliable email communication at your fingertips. Perfect for personal and business use!
            </p>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  );
}
