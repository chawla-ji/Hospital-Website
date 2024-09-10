import VetAppointmentPage from "./components/AppointmentForm";
import OnlineConsultation from "./components/Consulation";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar";
import ReviewList from "./components/Reviews/ReviewList";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <OnlineConsultation></OnlineConsultation>
      <ReviewList></ReviewList> */}
      <VetAppointmentPage></VetAppointmentPage>
      <Footer></Footer>
    </>
  );
}

export default App;
