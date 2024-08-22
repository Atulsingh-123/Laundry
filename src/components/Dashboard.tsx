
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';

const Dashboard = () => {

  const data = {
    labels: ['Pending', 'Processing', 'Ready to Deliver', 'Delivered', 'Returned'],
    datasets: [
      {
        data: [70, 0, 30, 0, 0],
        backgroundColor: [
          '#6c757d',
          '#ffc107',
          '#0d6efd',
          '#20c997',
          '#dc3545',
        ],
        borderWidth: 1,
        borderColor: '#fff',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          boxWidth: 10,
        },
        align: 'start' as const,
      },
    },
    layout: {
      padding: {
        top: 20,
      },
    },
  };
  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 mt-2">
        <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-left">4</h2>
          <p className="text-sm text-left">Pending Orders</p>
        </div>
        <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-left">0</h2>
          <p className="text-sm text-left">Processing Orders</p>
        </div>
        <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-left">3</h2>
          <p className="text-sm text-left">Ready to Deliver</p>
        </div>
        <div className="bg-[#06b6d4] text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-left">0</h2>
          <p className="text-sm text-left">Delivered Orders</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">

        <div className="col-span-2 bg-white shadow-heavy rounded-lg p-4 border border-[#06b6d4] relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-8 bg-[#06b6d4] flex items-center pl-3">
            <h2 className="text-md font-semibold text-white">Today's Delivery</h2>
          </div>
          <div className="mt-10">

          </div>
        </div>

        <div className="bg-white shadow-heavy rounded-lg p-4 border border-[#06b6d4] relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-8 bg-[#06b6d4] flex items-center pl-3">
            <h2 className="text-md font-semibold text-white">Overview</h2>
          </div>
          <div className="mt-10">
            <Pie data={data} options={options} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
