import React from 'react';

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isOverdue = (deadline) => {
    return new Date(deadline) < new Date() && project.status !== 'Completed';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{project.client}</p>
          <div className="flex items-center space-x-4">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
            <span className={`text-sm ${isOverdue(project.deadline) ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
              Due: {formatDate(project.deadline)}
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-gray-900">${project.budget.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Budget</p>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex space-x-2 mt-4">
        <button className="btn-primary text-sm">View Details</button>
        <button className="btn-secondary text-sm">Edit</button>
      </div>
    </div>
  );
};

export default ProjectCard;
