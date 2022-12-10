import useAttendence from "../api/useAttendance";

export default function AttendenceTable() {
    const [attendence] = useAttendence()

    return (
        <>
            {attendence.map((details) => {
                var totalMarks = parseFloat(((details.math + details.physics + details.chemistry + details.mechanical + details.cse + details.electrical)/600)*100).toFixed(2); 
                return (
                    <tbody className="border-b-2 border-blue-500 bg-white">
                        <tr>
                            <td className="p-4 text-lg border-x-2 border-blue-500 ">{details.name}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{details.usn}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{details.math}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{details.physics}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{details.chemistry}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{details.mechanical}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{details.cse}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{details.electrical}</td>
                            <td className="p-4 text-lg border-r-2 border-blue-500 ">{totalMarks}</td>
                        </tr>
                    </tbody>
                    
                )
            })}
        </>
    )
}