import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { GA_TRACKING_ID } from "../lib/js/gtag";
import { option } from "../config";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                // useful for wrapping the whole react tree
                enhanceApp: App => App,
                // useful for wrapping in a per-page basis
                enhanceComponent: Component => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render() {
        return (
            <Html lang="en">
            <Head>
                 {/*Global Site Tag (gtag.js) - Google Analytics*/}
                <script
                    async src={`https://www.googletagmanager.com/gtag/js?id=${option.GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${option.GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,}}
                />
                 {/*Google adsense*/}
                <script
                    data-ad-client="ca-pub-1877318530770347"
                    async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    };
}

export default MyDocument
