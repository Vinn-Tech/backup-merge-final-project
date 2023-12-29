import React, { useEffect, useState } from 'react'
import { getFreeClass } from "../services/freeClass";
import {useParams } from 'react-router-dom';
// import { CookieKeys, CookieStorage } from '../utils/cookies';

export const Coba = () => {
  const { id } = useParams();
  const [free, setFree] = useState([]);

  const freeClass = async () => {
    try {
      const data = await getFreeClass(id);
      console.log("data", data);
      setFree(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    freeClass();
  }, [id]);

  return (
    <div>Coba</div>
  )
}
