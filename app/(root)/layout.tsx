import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {  $id: "user_001",
    email: "john.doe@example.com",
    userId: "123456",
    dwollaCustomerUrl: "https://api.dwolla.com/customers/abcdef123456",
    dwollaCustomerId: "abcdef123456",
    firstName: "John",
    lastName: "Doe",
    address1: "123 Main St",
    city: "Los Angeles",
    state: "CA",
    postalCode: "90001",
    dateOfBirth: "1990-01-01",
    ssn: "123-45-6789" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} alt="Menu Icon" width={30} height={30} />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
