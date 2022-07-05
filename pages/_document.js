import Document, { Html, Main,Head, NextScript } from 'next/document'
import withTranslation from 'next-translate/withTranslation'
import getT from 'next-translate/getT'

const BaseCSS = ({ css }) =>
 <style
   dangerouslySetInnerHTML={{
     __html: css
   }}
 />

BaseCSS.defaultProps = {
 css: '*{box-sizing:border-box}body{margin:0}'
}

class MyDocument extends Document {

 static async getInitialProps(ctx) {
   const originalRenderPage = ctx.renderPage
   const locale = ctx.locale;
   
   const t = await getT(locale, 'common')

   // Run the React rendering logic synchronously
   ctx.renderPage = () =>
     originalRenderPage({
       // Useful for wrapping the whole react tree
       enhanceApp: (App) => App,
       // Useful for wrapping in a per-page basis
       enhanceComponent: (Component) => Component,
     })

   // Run the parent `getInitialProps`, it now includes the custom `renderPage`
   const initialProps = await Document.getInitialProps(ctx)
   

       
   return { ...initialProps, locale ,t};
 }

 render() {
   
   const description = this.props.t('titleـpage')
   
   return (
     <Html lang={this.props.locale} >
       <Head>
         <link rel="icon" href="/favicon.ico" />
         <meta name={this.props.t('titleـpage')} content={this.props.t('titleـpage')} />
         <meta name='generator' content='mdx-docs' />

         {/* <link href="https://fonts.googleapis.com/css?family=Capriola&amp;subset=latin-ext" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css?family=Satisfy" rel="stylesheet" />
         <link href="https://fonts.googleapis.com/css?family=Alex+Brush&amp;subset=latin-ext" rel="stylesheet"></link>
         <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700,800,900&display=swap" rel="stylesheet"></link>
         <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800" rel="stylesheet" /> */}
         <BaseCSS />
       </Head>
       <body className={`maharahHome`}>
         <Main />
         <NextScript />
       </body>
     </Html>
   )
 }
}   
export default withTranslation(MyDocument)