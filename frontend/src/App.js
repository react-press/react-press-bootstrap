import React from "react";
import MainNav from './components/main/MainNav'
import { UserProvider } from '../src/components/main/WordpressProvider';


const App = () =>  (

      <UserProvider>
      <React.Fragment>
        <MainNav/>
        <div className="text-center pb-3">
          <p>Created By Andrew & Von</p>
            </div>
      </React.Fragment>
      </UserProvider>
)

export default App;



