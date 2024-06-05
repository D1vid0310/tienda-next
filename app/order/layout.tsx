import OrderSidebar from "../componentes/order/OrderSidebar";
import OrderSumary from "../componentes/order/OrderSumary";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="md:flex">
        <OrderSidebar />
        <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
          {children}
        </main>
        <OrderSumary />
      </div>
    </>
  );
}
