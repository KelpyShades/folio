'use client';

export default function BDateClient() {
  const bDate: number = 2004;
  let age: number;
  const currentYear = new Date().getUTCFullYear();
  const currentMonth = new Date().getUTCMonth();
  const currentDay = new Date().getUTCDate();

  age = currentYear - bDate;

  if (currentMonth >= 9) {
    if (currentDay === 9 && currentDay >= 6) {
      age = currentYear - bDate;
    } else if (currentDay === 9 && currentDay < 6) {
      age = currentYear - bDate - 1;
    } else if (currentMonth > 9) {
      age = currentYear - bDate;
    }
  } else {
    age = currentYear - bDate - 1;
  }

  return <span title={`Age: ${age} years old`}>{age}</span>;
}
