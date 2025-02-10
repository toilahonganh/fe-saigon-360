import "./../../styles/globals.css";
import { BackToTop } from "@/components/shared";
import { Header } from "../components/header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* <div className="mb-24"> */}
                <Header />
            {/* </div> */}
            <main>{children}</main>
            <BackToTop />
        </>
    );
}
