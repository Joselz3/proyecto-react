import { ChangeEvent, useState } from "react";

interface InitialValues {
    name:string;
    email:string;
    password:string;
    repeatPassword:string;
}

export const useForm = <T>(initState:T)=>
{
    const [formData, setFormData] = useState(initState)

    const onChange=(event:ChangeEvent<HTMLInputElement>)=>
    {
        console.log(event.target.name);

        setFormData(prev=>{
            return {
                ...prev,
                [event.target.name]:event.target.value
            }
        })
        
    }

    const resetForm = ()=>
    {
        setFormData({...initState})
    }
    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    return{
        ...formData,
        formData,
        resetForm,
        onChange,
        isValidEmail
        
    }
}