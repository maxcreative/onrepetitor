import Header from "./Header";
import Nav from "./Nav";
import Layout from "./Layout";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Layout>
        <div className="mt-20 h-[700px] bg-green-600">
          <h1>MAIN COMPONENTS</h1>
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Home;
