import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = () => {
  const chartContainer = useRef(null);

  const labels = ['Oct', 'Nov', 'Des', 'Jan', 'Feb'];
  const dataBulanan = [60, 30, 30, 30, 30, 10];
  const dataTahunan = [50, 20, 20, 30, 20, 10];

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      const data = {
        labels: labels,
        datasets: [
          {
            type: 'bar',
            label: 'Bulanan',
            backgroundColor: '#4f46e5',
            data: dataBulanan,
          },
          {
            type: 'bar',
            label: 'Tahunan',
            backgroundColor: '#a5b4fc',
            data: dataTahunan,
          },
        ],
      };

      // Konfigurasi Chart.js
      const config = {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
            },
          },
        },
      };

      // Buat instansi chart baru dengan menggunakan Chart.js
      const myChart = new Chart(ctx, config);

      // Membersihkan chart sebelum komponen unmounts (opsional)
      return () => myChart.destroy();
    }
  }, []);

  return (
    <div className="w-full px-4">
      <canvas ref={chartContainer} id="myChart" width={400} height={300} className="w-full max-h-60"></canvas>
    </div>
  );
};

export default BarChart;
