import StartingPageContent from "../components/StartingPage/StartingPageContent";

const HomePage = () => {
  setTimeout(myURL, 2000);
  function myURL() {
    document.location.href = "/home";
  }
  return (
      <StartingPageContent />
  );
};

export default HomePage;
