import React from 'react'

export const SortIcon = ({ sortMode }) => {
  return (
    <svg
      width="9"
      height="13"
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.0145969 4.24264L4.25724 0L8.49988 4.24264Z"
        fill={sortMode === 'down' ? '#41522E' : 'rgba(65, 82, 46, 0.3)'}
      />
      <path
        d="M8.49988 7.83247L7.43922 6.77181L4.25724 9.95379L1.07526 6.77181L0.0145969 7.83247L4.25724 12.0751L8.49988 7.83247Z"
        fill={sortMode === 'up' ? '#41522E' : 'rgba(65, 82, 46, 0.3)'}
      />
    </svg>
  )
}
