const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Il Tuo Nome. Tutti i diritti riservati.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Creato con ❤️ usando React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
