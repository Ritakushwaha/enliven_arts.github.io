(function() {

  /*	check if webfonts are disabled by user setting via cookie - or user must opt in.	*/
  var html = document.getElementsByTagName('html')[0];
  var cookie_check = html.className.indexOf('av-cookies-needs-opt-in') >= 0 || html.className.indexOf('av-cookies-can-opt-out') >= 0;
  var allow_continue = true;
  var silent_accept_cookie = html.className.indexOf('av-cookies-user-silent-accept') >= 0;

  if( cookie_check && ! silent_accept_cookie )
  {
    if( ! document.cookie.match(/aviaCookieConsent/) || html.className.indexOf('av-cookies-session-refused') >= 0 )
    {
      allow_continue = false;
    }
    else
    {
      if( ! document.cookie.match(/aviaPrivacyRefuseCookiesHideBar/) )
      {
        allow_continue = false;
      }
      else if( ! document.cookie.match(/aviaPrivacyEssentialCookiesEnabled/) )
      {
        allow_continue = false;
      }
      else if( document.cookie.match(/aviaPrivacyGoogleWebfontsDisabled/) )
      {
        allow_continue = false;
      }
    }
  }

  if( allow_continue )
  {
    var f = document.createElement('link');

    f.type 	= 'text/css';
    f.rel 	= 'stylesheet';
    f.href 	= '//fonts.googleapis.com/css?family=Open+Sans:400,600';
    f.id 	= 'avia-google-webfont';

    document.getElementsByTagName('head')[0].appendChild(f);
  }


  (function($) {

      /*	check if google analytics tracking is disabled by user setting via cookie - or user must opt in.	*/

      var analytics_code = "<!-- Global site tag (gtag.js) - Google Analytics -->\n<script async src=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=UA-168372089-1\"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-168372089-1');\n<\/script>".replace(/\"/g, '"' );
      var html = document.getElementsByTagName('html')[0];

      $('html').on( 'avia-cookie-settings-changed', function(e)
      {
          var cookie_check = html.className.indexOf('av-cookies-needs-opt-in') >= 0 || html.className.indexOf('av-cookies-can-opt-out') >= 0;
          var allow_continue = true;
          var silent_accept_cookie = html.className.indexOf('av-cookies-user-silent-accept') >= 0;
          var script_loaded = $( 'script.google_analytics_scripts' );

          if( cookie_check && ! silent_accept_cookie )
          {
            if( ! document.cookie.match(/aviaCookieConsent/) || html.className.indexOf('av-cookies-session-refused') >= 0 )
            {
              allow_continue = false;
            }
            else
            {
              if( ! document.cookie.match(/aviaPrivacyRefuseCookiesHideBar/) )
              {
                allow_continue = false;
              }
              else if( ! document.cookie.match(/aviaPrivacyEssentialCookiesEnabled/) )
              {
                allow_continue = false;
              }
              else if( document.cookie.match(/aviaPrivacyGoogleTrackingDisabled/) )
              {
                allow_continue = false;
              }
            }
          }

          if( ! allow_continue )
          {
  //						window['ga-disable-UA-168372089-1'] = true;
            if( script_loaded.length > 0 )
            {
              script_loaded.remove();
            }
          }
          else
          {
            if( script_loaded.length == 0 )
            {
              $('head').append( analytics_code );
            }
          }
      });

      $('html').trigger( 'avia-cookie-settings-changed' );

  })( jQuery );




  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/js/avia.js?ver=4.7.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/js/shortcodes.js?ver=4.7.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/contact/contact.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/gallery/gallery.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/gallery_horizontal/gallery_horizontal.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/iconlist/iconlist.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/image_hotspots/image_hotspots.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/magazine/magazine.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/portfolio/isotope.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/masonry_entries/masonry_entries.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/notification/notification.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/portfolio/portfolio.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow/slideshow.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/numbers/numbers.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/progressbar/progressbar.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow/slideshow-video.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow_accordion/slideshow_accordion.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow_fullscreen/slideshow_fullscreen.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow_layerslider/slideshow_layerslider.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/tabs/tabs.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/testimonials/testimonials.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/toggles/toggles.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/video/video.js?ver=5.4.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/js/aviapopup/jquery.magnific-popup.min.js?ver=4.7.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/js/avia-snippet-lightbox.js?ver=4.7.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/js/avia-snippet-sticky-header.js?ver=4.7.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/js/avia-snippet-site-preloader.js?ver=4.7.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-content/themes/enfold/js/avia-snippet-widget.js?ver=4.7.5'></script>
  <script type='text/javascript' src='https://www.enlivenacs.com.au/wp-includes/js/wp-embed.min.js?ver=5.4.5'></script>
