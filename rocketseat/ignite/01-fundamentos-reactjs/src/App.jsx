import { useEffect } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export default function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          <Post />

        </main>

      </div>

    </div>
  )

}

