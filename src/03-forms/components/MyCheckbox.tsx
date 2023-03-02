import { ErrorMessage, useField } from 'formik';
import React from 'react'

interface Props{
    label:string;
    name:string;
    [x:string]:any;
}

export const MyCheckbox = ({label,...props}:Props) => {
    const [field,meta] = useField({...props,type:'checkbox'})
  return (
    <>
        <label>
            <input type="checkbox" {...field} {...props}></input>
            {label}
        </label>
        <ErrorMessage name={props.name} component="span"/>
    </>
  )
}
