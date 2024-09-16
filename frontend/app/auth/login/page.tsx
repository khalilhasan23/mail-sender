"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../../services/authService';
import styles from "./page.module.css";
import Nav from "@/components/nav";
import { CCol, CContainer, CImage, CRow } from "@coreui/react";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Next.js router

  const buttenNames = {
    Register: "/auth/register",
    Home: "/"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      router.push('/mailSender'); //todo change this to fit your app 
    } catch (err) {
      console.error('Error logging in');
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
                placeholder="Email"
                value={email}
                className={styles.fild}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                className={styles.fild}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="justify-content-center" style={{display: 'flex'}}>
                <button type="submit" className='navLink mt-3'>Login</button>
              </div>
            </form>
          </CCol>
        </CRow>
      </CContainer>
    </main>
  );
};

export default Login;
