import React from 'react';
import Modal from './Modal';

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

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

  const isOverdue = (deadline) => {
    return new Date(deadline) < new Date() && project.status !== 'Completed';
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Project Details">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
            <p className="text-md text-gray-600">{project.client}</p>
          </div>
          <div className="text-right">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500">DEADLINE</h3>
            <p className={`text-md font-medium ${isOverdue(project.deadline) ? 'text-red-600' : 'text-gray-900'}`}>
              {formatDate(project.deadline)}
              {isOverdue(project.deadline) && <span className="ml-2 text-red-600">(Overdue)</span>}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500">BUDGET</h3>
            <p className="text-md font-medium text-gray-900">${project.budget.toLocaleString()}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2">PROGRESS</h3>
          <div className="flex items-center">
            <div className="flex-grow bg-gray-200 rounded-full h-3 mr-2">
              <div
                className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-200">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;