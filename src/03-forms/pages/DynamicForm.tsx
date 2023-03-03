import React from 'react'
import formJson from "../data/custom-form.json";
import { Formik,Form } from "formik";
import * as Yup from 'yup'
import { MySelect, MyTextInput } from '../components';

const initialValues:{[key:string]:any}={}
const requiredFields:{[key:string]:any}={}

for (const input of formJson) {
  initialValues[input.name] = input.value
  if(!input.validations) continue

  let schema = Yup.string()


  for (const rule of input.validations) {
    {
      if(rule.type ==='required')
      {
        schema = schema.required('Este campo es requerido')
      }
      if(rule.type ==='minLength')
      {
        schema = schema.min((rule as any).value || 1, `Minimo de ${(rule as any).value} caracteres`)
      }
      if(rule.type ==='email')
      {
        schema = schema.email(`El correo no es valido`)
      }
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values)=>{
          console.log(values)
        }}
        >
          {(formik)=>(
            <Form noValidate>
              {
                formJson.map(({label,type,placeholder,name,options})=>{
                  switch (type) {
                    case 'text'||'password'||'email':
                    return<MyTextInput 
                    key={name}
                      type={(type as any)} 
                      label={label} 
                      name={name}
                      placeholder={placeholder}
                      />;
                      case 'select':
                        console.log(type)
                    return<MySelect 
                    key={name}
                      label={label} 
                      name={name}
                      options={options}
                      >
                        <option value="">Select an option</option>
                        {
                          options?.map(({id,label})=>(
                            <option key={id} value={id}>{label}</option>
                            ))
                        }
                      </MySelect>
                  
                    default:
                      break;
                      /* throw new Error(`Type:${type} no es soportado`); */
                      
                  }
                  
                })
              }
          <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
    </div>
  )
}
