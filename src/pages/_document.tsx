
//************************************************************ */
// ARQUIVO SIMILAR AO INDEX.JS NO ReactJS 
//(AQUI É COLOCADO TUDO QUE É ESTÁTICO, TUDO QUE SE MANTERÁ EM TODAS AS TELAS) [É carregado uma única vez]
//************************************************************ */

//IMPORTANDO TAGS 
import Document, { Html, Head, Main, NextScript } from 'next/document';

// CARREGAMENTO ESTÁTICO DE RECURSOS
export default class MyDocument extends Document {

    render() {

        return (

            <Html>
                <Head>

                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
                        rel="stylesheet" />

                </Head>
                <body>
                    <Main />  {/* É responsável por mostrar a aplicação */}
                    <NextScript /> {/* Scripts que o NextJS injeta na aplicaçãod e forma automatizada */}
                </body>
            </Html>

        );



    }


}