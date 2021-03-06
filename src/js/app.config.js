(function() {
  'use strict';
  angular.module('app').config(configFn);

  function configFn($translateProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
    $translateProvider.fallbackLanguage('en');

    $translateProvider.useStaticFilesLoader({
      prefix: 'dist/resources/translations/locale-',
      suffix: '.json'
    });
    //$translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('en');

    $translateProvider.useLocalStorage();
  }
})();