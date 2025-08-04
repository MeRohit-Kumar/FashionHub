import React, { useEffect, useState } from 'react';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from 'recharts';

const BarChartComponent = () => {
  const [data, setData] = useState([
    { name: 'Clothes', category: 12 },
    { name: 'Shoes', category: 18 },
    { name: 'Electronics', category: 10 },
    { name: 'Misc.', category: 15 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev =>
        prev.map(item => ({
          ...item,
          category: Math.floor(Math.random() * 20) + 1,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h5 className="mb-3 text-success fw-bold">Product Categories Overview</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="category" fill="#33cf8e" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
