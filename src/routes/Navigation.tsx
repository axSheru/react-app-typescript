import { BrowserRouter, Navigate, NavLink, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import logo from '../logo.svg';
import { Suspense } from 'react';

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loading...</span> }>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={ logo } alt="React logo" />
                        <ul>
                            {
                                // routes.map( route => ( // Se desestructura.
                                routes.map( ({ to, name }) => (
                                    <li key={ to }>
                                        <NavLink
                                            to={ to } 
                                            className={ ({isActive}) => isActive ? 'nav-active' : '' }>
                                                { name }
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            // routes.map( route => ( //Se desestructura.
                            routes.map(({ path, Component }) => (
                                <Route
                                    key={ path }
                                    path={ path }
                                    element={ <Component /> }
                                />
                            ))
                        }
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
