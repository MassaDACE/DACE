import Header from '../components/Header';
import AttributeContainer from '../components/creation/containers/AttributeContainer';
import ActionsContainer from '../components/creation/containers/ActionsContainer';
import TimelineContainer from '../components/creation/containers/TimelineContainer';

import './Create.css'

function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-8 grid-rows-2 screen">
        <div className='col-span-2'>
          <AttributeContainer />
        </div>
        <div className='col-span-6 row-span-2'>
        <TimelineContainer />
        </div>
        <div  className='col-span-2'>
          <ActionsContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;
