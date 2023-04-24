import { createRequire } from 'module';
import React from "react";

const require = createRequire();
const Layout =({children}) =>{
    return(
        <div className="container">
            {children}
        </div>
    )
}
   
export default Layout;