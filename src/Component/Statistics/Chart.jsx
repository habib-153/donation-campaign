// import { PureComponent } from 'react';
import { PieChart, Pie, Cell } from "recharts";

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCard } from "../Utility/LocalStorage";


const Chart = () => {

    const cards = useLoaderData();
    const [donatedCards, setDonatedCards] = useState([]);

    useEffect(() => {
        const storedCardIds = getStoredCard();
        if (cards.length > 0) {
          const donated = [];
          for (const id of storedCardIds) {
            const card = cards.find((card) => card.id === id);
            if (card) {
              donated.push(card);
            }
            setDonatedCards(donated);
            console.log(cards, storedCardIds, donatedCards);
          }
        }
      }, [cards, donatedCards]);

  const data = [
    { name: "totalDonation", value: cards.length },
    { name: "Group B", value: donatedCards.length },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ["#FF444A", "#00C49F"];

  return (
    <div className="flex flex-col justify-center items-center my-14">
      {/* <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text> */}
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="flex flex-col md:flex-row gap-6 mt-3">
        <div className="flex items-center gap-2">
            <p className="text-[#0B0B0B] ">Your Donation</p>
            <div className="w-20 h-3 bg-[#00C49F] border"></div>
        </div>
        <div className="flex items-center gap-2">
            <p className="text-[#0B0B0B] ">Total Donation</p>
            <div className="w-20 h-3 bg-[#FF444A] border"></div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
