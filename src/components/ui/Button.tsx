import React, { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';
import {twMerge} from "tailwind-merge";
import { clsx } from 'clsx';
import cn from '../../utils/cn';

type TRef = HTMLButtonElement;
 ''
type TVariant = 'solid' | 'ghost' | 'outline'

type TButtonOption = {
    variant?: TVariant
}

type TButton = DetailedHTMLProps<ButtonHTMLAttributes <HTMLButtonElement>,HTMLButtonElement> & TButtonOption


const Button = forwardRef<TRef, TButton>(({className,variant ='solid' ,...rest}, ref) => {
   


    const getVariant = (variant) =>{
        switch (variant) {
            case 'outline':
                return 'btn-outline'
            case 'ghost':
                return 'btn-ghost'
            default:
                return "btn-solid"
        }
    }



    return (
        <button {...rest} ref={ref} className={cn(getVariant(variant) ,  className )}> click </button>
  

                            
       
         
    );
});

export default Button;
