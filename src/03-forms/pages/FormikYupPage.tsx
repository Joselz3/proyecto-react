import {useFormik,FormikErrors} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormikYupPage = () => {

  const
  {
    handleSubmit,
    errors,
    touched,
    getFieldProps
  } = useFormik({
    initialValues:
    {
      firstName:'',
      lastName:'',
      email:''
    },
    onSubmit:async (values)=>{
      console.log(values)
    },
    validationSchema:Yup.object({
      firstName:Yup.string()
      .max(15, 'Debe tener 15 caracteres o menos')
      .required('Requerido'),
      lastName:Yup.string()
      .max(15, 'Debe tener 15 caracteres o menos')
      .required('Requerido'),
      email:Yup.string()
      .email('Correo no es valido')
      .required('Requerido')
    })
  })

  return (
    <div>
        <h1> Formik Yup Tutorial</h1>
        <form  onSubmit={handleSubmit} noValidate>
          <label  htmlFor='firstName'>First Name</label>
          <input type="text" {...getFieldProps('firstName')}></input>
          {
            errors.firstName&&touched.firstName&&
            <span>{errors.firstName}</span>
          }
          <label  htmlFor='lastName'>Last Name</label>
          <input type="text" {...getFieldProps('lastName')}></input>
          {
            errors.lastName&&touched.lastName&&
            <span>{errors.lastName}</span>
          }
          <label  htmlFor='email'>Email Address</label>
          <input type="email" {...getFieldProps('email')}></input>
          {
            errors.email&&touched.email&&
            <span>{errors.email}</span>
          }


          <button type="submit">Submit</button>
        </form>
    </div>
  )
}
