<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Delightful!</title>
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/index.jsx'])
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
