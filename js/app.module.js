angular
  .module('multilingual', [
    'pascalprecht.translate',
    'ngCookies'
  ])
  .config(function($translateProvider){
    $translateProvider
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
