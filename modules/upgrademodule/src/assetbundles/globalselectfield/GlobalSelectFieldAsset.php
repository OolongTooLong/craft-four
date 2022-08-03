<?php
/**
 * Upgrade Module module for Craft CMS 3.x
 *
 * A module to apply custom styles & functions to the admin area
 *
 * @link      thomas-conner.com
 * @copyright Copyright (c) 2021 George Hawthorne
 */

namespace modules\upgrademodule\assetbundles\globalselectfield;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * GlobalSelectFieldAsset AssetBundle
 *
 * AssetBundle represents a collection of asset files, such as CSS, JS, images.
 *
 * Each asset bundle has a unique name that globally identifies it among all asset bundles used in an application.
 * The name is the [fully qualified class name](http://php.net/manual/en/language.namespaces.rules.php)
 * of the class representing it.
 *
 * An asset bundle can depend on other asset bundles. When registering an asset bundle
 * with a view, all its dependent asset bundles will be automatically registered.
 *
 * http://www.yiiframework.com/doc-2.0/guide-structure-assets.html
 *
 * @author    George Hawthorne
 * @package   UpgradeModule
 * @since     1.0.0
 */
class GlobalSelectFieldAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * Initializes the bundle.
     */
    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = "@modules/upgrademodule/assetbundles/globalselectfield/dist";

        // define the dependencies
        $this->depends = [
            CpAsset::class,
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/GlobalSelect.js',
        ];

        $this->css = [
            'css/GlobalSelect.css',
        ];

        parent::init();
    }
}
