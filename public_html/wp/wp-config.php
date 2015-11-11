<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'crisisbl_wo8537');

/** MySQL database username */
define('DB_USER', 'crisisbl_wo8537');

/** MySQL database password */
define('DB_PASSWORD', 'DbUcd78asNHb');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'nSw[RQaiKX+S-%Noho$Jr>nFwhjb>tl?LmZWrucvv_p$?%[QmsRB{Qu&iqw}s^eL-cb/JAo{eMVUpBO@OzBdTzzjL)HmDgE}!GoHMO@x<H]$-/r!NPA=toBpzw)dRNc*');
define('SECURE_AUTH_KEY', 'PE-U=ikP<zHso}?hW|OHg![H&d;bJ-z_I%ZR+;(KNPNps{cRL([/DM+s/HNxG<Io|MLC{$S+NW^|;cVp&K%UHW(CaxFD-u%Nex{t>$Vo(l|EKrtGCd/DcfQxlzduJix^');
define('LOGGED_IN_KEY', 'gjs!tOvsQT@eC}NZxtmFH)vkew+pj|eyUpuw/ZVaE}}|BVINmnTKw$eHNG_]V[$X*ihv+y[UA*%vpJVs>rU^vh=WB@&B?a)QtS+a+jjaQ&)b<N}BTzGgFa!Z?s!h}-tD');
define('NONCE_KEY', 'B[=w]}Tg(QL/)%Ss;pS<xUNh_g?rT-c{mtL-zBhUy(aueS_!Ei-c%fdmISbn*fB?-rr>JH%tcDZrS&on<GZw!j{<kIzZTe^YwkTb<+O<{U}D$Diey{qn(|^UomQCC-z|');
define('AUTH_SALT', ';{pLjTg@MZJK>qZn}gzoz%kL(-@pXYflWVlYqB]f_{cSW?DEVi{y&l+fP[Aq!SmSxZLfTKaU=&x*kGX$;w?hdtwX]F*ICPJ%Z{VEJa*/ycJ(P(NllMXdtKv*(=G<}b)S');
define('SECURE_AUTH_SALT', '|)RP;$[rukcB?CS}(ImVclFQpa&JD%;bY[jwGB)xRfgDpLxu&FM-NaCSx{dWzFtO*cnmb>FC>pG>I/mC-)^EMFU[@VXFs{it$XLv{o-C^b$k)}cV-{}f@x!TiutuGSGX');
define('LOGGED_IN_SALT', 'S!N+wexAPIhd}pJ(vMueYxui$udDvgg!!_s/Pk+;MJi%Uom*|FxI)IRGsHvfO{QdoB<}!+wg@DxIgUFlywrJ}jl?[;h&RoM;Nisyo^vP_j!t]/Nd/eVEs;aCm@KKU/So');
define('NONCE_SALT', 'SrFtjMr=KNbScxm;yS)Se(d>NymA_&KvTTJIGkRl|-]SzXyp*tz^Kp@S}g^c!+xk>Lj{Y%--Ld>gxF/xIqY@ULxrrk?Z%JAN*k!YCXWdU-$ZDQ})cLXHcoGf+V{Q(WZ)');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_bmix_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/**
 * Include tweaks requested by hosting providers.  You can safely
 * remove either the file or comment out the lines below to get
 * to a vanilla state.
 */
if (file_exists(ABSPATH . 'hosting_provider_filters.php')) {
	include('hosting_provider_filters.php');
}
