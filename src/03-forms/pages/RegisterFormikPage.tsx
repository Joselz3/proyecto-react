import {Formik,Form,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { MyCheckbox,MySelect,MyTextInput} from '../components'
import '../styles/styles.css'

export const RegisterFormikPage = () => {

  
  return (
    <div>
        <h1> Formik Abstractation Tutorial</h1>
        <Formik 
          initialValues={{
            name:'',
            email:'',
            password:'',
            repeatPassword:'',
          }}
          onSubmit={(values)=>{
            console.log(values)
          }}
          validationSchema={Yup.object({
            name:Yup.string()
            .min(2, 'Debe tener 3 caracteres o mas')
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
            email:Yup.string()
            .email('Correo no es valido')
            .required('Requerido'),
            password:Yup.string()
            .required('Requerido')
            .min(6,'Minimo 6 letras'),
            repeatPassword:Yup.string()
            .oneOf([Yup.ref('password')],'Las constraseñas no son iguales')
            .required('Requerido')
            .min(6)
          })}
        >
          {
            ({handleReset}) =>(
              <Form noValidate>
                <MyTextInput 
                  label="Name" 
                  name="name"
                  placeholder='Name'
                />
              
              <MyTextInput 
                  type='email'
                  label="Email" 
                  name="email"
                  placeholder='Email'
                />
                <MyTextInput 
                  type='password'
                  label="Password" 
                  name="password"
                  placeholder='Password'
                />
                <MyTextInput 
                  type='password'
                  label="Repeat Password" 
                  name="repeatPassword"
                  placeholder='Repeat Password'
                />

              <button type="submit">Create</button>
              <button onClick={handleReset}>Reset</button>
            </Form>
            )
          }
        </Formik>
       
    </div>
  )
}
