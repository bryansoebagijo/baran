import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'description';
const defaultKeywords = 'Keywords';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Baran</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/> */}

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

    {/* <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/> */}

    {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}

    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>  */}
{/* 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script> */}

    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />
    <link rel='manifest' href='/manifest.json' />
    <meta name='theme-color' content='#317EFB' />
    <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
    <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <link href="/android-chrome-192x192.png" rel="icon" sizes="192x192"></link>
    <link href="/android-chrome-512x512.png" rel="icon" sizes="512x512"></link>

    <link href="favicon.ico" rel="shortcut icon" type="/x-icon"></link>

  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;
