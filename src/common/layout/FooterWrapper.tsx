type FooterWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FooterWrapper({
  children,
  className,
}: FooterWrapperProps) {
  return (
    <footer
      className={`w-full flex justify-center pb-2 fixed bottom-0 ${className}`}
    >
      {children}
    </footer>
  );
}
