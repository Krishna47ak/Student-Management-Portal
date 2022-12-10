import AttendenceTable from "../components/attendanceTable";

function Attendance() {
  return (
    <body>
      <script src="https://cdn.tailwindcss.com"></script>

      <main className=" p-10 pt-20 ">
        <div className="flex items-center justify-center">
          <h1 className=" text-center font-extrabold text-3xl m-auto ">
            CE - SEM-III (I SECTION)
          </h1>
        </div>
        <div className="flex justify-center">
          <table
            id="studentList"
            className="mt-10 scale-x-[0.82]  border-1 border-blue-500 text-center rounded-2xl"
          >
            <thead className="border-b-2 border-blue-500 bg-white">
              <tr>
                <th className="text-xl p-4 px-28 border-x-2 border-t-2 border-blue-500">Name</th>
                <th className="text-xl p-4 px-20 border-r-2 border-t-2 border-blue-500">USN</th>
                <th className="text-xl p-4 px-[3.2rem] border-r-2 border-t-2 border-blue-500">
                  Maths (%)
                </th>
                <th className="text-xl p-4 px-[3.2rem] border-r-2 border-t-2 border-blue-500">
                  Physics (%)
                </th>
                <th className="text-xl p-4 px-[3.2rem] border-r-2 border-t-2 border-blue-500">
                  Chemistry (%)
                </th>
                <th className="text-xl p-4 px-[3.2rem] border-r-2 border-t-2 border-blue-500">
                  Mechanical (%)
                </th>
                <th className="text-xl p-4 px-[3.2rem] border-r-2 border-t-2 border-blue-500">
                  CSE (%)
                </th>
                <th className="text-xl p-4 px-[3.2rem] border-r-2 border-t-2 border-blue-500">
                  Electrical (%)
                </th>
                <th className="text-xl p-4 px-[3.2rem] border-r-2 border-t-2 border-blue-500">
                  Total (%)
                </th>
              </tr>
            </thead>
            <AttendenceTable/>
          </table>
        </div>
      </main>
    </body>
  );
}
export default Attendance;
