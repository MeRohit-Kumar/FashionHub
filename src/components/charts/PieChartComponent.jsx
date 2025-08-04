import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#aa00ff'];

const PieChartComponent = () => {
  const [data, setData] = useState([
    { name: 'React', value: 20 },
    { name: 'Node.js', value: 25 },
    { name: 'MongoDB', value: 15 },
    { name: 'Bootstrap', value: 10 },
    { name: 'Redux', value: 30 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev =>
        prev.map(skill => ({
          ...skill,
          value: Math.floor(Math.random() * 30) + 10,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h5 className="mb-3 text-primary fw-bold">Tech Skills Distribution</h5>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          />
          <Legend verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
