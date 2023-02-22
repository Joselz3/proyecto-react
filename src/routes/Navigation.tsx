import {BrowserRouter, Navigate, NavLink} from 'react-router-dom'
import {Routes,Route,Link} from 'react-router-dom'
import { LazyPage1, LazyPage2,LazyPage3} from '../01-lazyload/pages'
/* import { routes } from './routes' */

import logo from '../logo.svg'
import { Suspense } from 'react'
import { ShoppingPages } from '../02-component-patterns/pages/ShoppingPage'

/* export const Navigation = ()=>
{
    return(
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo}></img>
                        <ul>
                            {
                                routes.map(({to,name})=>(
                                    <li key={to}>
                                        <NavLink to={to} className={({isActive})=> isActive ? 'nav-active':''}>{name}</NavLink>
                                    </li>
                                    ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({path,Component})=>(
                                <Route  key={path} path={path} element ={<Component/>}></Route>
                                ))
                        }
                        <Route path='/*' element ={<Navigate to={routes[0].to} replace/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
} */

export const Navigation = ()=>
{
    const routes =[{to:'/',name:'Shopping'},{to:'/about',name:'About'},{to:'/users',name:'Users'}]
    return(
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo}></img>
                        <ul>
                            {
                                routes.map(({to,name})=>(
                                    <li key={to}>
                                        <NavLink to={to} className={({isActive})=> isActive ? 'nav-active':''}>{name}</NavLink>
                                    </li>
                                    ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        <Route path='/about' element={<h1>About</h1>}>
                            
                        </Route>
                        <Route path='/users' element={<h1>users</h1>}>
                            
                        </Route>
                        <Route path='/' element={<ShoppingPages></ShoppingPages>}>
                            
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}