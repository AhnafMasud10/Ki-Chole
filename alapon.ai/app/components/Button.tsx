'use client';
import React from 'react'
import clsx from 'clsx';
interface buttonProps{
    type?: 'button' | 'submit' |'reset' | undefined;
    fullwidth?:boolean;
    children?:React.ReactNode;
    onClick?: () => void;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;

}

export const Button: React.FC<buttonProps> = ({
    type,
    fullwidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
  return (
    <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`
        flex 
        justify-center
        rounded-md
        px-3
        py-2
        text-sm
        font-semibold
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2`,
        disabled && "opacity-50 cursor-default",
        fullwidth && "w-full",
        secondary ? 'text-gray-900 ': 'text-white',
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary && !danger && "bg-green-500 hover:bg-green-600 focus-visible:outline-green-600"
        )}>

        {children}
    </button>
  )
}
 