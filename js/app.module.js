angular
  .module('multilingual', [
    'pascalprecht.translate',
    'ngCookies'
  ])
  .config(function($translateProvider){
    $translateProvider
      // .translations('ar', {
      //   'HELLO': 'مرحبا'
      // })
      // .translations('en', {
      //   'HELLO': 'Hello'
      // })
      .useStaticFilesLoader({
        prefix: '/translations/locale-',
        suffix: '.json'
      })
      .preferredLanguage('en')
      .useLocalStorage()
      .useSanitizeValueStrategy('escape')
      .useMissingTranslationHandlerLog()
  })
  .run(function($rootScope) {
    $rootScope.lang = 'en';

    $rootScope.default_float = 'left';
    $rootScope.opposite_float = 'right';

    $rootScope.default_direction = 'ltr';
    $rootScope.opposite_direction = 'rtl';
  })
