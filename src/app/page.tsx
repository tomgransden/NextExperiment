'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";

import {Header} from '@components';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";



export default function Home() {


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <button onClick={async () => {
          console.log('onPress');

          let dataToSend = {
            message: "Hi"
          };

          await fetch('/api', {method: 'POST', body: JSON.stringify(dataToSend)}).then(res => {
            console.log(res.status);
            return res.json()}).then(json => console.log(json))
        }}/>
        </div>

    </main>
  );
}
