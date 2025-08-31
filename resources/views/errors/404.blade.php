<!DOCTYPE html>

<html lang="es">
<!--/Head-->

<head>
    <title>Página de Error 404</title>
    <!-- Meta-Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- Estilo CSS -->
    <link rel="stylesheet" href="{{ asset('css/404.css') }}" type="text/css" media="all">
    <!--/google-fonts-->
    <link href="//fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <!--//google-fonts-->
</head>
<!-- //Head -->
<!-- Body -->

<body>
    <!-- 404 error page -->
    <!--/Error-Page-->
    <section class="w3l-errorhny-main">
        <div class="w3l-errorhnyhny-content">
            <h1 aria-label="404"></h1>
            <div class="errorhnyhny-info flex justify-center mt-6">
                <h2 class="err-text">Página No Encontrada</h2>
                <p>Hm, la página que buscabas parece que ya no existe.</p>
                <a href="{{ url('/dashboard') }}" class="btn btn-style btn-outline-light mt-sm-5 mt-4">
                    Volver a la página de inicio
                </a>
            </div>
        </div>
    </section>
    <!--//Error-Page-->
</body>
<!-- //Body -->

</html>
