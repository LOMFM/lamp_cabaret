// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://www.crmgrow.com/api',
  website: 'https://www.crmgrow.com',
  storage: 'https://www.crmgrow.com/api/file',
  app_name: 'teamgrow-dev',
  push_key: 'BE_FojfPS_0FbZGafCaHBpaZldJ91dkeXA6zGtQiM3R4A0oNOW76ejjEA2bRqAomwbIqGbCDsEjK_1VyCX_496o',
  stripe_key: 'pk_live_p0mahSVHjPHiknXx0iEEta8400Gn8n3onx',
  office_key: '495c34a1-c12c-4932-b134-7f3c3ec491d6',
  google_key: '768616131138-q3scv9ev1kl7skkfgevk0ee78pngo6oo.apps.googleusercontent.com',
  redirect_uri : 'http://localhost:4200/signup',
  office_signin_redirect_uri: 'http://localhost:4200/login'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// Stripe test Key
// pk_test_Fiq3VFU3LvZBSJpKGtD0paMK0005Q6E2Q2