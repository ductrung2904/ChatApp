import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet" href="../styles/bootstrap.min.css" />
                    <script src="../styles/bootstrap.bundle.min.js"></script>
                    <script src="https://use.fontawesome.com/23d887ee25.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument