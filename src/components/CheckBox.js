import { Checkbox } from "@material-tailwind/react";
import React, { useState } from 'react'; 
export const isChecked = false;

export function CheckboxLabel() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log("check")
  };

  return (
    <div className="flex items-center justify-center my-10">
      <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
      <span className="text-white ml-2">Easy to Type</span>
    </div>
  );
}

