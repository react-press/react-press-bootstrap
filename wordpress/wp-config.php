<?php

//Begin Really Simple SSL Load balancing fix
if ((isset($_ENV["HTTPS"]) && ("on" == $_ENV["HTTPS"]))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "1") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "on") !== false))
|| (isset($_SERVER["HTTP_CF_VISITOR"]) && (strpos($_SERVER["HTTP_CF_VISITOR"], "https") !== false))
|| (isset($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_X_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_PROTO"]) && (strpos($_SERVER["HTTP_X_PROTO"], "SSL") !== false))
) {
$_SERVER["HTTPS"] = "on";
}
//END Really Simple SSL

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'react_wordpress' );

/** MySQL database username */
define( 'DB_USER', 'wordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

define('WP_HOME','https://admin.react-press.net/' );
define('WP_SITEURL','https://admin.react-press.net/' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'BqcbLEEhD<EX!5>[ER]ZnkTIbtdkARM!.;MVYAo.&9FU~B6A+6,o;#c^CF0lN-nm' );
define( 'SECURE_AUTH_KEY',  '>-kC&POXezPLW?n:D6es@?t>8EAjk1t22h9eE7{Ud|EPc;oep{;A9!wfjvXHf1jg' );
define( 'LOGGED_IN_KEY',    'u:~_]@Wbl|NrRWJ*dPIvcHHp_d0dVwYk[p,}RL!$Y*o(@AnXh`a<f7ge~@3spJ$0' );
define( 'NONCE_KEY',        '5SU~PL;&bJ#d&CF~Oj#l^(?OR;nGPZgs=Oy8 O<7rLF`IOsd3d&[eQ_YFZp&<tN5' );
define( 'AUTH_SALT',        'ITSk@AvO_wkf2IF[,-tyR-6$Ciod}?#<-:SfW=To~l@N?4.M<TB!-hNNv8;($^>J' );
define( 'SECURE_AUTH_SALT', 'B$Y6|OE&A0</]hGO<g4fA@6+QMl%DdCc0L3rrt6=)sA)Y_xVB?Gf$v-rX:+>`Q;6' );
define( 'LOGGED_IN_SALT',   'K.Pb;2B;l?1<05n,0u*c_A@xX*v1A1J#3|u%!D^_V2~cnMbDLWofej7hoH<`^@{O' );
define( 'NONCE_SALT',       'Y;GLc$q4F?mdOS9<iHOu K)u;G<8}F579r5ZmaTRfJ0%W}_^X&lB[/]T!r=iRpfz' );
/** JWT */
define('JWT_AUTH_SECRET_KEY', 'j[nm6d;KG&Kcko9e/+R,72-SgCbW0y_(]>fVZ~VD4kT:KjLo/`x+ugMvv|]1_s)J');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

define('FS_METHOD','direct');
