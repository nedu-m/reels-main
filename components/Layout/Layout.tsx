import Navbar from "@components/Layout/Navbar";
import Footer from "@components/Layout/Footer";
import Seo from "@components/Seo/Seo";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Seo
        title="Reels - Movies"
        description="Reels is a movie website 
        for all the latest movie downloads"
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
