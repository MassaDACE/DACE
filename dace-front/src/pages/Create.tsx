import Header from '../components/Header';
import '../App.css';
import ImageUploader from '../components/ImageUploader';

function Home() {
  return (
    <div>
      <Header />
      <div className='mt-10'>
        <ImageUploader />
      </div>
    </div>
  );
}

export default Home;
