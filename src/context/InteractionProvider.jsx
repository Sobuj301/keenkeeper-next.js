"use client"
import React, { useState } from 'react';
import { InteractionContext } from './InteractionContext';

const InteractionProvider = ({ children }) => {
    const [interactions,setInteractions] = useState([])
  
    const addInteraction = (interaction) =>{
        const newInteractions = [...interactions,interaction]
        setInteractions(newInteractions)
    }
    const actionInfo = {interactions,addInteraction }
    return (
        <InteractionContext value={actionInfo}>
            {children}
        </InteractionContext>
    );
};

export default InteractionProvider;