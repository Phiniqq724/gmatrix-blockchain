export default function SearchBars() {
  return (
    <main className="flex w-screen h-[145px] items-center">
      <div className="">
        <input
          type="text"
          title="search"
          placeholder="Atomic Samurai"
          className="w-[690px] h-[45px] rounded-lg outline outline-1 outline-black bg-transparent p-[10px] "
        />
      </div>
      <div></div>
      <div></div>
    </main>
  );
}
