<!doctype html>
<html lang="en">
<head>
    <?php include('./templates/head.php') ?>
</head>
<body>

<?php include('./templates/nav.php') ?>
<body>
<section>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <video playsinline autoplay muted loop width="1440px" height="" class="video"   >
                        <source src="./videos/video.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="row">
                <div id="texto" class="letreiro"></div>
                    <script>
                        var div = document.getElementById('texto');
                        var textos = ['BEM VINDO AO MUNDO MÁGICO DA INFLUÊNCIA.'];

                        function escrever(str, done) {
                            var char = str.split('').reverse();
                            var typer = setInterval(function() {
                                if (!char.length) {
                                    clearInterval(typer);
                                    return setTimeout(done, 500);
                                }
                                var next = char.pop();
                                div.innerHTML += next;
                            }, 100);
                        }
                        function limpar(done) {
                            var char = div.innerHTML;
                            var nr = char.length;
                            var typer = setInterval(function() {
                                if (nr-- == 0) {
                                    clearInterval(typer);
                                    return done();
                                }
                                div.innerHTML = char.slice(0, nr);
                            }, 100);
                        }
                        function rodape(conteudos, el) {
                            var atual = -1;
                            function prox(cb){
                                if (atual < conteudos.length - 1) atual++;
                                else atual = 0;
                                var str = conteudos[atual];
                                escrever(str, function(){
                                    limpar(prox);
                                });
                            }
                            prox(prox);
                        }
                        rodape(textos);
                    </script>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
<?php include('./templates/footer.php') ?>
</body>
</html>