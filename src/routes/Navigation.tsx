import {BrowserRouter, Navigate, NavLink} from 'react-router-dom'
import {Routes,Route,Link} from 'react-router-dom'
import 
{ 
    FormikAbstractation,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage
} from '../03-forms/pages'

import logo from '../logo.svg'

export const Navigation = ()=>
{
    return(
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={logo}></img>
                    <ul>
                        <li>
                            <NavLink to='/register' className={({isActive})=> isActive ? 'nav-active':''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({isActive})=> isActive ? 'nav-active':''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({isActive})=> isActive ? 'nav-active':''}>Fromik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-components' className={({isActive})=> isActive ? 'nav-active':''}>Fromik Components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstractation' className={({isActive})=> isActive ? 'nav-active':''}>Fromik Abstractation</NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='register' element ={<RegisterPage></RegisterPage>}></Route>
                    <Route path='formik-basic' element ={<FormikBasicPage></FormikBasicPage>}></Route>
                    <Route path='formik-yup' element ={<FormikYupPage></FormikYupPage>}></Route>
                    <Route path='formik-components' element ={<FormikComponents></FormikComponents>}></Route>
                    <Route path='formik-abstractation' element ={<FormikAbstractation></FormikAbstractation>}></Route>
                    <Route path='/*' element ={<Navigate to='/register' replace/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}