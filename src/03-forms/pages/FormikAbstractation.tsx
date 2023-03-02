import {Formik,Form,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { MyCheckbox,MySelect,MyTextInput} from '../components'
import '../styles/styles.css'

export const FormikAbstractation = () => {

  
  return (
    <div>
        <h1> Formik Abstractation Tutorial</h1>
        <Formik 
          initialValues={{
            firstName:'',
            lastName:'',
            email:'',
            terms:false,
            jobType:'',
          }}
          onSubmit={(values)=>{
            console.log(values)
          }}
          validationSchema={Yup.object({
            firstName:Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
            lastName:Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
            email:Yup.string()
            .email('Correo no es valido')
            .required('Requerido'),
            terms:Yup.boolean()
            .oneOf([true],'Debe aceptar las condiciones'),
            jobType:Yup.string()
            .notOneOf(['it-jr'],'Esta opcion no es permitida')
            .required('Requerido')
          })}
        >
          {
            (formik) =>(
              <Form noValidate>
                <MyTextInput 
                  label="First Name" 
                  name="firstName"
                  placeholder='First Name'
                />
              

              <MyTextInput 
                  label="Last Name" 
                  name="lastName"
                  placeholder='Last Name'
                />

              <MyTextInput 
                  type='email'
                  label="Email" 
                  name="email"
                  placeholder='Email'
                />

              
                <MySelect label="jobType" name="jobType">
                  <option value="">Pick something</option>
                  <option value="developer">IT Developer</option>
                  <option value="designer">IT Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-jr">IT Jr.</option>
                </MySelect>

              <ErrorMessage name="jobType" component="span"/>

              <MyCheckbox label="termns & conditions" name="terms" />
              <button type="submit">Submit</button>
            </Form>
            )
          }
        </Formik>
       
    </div>
  )
}
