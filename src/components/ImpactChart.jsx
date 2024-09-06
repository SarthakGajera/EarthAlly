// src/components/ImpactChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const ImpactChart = () => {
  // Sample data
  const data = {
    labels: ['Energy Saved', 'Waste Reduced', 'Water Conserved'], // X-axis labels
    datasets: [
      {
        label: 'Impact Metrics',
        data: [1200, 1500, 1000], // Data for each label
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Environmental Impact Visualization',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '80%', height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ImpactChart;
