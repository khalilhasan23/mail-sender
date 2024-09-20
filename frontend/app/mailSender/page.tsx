"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendMail } from '../../services/mailSenderService';
import styles from "./page.module.css";
import Nav from "@/components/nav";
import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Todos: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [toEmail, setEmail] = useState('');
  const [massageText, setmassageText] = useState('');
  const [isSended, setIsSended] = useState('');
  const router = useRouter();

  const buttenNames = {
    Logout: "logout",
  }

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/auth/login');
      }
    };

    checkToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      const respons = await sendMail(massageText, toEmail, subject, token);
      setmassageText('');
      setSubject('');
      setEmail('');
      setIsSended(respons.message)
    }
  };

  return (
    <main>
      <Nav buttenNames={buttenNames} />
      <CContainer style={{marginTop: '100px'}}>
        <CRow className="justify-content-around">
          <CCol xs={6}>
            <CImage src="/main-avatar.png" alt="Book Image" style={{width: "400px"}} />
          </CCol>
          <CCol className={styles.text} xs={6} style={{justifyContent: 'center', display: 'flex'}}>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="To: Email"
                value={toEmail}
                className={styles.fild}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                className={styles.fild}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                placeholder="Text"
                value={massageText}
                rows={8}
                cols={22}
                className={styles.fild}
                onChange={(e) => setmassageText(e.target.value)}
              >
              </textarea>
              <div className="justify-content-start" style={{display: 'flex'}}>
                <FontAwesomeIcon icon={faImage} size='xl' style={{ color: "#22577a", marginRight: '20px', cursor: 'pointer'}} />
                <FontAwesomeIcon icon={faPaperclip} size="xl" style={{color: "#22577a", cursor: 'pointer'}} />
              </div>
              <div className="justify-content-end" style={{display: 'flex'}}>
                <button type="submit" className='navLink mt-3'>Send</button>
              </div>
            </form>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="mt-5">
            <div className="justify-content-center" style={{display: 'flex', color: 'black'}}>
              {isSended === 'Email sended' ? (<p style={{ backgroundColor: '#57CC99', padding: '19px', borderRadius: '13px' }}>Email sended</p>)
                : isSended === 'Server error'  ? (<p style={{ backgroundColor: 'red', padding: '19px', borderRadius: '13px' }}>Failed sending Email</p>): (<p></p>)}
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  );
};

export default Todos;