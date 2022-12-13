import Card from "../components/Card/Card";
import Footer from "../components/Footer";
import { Link, useHistory, Route } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  function delayAndGo(e, path) {

    setTimeout(() => history.push(path), 1000)
    setTimeout(myURL, 1000);
  }
  function myURL() {
    document.location.href = "/attendence";
  }
  return (
    <body>
      <script crossOrigin src="https://cdn.tailwindcss.com"></script>
      <main className="p-10 pt-20 space-y-10">
        <div className="relative flex space-x-16 justify-center">
          <Link to="/spinner" onClick={(e) => delayAndGo(e, "/spinner")}>
            <Card title="Attendance" description="An online attendance management system or digital attendance platform is one of them, which is developed to automate the daily attendance in schools. Additionally, it helps to maintain accurate records and generate summarized student attendance reports. Attendance management system is used by an organization to track staff's time and attendance details. You can save time and effort by calculating your employee's working hours with an accurate attendance management system." navigate="/attendence" />
          </Link>
          <Card title="Academics" description="Here the students can see their performance in real time and compare their results with the current and previous assessments. This visually intuitive design/representation of their performance gives clear details of their performance in just a look. The personal management of academic informa-tion and knowledge can be seen as an essential part of the academics task performance. Studies of how individuals organize their work, and also of the general nature of scientific informationprocessing work can be relevant when designing a personal information system . " navigate="/chart" />

        </div>
        <div className="relative flex space-x-16 justify-center">
          <Card title="Fine" description="This is the place where a student can check if they have any fine/due pending that has to be paid. This lets the student have the information on fees dues early and can make sure that he/she pays the due in time. Otherwise it may lead into the student paying heavy fine or may end up not getting the hall ticket that could prevent the student from writing the exam. Here you can find payment links for the convenience of the student, so that he/she can pay the fee without worrying about to find the links or going to the institution premises to pay the fee offline" />
          <Card title="Leaves" description="This is the place where student can see teh details of all the leaves that the student has taken or the days when he/she was absent. It also gives details of how much leave the student can take in case of emergency so that it doesn't lead to shortage of attendence of the student. It also gives an option to the student to announce their leave to notify the teachers/HODs, before taking the leave.
" />
        </div>
        <div className="relative flex space-x-16 justify-center">
          <Card title="Extra-Curricular" description="Here the student can find tasks to be completed as assignments and extra fun tasks that will get the students some extra points that he/she may redeem to improve the academic result. Also these tasks are made to be interactive and so that he student can have both fun and improve his knowledge on the subject. In this way the student never gets too stressed of the academics and it helps to student to have better understanding of the concepts. Thus it improves overall performance of the student.
" />
          <Card title="Achievements" description="Here the student can view all their achievements, which includes both academic and extra-curricular achievements. This also stores all kinds of e-certificates so that the student can easily access when needed.  Students can use all this in their portfolio.
Here students can also the view the achievements of other students of their class as well as the institution. This helps the students to compare their progress with the rest of the students which can help the students to plan their next objective." />
        </div>
      </main>
      <Footer />
    </body>
  );
}
