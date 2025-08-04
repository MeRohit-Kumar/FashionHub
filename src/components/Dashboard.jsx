import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import LineChartComponent from './charts/LineChartComponent';
import BarChartComponent from './charts/BarChartComponent';
import PieChartComponent from './charts/PieChartComponent';

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-warning">Welcome to Dashboard</h3>
      <Row >
        <Col md={6}>
          <Card className="p-3 mb-4 shadow-lg">
            <h5>Sales Activity</h5>
            <LineChartComponent />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-4 shadow-lg">
            <h5>Customer Retention</h5>
            <BarChartComponent />
          </Card>
        </Col>
        <Col md={12}>
          <Card className="p-3 shadow-lg">
            <h5>User Skill Distribution</h5>
            <PieChartComponent />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
