// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//import * as admin from 'firebase-admin';

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyCsoaha9ZRreCoP7Vy_DQ2_RyZCDUlyMxQ",
    authDomain: "todolist-7fd59.firebaseapp.com",
    databaseURL: "https://todolist-7fd59.firebaseio.com",
    projectId: "todolist-7fd59",
    storageBucket: "todolist-7fd59.appspot.com",
    messagingSenderId: "918588756866"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
