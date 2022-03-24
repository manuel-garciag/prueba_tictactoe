<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>PARTIDA TIC-TAC-TOE</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/game.css') }}" rel="stylesheet">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>

<body class="d-flex h-100 text-center text-white bg-dark">

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">Partida <strong id="codGame"> #1 </strong> </h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="text-white nav-link active" href="#" id="namePlayer">Jugador 1</a>
                    <a class="text-white nav-link" href="#">Salir</a>
                </nav>
            </div>
        </header>

        <main class="px-3">
            <h1>Turno actual para <strong id="turnPlayer">Jugador 2</strong>.</h1>
            <em id="scorePlayers">Puntaje</em>
            <p class="text-muted">Para marcar una casilla solo es necesario dar click.</p>
            <div>
                <div id="gameBoard" >
                        <div class="part">
                            <div class="frame" id="frame1" onclick="setFrame(this)"></div>
                            <div class="frame" id="frame2" onclick="setFrame(this)"></div>
                            <div class="frame" id="frame3" onclick="setFrame(this)"></div>
                        </div>
                        <div class="part">
                            <div class="frame" id="frame4" onclick="setFrame(this)"></div>
                            <div class="frame" id="frame5" onclick="setFrame(this)"></div>
                            <div class="frame" id="frame6" onclick="setFrame(this)"></div>
                        </div>
                        <div class="part">
                            <div class="frame" id="frame7" onclick="setFrame(this)"></div>
                            <div class="frame" id="frame8" onclick="setFrame(this)"></div>
                            <div class="frame" id="frame9" onclick="setFrame(this)"></div>
                        </div>
                </div>
            </div>
        </main>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('js/game.js') }}" defer></script>

</body>

</html>