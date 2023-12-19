//redux store and redux are used interchangeably. Both stand for a container for js apps.
//this stores the whole state of the app in an immutable object tree.
//the point of redux is to have a single store for your application. 

import { configureStore} from "@reduxjs/toolkit";

export const store = configureStore(); 