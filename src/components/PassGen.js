import React, { useState } from 'react';
import { Checkbox } from "@material-tailwind/react";


const PassGen = () => {
    // Easy to Type Checkbox state
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    // Punctuation Checkbox state
    const [isChecked2, setIsChecked2] = useState(false);

    const handleCheckboxChange2 = () => {
        setIsChecked2(!isChecked2);
        console.log("punctuation")
    };

    // Initialize state with an empty string
    const [password, setPassword] = useState('------------');

    // Function to generate and set a new password
    function generatePassword() {
        const ascii_and_num = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const all_char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_=+';
        const passwordLength = 12;

        let newPassword = '';

        if (isChecked && isChecked2) {
            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * all_char.length);
                newPassword += all_char.charAt(randomIndex);

                if ((i + 1) % 4 === 0 && i !== passwordLength - 1) {
                    // Add a hyphen every 4 characters except at the end
                    newPassword += "-";
              }
            }
        } else if (isChecked) {
            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * ascii_and_num.length);
                newPassword += ascii_and_num.charAt(randomIndex);

                if ((i + 1) % 4 === 0 && i !== passwordLength - 1) {
                    // Add a hyphen every 4 characters except at the end
                    newPassword += "-";
              }
            } 
        } else if (isChecked2) {
            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * all_char.length);
                newPassword += all_char.charAt(randomIndex);
            }
        } else {
            for (let i = 0; i < passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * ascii_and_num.length);
                newPassword += ascii_and_num.charAt(randomIndex);
            }
        };
      
        setPassword(newPassword);
    

        
    };
    
    return (
        <>
            <h2 className="text-white text-4xl my-20">{password}</h2>
            <div className="flex items-center justify-center my-20">
                <button onClick={generatePassword} className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    Generate
                </button>
            </div>
            <div className="flex items-center justify-center my-8">
                <Checkbox checked={isChecked} onChange={handleCheckboxChange}/>
                <span className="text-white ml-2">Easy to Type</span>
                
            </div>
            <div className="flex items-center justify-center">
                <Checkbox checked={isChecked2} onChange={handleCheckboxChange2}/>
                <span className="text-white ml-2">Punctuation</span>
            </div>
        </>
        );
};
export default PassGen;   