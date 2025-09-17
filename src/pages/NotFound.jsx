
import '../index.css'

function NotFound() {
  return (
      <main class="grid h-screen place-items-center bg-zinc-950 px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
          <p class="text-base font-semibold text-zinc-400">404</p>
          <h1 class="mt-4 text-3xl text-zinc-50 font-semibold">Page not found</h1>
          <p class="mt-6 text-lg text-zinc-400 ">Não há nada aqui, volte.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/" class="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-zinc-50 hover:bg-zinc-300 hover:text-zinc-950">Voltar</a>
            <a href="/" class="text-sm font-semibold text-white">Deveria ter <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </main>
  )
}

export default NotFound
