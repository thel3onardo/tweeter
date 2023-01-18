<div class="w-full min-h-screen bg-light flex justify-center items-center">
    <div class="h-[760px] w-[1300px] flex rounded-md overflow-hidden shadow-lg">
        <div class="w-2/4 h-full flex flex-col justify-between py-10 px-16 bg-white">
            <div>
                <img src="/images/tweeter.svg" alt="Tweeter's logo">
            </div>
            <div class="flex flex-col">
                <h2 class="font-poppins font-semibold text-3xl">Welcome back!</h2>
                <p class="text-surface-300 mt-2 mb-6 unstyled">Log in into your account and connect to the world.</p>

                <div class="my-4">
                    <label for="email">
                        <span class="font-noto font-medium">E-mail</span>
                        <input type="email" id="email" class="px-3 py-2 bg-red-500" minlength="2" required>
                    </label>
                </div>
                <div class="my-4">
                    <label for="password">
                        <span class="font-noto font-medium">Password</span>
                        <input type="password" id="email" class="px-3 py-2 bg-red-500" minlength="2" required>
                    </label>
                </div>
                <button class="btn btn-filled-primary mt-5">Logar</button>
            </div>
            <span class="text-sm text-surface-300">Todos os direitos reservados</span>
        </div>
        <div class="w-2/4 h-full relative flex items-end">
            <div class="absolute w-full h-full z-20 bg-primary-500 bg-opacity-60" />
            <img src="/images/auth-img.webp" alt="wip" class="object-cover object-right h-full w-full absolute z-10">
            <div class="px-8 py-16 z-30">
                <h1 class="text-poppins font-bold text-6xl text-white drop-shadow-xl">Conecte-se com o mundo</h1>
            </div>
        </div>
    </div>
</div>