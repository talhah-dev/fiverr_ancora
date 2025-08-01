const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-[#1e5b5a] md:pt-20 pt-10 p-5">

        <div class="md:max-w-[80%] w-full mx-auto">

            <div class="flex md:flex-row flex-col sm:items-center md:gap-24 gap-7 justify-between">
                <div class="" data-aos="fade-up">
                    <a href="/index.html">
                        <img src="/docs/assets/images/favicon.png" class="md:h-24 brightness-0 invert h-20" alt="">
                    </a>
                    <p class="text-[#F3F3F5] md:w-[347px] mt-4">Si no te amas ahora mismo, caminaremos contigo hasta que puedas hacerlo.
                    </p>
                </div>

                <ul data-aos="fade-up" data-aos-delay="100" class="flex sm:items-center text-[#EAECF0] md:gap-10 gap-5 sm:flex-row flex-wrap flex-col">
                    <li><a href="/index.html#about" class="transition-all duration-500 hover:opacity-60">Hogar</a></li>
<li><a href="/about.html" class="transition-all duration-500 hover:opacity-60">Acerca de</a></li>
<li><a href="/services.html" class="transition-all duration-500 hover:opacity-60">Servicios</a></li>
<li><a href="/residential-process.html" class="transition-all duration-500 hover:opacity-60">Proceso Residencial</a></li>
<li><a href="/contact.html" class="transition-all duration-500 hover:opacity-60">Contacto</a></li>

                </ul>
            </div>
            <div class="w-full h-[1px] my-10 bg-[#C6C8D0]"></div>
            <div class="flex items-center justify-between gap-5 md:flex-row flex-col">
                <p class="text-[#F3F3F5]">© 2025 ANCORA. All rights reserved.</p>
                <div class="flex items-center gap-6">
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-instagram"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-facebook"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-linkedin"></i>
                    </a>
                    <a href="#">
                            <i class="fa-brands text-2xl text-zinc-300 transition-all duration-500 hover:opacity-70 fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>

    </footer>
`