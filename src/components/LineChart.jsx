import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];


  console.log(coinHistory?.data?.history?.length);

  for (let i = 0; i < coinHistory?.data?.history?.length; i ++ ) {
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
    coinPrice.push(coinHistory.data.history[i].price);
    //console.log(coinPrice[i] + " " + coinTimestamp[i]);
  }

  // console.log(coinPrice);
  // console.log(coinTimestamp);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">{coinName} Price Chart </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Typography.Title>
          <Typography.Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Typography.Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;