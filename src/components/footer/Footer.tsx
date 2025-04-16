export default function Footer() {
  return (
    <div className="border-t border-neutral-800/90 w-full px-6 py-6 h-24 text-zinc-500">
      <footer className="text-sm text-center text-gray-500 font-display">
        © 2025 Sudhanshu Shekhar. All rights reserved.<br />
        Design inspired by{" "}
        <a
          href="https://tanay.site/"
          target="_blank"
          className="underline hover:text-blue-400 font-body"
        >
          Tanay Vaswani
        </a>.
      </footer>
    </div>
  );
}
