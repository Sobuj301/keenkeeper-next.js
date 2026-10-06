"use client"
import NoInteractions from '@/components/NoInteractions';
import useInteractions from '@/hooks/useInteractions';
import React from 'react';
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const StatsPage = () => {
    const { interactions } = useInteractions()
    const textCount = interactions.filter(item => item.type === "text")
    const callCount = interactions.filter(item => item.type === "call")
    const videoCount = interactions.filter(item => item.type === "video")

    const chartData = [{ name: "text", value: textCount.length }, { name: "Video", value: videoCount.length }, { name: "Call", value: callCount.length }]


    if(interactions.length === 0 ){
        return <NoInteractions />
    }

    return (
        <div className='max-w-6xl mx-auto'>
            <h2 className='p-5 font-bold'>Friendship Analytics :{interactions.length}</h2>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        label
                    />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatsPage;