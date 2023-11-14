import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Je suis en retard, je souhaite obtenir une liste de références de restaurants pour passer une commande de repas."/>
          <meta name="keywords" content="Je suis en retard, je souhaite obtenir une liste de références de restaurants pour passer une commande de repas." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
