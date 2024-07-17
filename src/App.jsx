import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import AboutUganda from './pages/AboutUganda/AboutUganda';
import Contact from './pages/Contact/Contact';
import Events from './pages/Events/Events';
import Interest from './pages/Interest/Interest';
import Join from './pages/Join/Join';
import Resources from './pages/Resource/Resources';
import SchoolSystem from './pages/SchoolSystem/SchoolSystem';


const App = () => {
  return (
    <div className='container-fluid gx-0'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about_us" element={<About />} />
          <Route path="uganda_information" element={<AboutUganda />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          {/* <Route path="join_partnership" element={<Interest />} /> */}
          <Route path="join_partnership" element={<Join />} />
          <Route path="resources" element={<Resources />} />
          <Route path="schools_system_uganda" element={<SchoolSystem />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;