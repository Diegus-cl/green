export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 px-10 border-r border-gray-300 md:relative md:pt-8 md:pb-0 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/50">
      <div className="flex flex-col items-center w-20 py-10 md:w-auto">
        <h1 className="text-step-0 font-bold text-green-500 tracking-wider drop-shadow-[0_0_0.1rem_rgb(34_197_94)]">GREEN</h1>
        <p className="text-center text-zinc-300 text-step--2">reservations</p>
      </div>
    </nav>
  );
}