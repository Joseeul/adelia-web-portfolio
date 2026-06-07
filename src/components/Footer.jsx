export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream py-10 border-t border-rose-dark/5 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="font-abeezee text-base text-rose-dark order-2 sm:order-1">
          &copy; {currentYear} Adelia Wiratma. All rights reserved.
        </p>

        {/* Brand Attribution */}
        <p className="font-abeezee text-base text-rose-dark order-1 sm:order-2">
          Made with{" "}
          <span
            className="inline-block text-[#d8708c] animate-pulse mx-0.5"
            style={{ animationDuration: "1.2s" }}
          >
            ❤️
          </span>{" "}
          from <span className="font-semibold text-rose-dark">Adelia</span>
        </p>
      </div>
    </footer>
  );
}
