import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async() => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access your account and manage your finances with ease."
          />
          <TotalBalanceBox 
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {2000.90}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSideBar user = {loggedIn} 
        transactions = {[]}
        banks = {[{ currentBalance:123.4},{ currentBalance:124.50}]}
      />
    </section>
  );
};

export default Home;
