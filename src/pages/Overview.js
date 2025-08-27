import React from 'react';
import SummaryCard from '../components/UI/SummaryCard';
import ActivityList from '../components/UI/ActivityList';
import BarChart from '../components/Charts/BarChart';
import PieChart from '../components/Charts/PieChart';
import { dashboardStats, recentActivities, monthlyEarnings, projectStatusData } from '../data/mockData';

const Overview = () => {
  const summaryCards = [
    {
      title: 'Total Projects',
      value: dashboardStats.totalProjects,
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      trend: 'up',
      trendValue: '+12%'
    },
    {
      title: 'Total Earnings',
      value: `$${dashboardStats.totalEarnings.toLocaleString()}`,
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      trend: 'up',
      trendValue: '+23%'
    },
    {
      title: 'Tasks Due',
      value: dashboardStats.tasksDue,
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      trend: 'down',
      trendValue: '-8%'
    },
    {
      title: 'Completed Projects',
      value: dashboardStats.completedProjects,
      icon: (
        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      trend: 'up',
      trendValue: '+15%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your freelance business today.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <SummaryCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            trend={card.trend}
            trendValue={card.trendValue}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BarChart 
          data={monthlyEarnings} 
          title="Monthly Earnings Overview"
        />
        <PieChart 
          data={projectStatusData} 
          title="Project Status Distribution"
        />
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityList activities={recentActivities} />
        
        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Stats</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average Project Value</span>
              <span className="text-sm font-semibold text-gray-900">$3,200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Projects This Month</span>
              <span className="text-sm font-semibold text-gray-900">6</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Client Satisfaction</span>
              <span className="text-sm font-semibold text-green-600">98%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Response Time</span>
              <span className="text-sm font-semibold text-gray-900">2.4 hours</span>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <button className="w-full btn-primary">
                View Detailed Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
