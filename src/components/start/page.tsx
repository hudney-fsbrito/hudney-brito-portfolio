"use client";

import { useState } from "react";
import styles from "@/start.module.scss";

const Start = () => {
  const [divs, setDivs] = useState<{ id: number; x: number; y: number }[]>([]);

  const addRandomDiv = () => {
    // Gera coordenadas aleatórias
    const randomX = Math.random() * (window.innerWidth - 50); // Largura disponível
    const randomY = Math.random() * (window.innerHeight - 50); // Altura disponível

    // Adiciona uma nova div ao estado
    setDivs((prevDivs) => [
      ...prevDivs,
      { id: Date.now(), x: randomX, y: randomY },
    ]);
  };

  return (
    <div className={styles.container}>
      <button className={styles.addButton} onClick={addRandomDiv}>
        Adicionar Div
      </button>
      {divs.map((div) => (
        <div
          key={div.id}
          className={styles.randomDiv}
          style={{ left: `${div.x}px`, top: `${div.y}px` }}
        />
      ))}
    </div>
  );
}
 export default Start;