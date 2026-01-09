export default function Footer() {
  return (
    <footer className="bg-footerBg text-whiteCustom">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center">
        <p className="text-sm text-center">
          © All rights reserved –{" "}
          <a
            href="https://faroole.com/"
            className="font-semibold hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahmed Mohamed
          </a>
        </p>
      </div>
    </footer>
  );
}
