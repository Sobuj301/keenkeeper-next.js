"use client"
import { InteractionContext } from '@/context/InteractionContext';
import React, { useContext } from 'react';

const useInteractions = () => {
    const actionInfo = useContext(InteractionContext)
    return actionInfo
};

export default useInteractions;