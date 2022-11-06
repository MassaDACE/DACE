import Header from '../components/Header';
import { useBearby } from '@hicaru/bearby-react';

function Home() {
  const { connected, enabled, wallet, massa, contract, base58, net, period } = useBearby();

  return (
    <div>
      <Header />
      <div>
        </div>
    </div>
  );
}

export default Home;
