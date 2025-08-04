import React, { useEffect, useState } from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip, Legend,ResponsiveContainer} from 'recharts';

const LineChartComponent = () => {
  const [data, setData] = useState([
    { name: 'Mon', sales: 30 },
    { name: 'Tue', sales: 40 },
    { name: 'Wed', sales: 45 },
    { name: 'Thu', sales: 50 },
    { name: 'Fri', sales: 60 },
    { name: 'Sat', sales: 70 },
    { name: 'Sun', sales: 65 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData =>
        prevData.map(d => ({
          ...d,
          sales: Math.floor(Math.random() * 100) + 20,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card shadow p-4 mb-4">
      <h5 className="mb-3 text-primary fw-bold">Weekly Sales Trend</h5>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6f42c1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6f42c1" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#dee2e6" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
            formatter={(value) => [`${value}`, 'Sales']}
          />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="url(#colorSales)"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
