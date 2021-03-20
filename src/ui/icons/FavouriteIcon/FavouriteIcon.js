import React from 'react'

export const FavouriteIcon = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.3806 1.59133C18.8675 1.08683 18.2582 0.686629 17.5877 0.413583C16.9171 0.140537 16.1984 0 15.4726 0C14.7467 0 14.028 0.140537 13.3574 0.413583C12.6869 0.686629 12.0776 1.08683 11.5645 1.59133L10.4996 2.63785L9.4347 1.59133C8.39822 0.572757 6.99246 0.000527962 5.52667 0.000527973C4.06087 0.000527984 2.65511 0.572757 1.61864 1.59133C0.582163 2.6099 -0.000122059 3.99139 -0.00012207 5.43187C-0.000122081 6.87235 0.582163 8.25383 1.61864 9.2724L2.68355 10.3189L10.4996 18L18.3157 10.3189L19.3806 9.2724C19.8939 8.76814 20.3012 8.16942 20.579 7.51045C20.8569 6.85148 20.9999 6.14517 20.9999 5.43187C20.9999 4.71857 20.8569 4.01225 20.579 3.35328C20.3012 2.69431 19.8939 2.09559 19.3806 1.59133Z"
        fill="#E55858"
      />
    </svg>
  )
}
