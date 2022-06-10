### Introduction
- This is a Craft 3 codebase,
- The main customisation is done in the **web**, **template** & **config** folders
- [Gulp](https://gulpjs.com/) is a preprocessor used to manage Scripts & Stylesheets. Includes a watch task.
    - [Gulp 4](https://codeburst.io/switching-to-gulp-4-0-271ae63530c0) syntax
- **3rd party** scripts are managed as npm dependencies where possible, scripts are bundled by Gulp, & styles are handled in SCSS using ``@import``
    - [jQuery](https://jquery.com/) scripts are included using gulp via node_modules 
    - [Slick Slider](https://kenwheeler.github.io/slick/) scripts are included using gulp & styles using global.scss, via node_modules
    - [Plyr.io](https://plyr.io/) is used to enhance iframe embeds & local videos
    - [Ihavecookies](https://github.com/ketanmistry/ihavecookies) is used to allow users to control cookie policy inline with GDPR regulation
    - [Google Tag](https://tagmanager.google.com/#/home) / [Google Analytics](https://analytics.google.com/analytics/web/#/p258171687/reports/defaulthome) are used to manage tags added to the site, logic is applied on GTM admin to respect cookie policy choices
- **Craft Plugins** are used to support certain functionality such as maps & Video embeds
    - [Maps](https://plugins.craftcms.com/simplemap) allows google map locations to be selected in admin
    - [Embedded Assets](https://plugins.craftcms.com/embeddedassets) allows videos from youtube & vimeo to be managed as assets
    - [SuperTable](https://plugins.craftcms.com/super-table) used to enhance the fields within craft
    - [FeedMe](https://plugins.craftcms.com/feed-me) used to pull in rss feed as entries.
    - [XML Sitemap](https://plugins.craftcms.com/sitemap) used to control site maps from the control panel
    - [Sprig](https://plugins.craftcms.com/sprig) used to query entries with ajax
    - [SEOMate](https://plugins.craftcms.com/seomate) used to support metadata and schema
    - [Redactor](https://plugins.craftcms.com/redactor) provides a rich WYSIWYG editor
    - [Redactor Custom Styles](https://plugins.craftcms.com/redactor-custom-styles) applies predefined custom styles to selected text in Redactor fields.
    - [Contact Form](https://plugins.craftcms.com/contact-form) add an email contact form

---
### Development Environment
I've managed to set up a nice environment which requires minimal configuration for hosting local sites. I'm using [Laravel](https://laravel.com/) & [Valet](https://laravel.com/docs/8.x/valet).

> Valet is a Laravel development environment for Mac minimalists. No Vagrant, no /etc/hosts file. You can even share your sites publicly using local tunnels. Yeah, we like it too.

> Laravel Valet configures your Mac to always run Nginx in the background when your machine starts. Then, using DnsMasq, Valet proxies all requests on the *.test domain to point to sites installed on your local machine.

> Rather than running a virtual machine Ã  la Docker, Valet runs Nginx in the background and uses your local PHP and MySQL. This keeps your development environment very lean, only using about 7MB of RAM.

> Out of the box, Valet support includes, but is not limited to:
> - [Laravel](https://laravel.com)
> - [Lumen](https://lumen.laravel.com)
> - [Symfony](https://symfony.com)
> - [Zend](https://framework.zend.com)
> - [CakePHP 3](https://cakephp.org)
> - [WordPress](https://wordpress.org)
> - [Bedrock](https://roots.io/bedrock/)
> - [Craft](https://craftcms.com)
> - [Statamic](https://statamic.com)
> - [Jigsaw](http://jigsaw.tighten.co)
> - Static HTML

I found several useful guides online: [here](https://dev.to/pixleight/local-craft-cms-development-with-laravel-valet-27f8), [here](https://medium.com/@jalendport/running-craft-cms-3-on-laravel-valet-6df61e5193fd) & [here](https://bymayo.co.uk/writing/installing-laravel-valet-for-craft-cms)

Once it's all set up next time I need to create a craft theme all I have to do is:
````bash
# Move to your parked projects directory
cd ~/Sites

# Create a new database
mysql -u root -e "CREATE DATABASE new_db_name"

# Install Craft
composer create-project craftcms/craft new-site-name

# Setup Craft, filling in database credentials
# with username root and no password
new-site-name/craft setup
````
``new-site-name`` will automatically be served at ``http://<new-site-name>.test``

Or if preferred, you can install ``phpmyadmin`` and mange the database using the GUI, [here's](https://thepoweruser.wordpress.com/2018/11/22/how-to-set-up-and-use-phpmyadmin-with-laravel-valet/) a guide

Valet will automatically start its daemon each time your machine boots. There is no need to run ``valet start`` or ``valet install`` ever again once the initial Valet installation is complete.

#### Sharing Sites
To share a site, navigate to the site's directory in your terminal and run the ``valet share`` command. A publicly accessible URL will be inserted into your clipboard and is ready to paste directly into your browser. That's it.

general.php - this hooks up the styles to the shared domain which is new each time like: ``  http://d37419f75d41.ngrok.io ``
```php
$isNgrok = array_key_exists("HTTP_X_ORIGINAL_HOST", $_SERVER) && strpos($_SERVER["HTTP_X_ORIGINAL_HOST"], "ngrok");
$host = 'http://' . $_SERVER[$isNgrok ? 'HTTP_X_ORIGINAL_HOST' : 'SERVER_NAME'] . '/';
```
---

### Folder Structure
```text
root/
  config/ 
  src/
  storage/
  templates/
  web/
  - .env
  - .gitignore
  - composer.json
  - craft
  - gulpfile.js
  - package.json
  - readme.md
```
---
### Templates
All the Twig templates that make up the site are stored in here.
```text
templates
  _base-layouts/
  _boilerplate/
  _inline-css/
  _layouts/
  channels/
  - index.twig
  - sprig.twig
```
---
### Twig Templates Using Inheritance
Extending in Twig is a method by which one template can inherit content from another template, while still being able to override parts of that content.

``global-variables.twig`` > ``base-web-layout.twig`` > ``base-html-layout.twig`` > ``generic-page-layout.twig`` > ( ``index.twig``, ``archive.twig``, etc.. )

```text
_base-layouts/
    - error-page-layout.twig
    - generic-page-layout.twig
    - global-varibles.twig
_boilerplate/
    _layouts/
        - base-html-layout.twig
        - base-web-layout.twig
    _partials/
        - critical-css.twig
        - head-js.twig
        - head-meta.twig
        - structured-data.twig
        - tab-handler.twig
        - theme-handler.twig
_inline-css/
    - site-fonts.css
_layouts/
    _block-partials/
        _block-atoms/
            - _button.twig
            - _hero-image.twig
            - _image.twig
            - _social.twig
            - _testimonials.twig
            - _text.twig
            - _video.twig
        - _block-card.twig
        - _block-entry-slider.twig
        - _block-form.twig
        - _block-text.twig
        - _testimonials-video.twig
    - _footer.twig
    - _header.twig
    - _hero.twig
    - _location.twig
    - _navigation.twig
    - _page-content.twig
    - _tabs.twig
channels/
    _components/
        - _filter-component.twig
        - _filter-load-more.twig
        - _load-more.twig
        - _sprig-test.twig
        - _testimonials-load-more.twig
    entires
        - _entry.twig
    - archive.twig
    - archive-blog.twig
    - archive-testimonials.twig
- index.twig
- sprig.twig
```
**index.twig** - New base templates should extend **generic-page-layout.twig** which in turn include the other templates
````html
{% extends "_base-layouts/generic-page-layout.twig" %}
{% block content %}
    <article>
        {% include "_layouts/_hero.twig" %}
        {% include "_layouts/_page-content.twig" %}
    </article>
{% endblock %}
````
Where it makes sense template code is broken up and included on multiple templates, sometimes in multiple places.
```html
<article>
    {% include '_layouts/_block-partials/_block-atoms/image.twig' %}
</article>
```
This sometimes involves passing parameters along with the include, which is useful when standardising data inputs for these components. For example, information from an image field  may be accessible at``entry.image`` in one place & ``block.image`` in another, which may be inside a loop.
```html
with { block: testimonial } // This passes the variable 'testimonial' as 'block'
```
```html
{% for testimonial in testimonials %}
    <article>
      {% include "_layouts/_block-partials/_block-atoms/_testimonial.twig" with {block:testimonial} %}
    </article>  
{% endfor %}
```
In the example below the navigation is being included, and the parameters are controlling the length and starting position for the items in the navigation. This has been used to split the navigation into two halves when necessary
```html
<header>
<nav>
    {% include '_layouts/_navigation.twig' with {length: halfLength, offset: 0} %}
</nav>
<img src="logo"/>
<nav>
    {% include '_layouts/_navigation.twig' with {length: halfLength, offset: halfLength} %}
</nav>
</header>
```
