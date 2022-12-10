function Footer(){
    return (
      <footer className="bg-gray-600 h-44 pl-5 flex-col">
        <div className="">
          <p className="text-slate-400 w-96 py-8">
            New Horizon College of Engineering is an Autonomous college
            affiliated to Visvesvaraya Technological University(VTU).
          </p>
        </div>
        <div className="flex items-end">
          <div className="mr-5 text-white hover:text-gray-400">
            Copyright 2022
          </div>
          <div className="mr-5 text-white hover:text-gray-400">
            Terms of policy
          </div>
          <div className="mr-5 text-white hover:text-gray-400">Security</div>
          <div className="mr-5 text-white hover:text-gray-400">Privacy</div>
        </div>
      </footer>
    );

}
export default Footer;