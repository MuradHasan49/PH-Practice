"use client";

import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Legend, Filler);

const stats = [
  { label: "Total Users", value: "2,847", change: "+12% this month", up: true },
  { label: "Revenue", value: "$18,240", change: "+8% this month", up: true },
  { label: "Active Sessions", value: "394", change: "-3% from yesterday", up: false },
  { label: "Signups Today", value: "47", change: "+21% vs last week", up: true },
];

const users = [
  { name: "Arif Hossain", email: "arif@email.com", joined: "Apr 28, 2026", status: "active" },
  { name: "Nusrat Jahan", email: "nusrat@email.com", joined: "Apr 27, 2026", status: "active" },
  { name: "Tanvir Ahmed", email: "tanvir@email.com", joined: "Apr 27, 2026", status: "pending" },
  { name: "Riya Akter", email: "riya@email.com", joined: "Apr 26, 2026", status: "active" },
  { name: "Sabbir Khan", email: "sabbir@email.com", joined: "Apr 25, 2026", status: "inactive" },
];

const statusStyle = {
  active: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  inactive: "bg-zinc-100 text-zinc-500 dark:bg-zinc-700/40 dark:text-zinc-400",
};

const lineData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [{
    data: [23, 31, 28, 42, 38, 51, 47],
    borderColor: "#6366f1",
    backgroundColor: "rgba(99,102,241,0.08)",
    fill: true,
    tension: 0.4,
    pointRadius: 3,
    pointBackgroundColor: "#6366f1",
    borderWidth: 2,
  }],
};

const donutData = {
  labels: ["Organic", "Direct", "Social", "Referral"],
  datasets: [{
    data: [42, 28, 18, 12],
    backgroundColor: ["#6366f1", "#10b981", "#f59e0b", "#ec4899"],
    borderWidth: 0,
    hoverOffset: 4,
  }],
};

const getChartOptions = (isDark) => ({
  plugins: { legend: { display: false } },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: { color: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" },
      ticks: { color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", font: { size: 11 } },
    },
    y: {
      grid: { color: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" },
      ticks: { color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)", font: { size: 11 }, maxTicksLimit: 5 },
    },
  },
});

const getDonutOptions = (isDark) => ({
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 11 },
        boxWidth: 10,
        padding: 8,
        color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  cutout: "65%",
});

export default function DeshboardCard() {
  const isDark = typeof document !== "undefined"
    ? document.documentElement.classList.contains("dark")
    : false;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 p-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-zinc-400 mb-1">Good morning</p>
            <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Dashboard</h1>
          </div>
          <div className="w-9 h-9 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
            MH
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white dark:bg-zinc-800 rounded-xl p-4 border border-zinc-100 dark:border-zinc-700 transition-colors duration-300">
              <p className="text-xs text-zinc-400 mb-1">{stat.label}</p>
              <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">{stat.value}</p>
              <p className={`text-xs mt-1 ${stat.up ? "text-green-500 dark:text-green-400" : "text-yellow-500 dark:text-yellow-400"}`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="md:col-span-3 bg-white dark:bg-zinc-800 rounded-xl border text-zinc-400 dark:border-zinc-700 p-5 transition-colors duration-300">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">Signups — last 7 days</p>
            <Line className="" data={lineData} options={getChartOptions(isDark)} />
          </div>
          <div className="md:col-span-2 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 p-5 transition-colors duration-300">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">Traffic sources</p>
            <Doughnut data={donutData} options={getDonutOptions(isDark)} />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 p-5 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Recent users</p>
            <button className="text-xs text-indigo-500 hover:underline">View all</button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-100 dark:border-zinc-700">
                <th className="text-left py-2 font-medium text-zinc-400">Name</th>
                <th className="text-left py-2 font-medium text-zinc-400">Email</th>
                <th className="text-left py-2 font-medium text-zinc-400">Joined</th>
                <th className="text-left py-2 font-medium text-zinc-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.email} className="border-b border-zinc-50 dark:border-zinc-700/50 hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-zinc-400">{user.email}</td>
                  <td className="py-3 text-zinc-400">{user.joined}</td>
                  <td className="py-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyle[user.status]}`}>
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}