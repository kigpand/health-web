type HeaderWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeaderWrapper({
  children,
  className = "",
}: HeaderWrapperProps) {
  return (
    <header
      className={`w-full flex justify-center text-2xl font-bold bg-white text-primary py-6 ${className}`}
    >
      {children}
    </header>
  );
}
