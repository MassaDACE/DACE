import Header from '../components/Header';
import AttributeContainer from '../components/creation/containers/AttributeContainer';
import ActionsContainer from '../components/creation/containers/ActionsContainer';
import TimelineContainer from '../components/creation/containers/TimelineContainer';
import PreviewContainer from '../components/creation/containers/PreviewContainer';
import ImagesContainer from '../components/creation/containers/ImagesContainer';

import './Create.css'

function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 screen">
        <div className='col-span-1'>
          <AttributeContainer />
          <ActionsContainer />
        </div>
        <div className='col-span-2'>
        <TimelineContainer />
        </div>
        <div className='col-span-2'>
          <PreviewContainer />
          <ImagesContainer />
        </div>
      </div>
    </div>
  );
}

export default Home;