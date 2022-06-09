<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

return [
    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 1,

    // Whether generated URLs should omit "index.php"
    'omitScriptNameInUrls' => true,

    // Whether Dev Mode should be enabled (see https://craftcms.com/guides/what-dev-mode-does)
    'devMode' => $isDev,

    // Whether administrative changes should be allowed
    'allowAdminChanges' => $isDev,

    // Whether crawlers should be allowed to index pages and following links
    'disallowRobots' => !$isProd,


    'aliases' => [
        '@web' => getenv('PRIMARY_SITE_URL'),
        '@assetsUrl' => '@web/assets',
        '@siteURL' => getenv('PRIMARY_SITE_URL'),
        '@siteName' => getenv('SITE_NAME'),
        '@mapApi' => getenv('MAPS_API'),
        '@mapId' => getenv('MAP_ID'),
        '@gtm' => getenv('GTM'),
        '@email' => getenv('SITE_EMAIL'),
    ],
];