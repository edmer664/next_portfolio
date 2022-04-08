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

          <meta
            name="description"
            content="Hello, I’m Edmerson Pizarra, a 17-year-old Freelance Software Developer, based in the Philippines."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://edmer.xyz" />
          <meta property="og:title" content="Edmerson Pizarra" />
          <meta
            property="og:description"
            content="Hello, I’m Edmerson Pizarra, a 17-year-old Freelance Software Developer, based in the Philippines."
          />
          <meta
            property="og:image"
            content="https://www.edmer.xyz/assets/images/banner.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://edmer.xyz" />
          <meta property="twitter:title" content="Edmerson Pizarra" />
          <meta
            property="twitter:description"
            content="Hello, I’m Edmerson Pizarra, a 17-year-old Freelance Software Developer, based in the Philippines."
          />
          <meta
            property="twitter:image"
            content="https://www.edmer.xyz/assets/images/banner.png"
          />

          <meta
            name="image"
            content="https://www.edmer.xyz/assets/images/banner.png"
          ></meta>
          <meta name="title" content="Edmerson Pizarra" />

          <meta
            name="keywords"
            content="Edmer, Edmerson, Pizarra, Web Developer, PocketDevs, Programmer, Freelancer, Filipino, commission, science, bataan, Philippines, Edmerkun, hikari, John, computer, Developer, Software, Solutions, IT, problem, solving, django, javascript, python, technology, edmerpizarra, programming, contact"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="John Edmerson Liggu Pizarra" />
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
