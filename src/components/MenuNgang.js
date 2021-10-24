import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../config/routes';

// Arrow Function components
export const MenuNgang = () => {
    return (
        <div>
            {routes.map((item) => (
                <Link key={item.path} to={item.path} className="menuItem" 
                    style={{ color:'red',
                        margin:13,
                        textDecoration: 'none',
                        fontWeight:'bold',
                        fontSize:25
                    }}>{item.label}</Link>
                ))}
        </div>
    )
};