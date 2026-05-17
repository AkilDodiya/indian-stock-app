import IndicesPanel from "../components/IndicesPanel";
import PortfolioTracker from "../components/PortfolioTracker";
import Heatmap from "../components/Heatmap";
import NewsFeed from "../components/NewsFeed";
import FilingsList from "../components/FilingsList";
import RSIChart from "../components/RSIChart";
import DeliveryTable from "../components/DeliveryTable";
import Watchlist from "../components/Watchlist";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold">Indian Stock Analysis</h1>
      <IndicesPanel />
      <PortfolioTracker />
      <Heatmap />
      <NewsFeed />
      <FilingsList />
      <RSIChart />
      <DeliveryTable />
      <Watchlist />
    </div>
  );
}
