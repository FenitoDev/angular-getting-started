/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import routeConfig from "./app/routes";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig), provideFirebaseApp(() => initializeApp({"projectId":"testing-174f9","appId":"1:851778803642:web:bceb14b0f2bd4cdcbb2f83","storageBucket":"testing-174f9.appspot.com","apiKey":"AIzaSyCLlfQZ42QsB1PdE_OX_9tNAeCTqDc-QPU","authDomain":"testing-174f9.firebaseapp.com","messagingSenderId":"851778803642","measurementId":"G-Z83FQV333B"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideFirebaseApp(() => initializeApp({"projectId":"testing-174f9","appId":"1:851778803642:web:bceb14b0f2bd4cdcbb2f83","storageBucket":"testing-174f9.appspot.com","apiKey":"AIzaSyCLlfQZ42QsB1PdE_OX_9tNAeCTqDc-QPU","authDomain":"testing-174f9.firebaseapp.com","messagingSenderId":"851778803642","measurementId":"G-Z83FQV333B"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions())],
}).catch((err) => console.error(err));
