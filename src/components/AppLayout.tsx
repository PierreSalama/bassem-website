// // src/components/AppLayout.tsx
// "use client";

// import { TopBar } from "./TopBar";
// import Footer from "./Footer";

// export default function AppLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <TopBar />
//       <main className="pt-16 min-h-screen">{children}</main>
//       <Footer />
//     </>
//   );
// }


// src/components/AppLayout.tsx
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer"; // ensure this exists or adjust accordingly

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <main className="pt-16 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
