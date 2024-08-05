import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Durgesh",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access your account and manage your finances with ease."
          />
          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1456.90}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
