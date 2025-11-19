import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'projects/ng-snotify/src/public-api';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule, FormsModule, SnotifyModule], providers: [{ provide: 'SnotifyToastConfig', useValue: ToastDefaults }, SnotifyService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
