import React from 'react';

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

export function SelectMenu() {
  return (
    <>
      <select name='configs' className='h-6 pl-1 text-sm bg-back-100 rounded-md border border-brand-100 focus:border-brand-100 focus:ring-brand-100  focus:outline-none w-3/4'>
        <option value="" disabled selected>Saved configs...</option>
        <option value="lucy">Lucy</option>
        <option value="Daisy">Daisy</option>
      </select>
      <button className="h-6 bg-red-600 text-white text-sm font-bold rounded-md focus:outline-none w-1/4 -ml-10">
        Delete
      </button>
    </>
  )
}