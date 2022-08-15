import { InjectionToken } from '@angular/core';

export interface IAppConfig {
  apiUrl: string;
}

export const APP_CONFIG: InjectionToken<string> = new InjectionToken<string>('APP_CONFIG');
