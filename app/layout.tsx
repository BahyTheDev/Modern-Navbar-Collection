import Header from "@/components/layout/Header";

export default function RootLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {children}
    </div>
  );
}
