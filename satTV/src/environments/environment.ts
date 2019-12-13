// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyB30xLVO1F08etHDnyPRfY6fLx___d2ePs",
    authDomain: "sattv-84c5d.firebaseapp.com",
    databaseURL: "https://sattv-84c5d.firebaseio.com",
    projectId: "sattv-84c5d",
    storageBucket: "sattv-84c5d.appspot.com",
    messagingSenderId: "1098273859595",
    appId: "1:1098273859595:web:eca641c770afe63dbdbf0e",
    measurementId: "G-9X38T4R7LH"
  },
  collection:{
    user: 'users',
    transaction: 'transaction'
  } 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
