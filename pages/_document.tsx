import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx);

    return initalProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="shortcut icon"
            href="/assets/images/logo.svg"
            type="image/x-icon"
          />
          <meta name="image" content="https://www.edmer.xyz/assets/images/banner.png"></meta>
          <meta name="title" content="Edmerson Pizarra" />
          <meta
            name="description"
            content="Hello, I’m Edmerson Pizarra, a 17-year-old Software Developer, based in the Philippines."
          />
          <meta
            name="keywords"
            content="Edmer, Edmerson, Pizarra, Web Developer, PocketDevs, Programmer, Freelancer, Filipino, commission, science, bataan, Philippines, Edmerkun, hikari, John, computer, Developer, Software, Solutions, IT, problem, solving"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="John Edmerson Liggu Pizarra"></meta>
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
