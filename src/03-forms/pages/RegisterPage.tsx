import React, { FormEvent } from 'react'
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

/* interface RegisterData {
    name:string;
    email:string;
    password:string;
    repeatPassword:string;
} */

export const RegisterPage = () => {

    const {onChange,name,email,password,repeatPassword,resetForm,isValidEmail} = useForm({
        name:'',
        email:'',
        password:'',
        repeatPassword:''
    })

    const onSubmit = (event:FormEvent<HTMLFormElement>)=>
    {
        event.preventDefault()
    }

   
  return (
    <div>
        <h1>RegisterPage</h1>
        <form onSubmit={(e)=>onSubmit(e)} noValidate className='form'>
            <input 
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
                className={`${name.trim().length<=0&&'has-error'}`}
            />
            {
                name.trim().length<=0&&<span>Este campo es necesario</span>
            }
            <input 
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={onChange}
                className={`${!isValidEmail(email)&&'has-error'}`}
            />
            {
                !isValidEmail(email)&&<span>Email no es valido</span>
            }
            <input 
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e)=>onChange(e)}
                className={`${!isValidEmail(email)&&'has-error'}`}
            />
            {
                password.trim().length<=0&&<span>Este campo es necesario</span>
            }
            {
                (password.trim().length < 8 && password.trim().length > 0) &&<span>La contraseña no es valida</span>
            }
            <input 
                type='password'
                name='repeatPassword'
                placeholder='Repeat Password'
                value={repeatPassword}
                onChange={onChange}
                className={`${name.trim().length<=0&&'has-error'}`}
                />
                {
                    repeatPassword.trim().length<=0&&<span>Este campo es necesario</span>
                }
                {
                    repeatPassword.trim().length>0&&repeatPassword !== password &&<span>Las contraseñas deben ser iguales</span>
                }
            <button onSubmit={()=>console.log('hola')}>Registrar</button>
            <button onClick={resetForm}>Reset Form</button>
        </form>
    </div>
  )
}
