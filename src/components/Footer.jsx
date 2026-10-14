export default function Footer() {
  return (
    <footer className="bg-cream py-10 border-t border-rose-dark/5 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-1.5 font-abeezee text-base text-rose-dark">
        <p>Content and design by Adelia Wiratma</p>
        <a href="https://github.com/Joseeul" target="_blank">
          <p className="text-sm opacity-80">
            Layout and coding by <span className="underline">Jose Andreas</span>
          </p>
        </a>
      </div>
    </footer>
  );
}
