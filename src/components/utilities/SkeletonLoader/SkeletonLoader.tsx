// SkeletonLoader.js
import React from 'react';
import './SkeletonLoader.css';

interface ISkeletonLoaderrProps {
  pageSize: number
}

const SkeletonLoader: React.FC<ISkeletonLoaderrProps> = ({ pageSize }) => {
  return (
    <tbody className="skeleton-wrapper">
      {[...Array(pageSize)].map((item, i) =>
        <tr key={`skeleton-id-${i}`}>
          <td className="skeleton-row"></td>
          <td className="skeleton-row"></td>
          <td className="skeleton-row"></td>
          <td className="skeleton-row"></td>
          <td className="skeleton-row"></td>
        </tr>
      )}
    </tbody>
  );
};

export default SkeletonLoader;

