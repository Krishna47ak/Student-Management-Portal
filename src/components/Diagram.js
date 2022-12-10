import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["1", "2", "3",],
  datasets: [
    {
      label: "CIE",
      data: [65, 59, 90],
      fill: true,
      backgroundColor: "rgba(133, 105, 241, 0.2)",
      borderColor: "rgb(133, 105, 241)",
      pointBackgroundColor: "rgb(133, 105, 241)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(133, 105, 241)",
    },
    {
      label: "Assignments",
      data: [100, 100, 0],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
    {
      label: "Quiz",
      data: [59, 9, 52],
      fill: true,
      backgroundColor: "rgba(76, 200, 90, 0.2)",
      borderColor: "rgb(72, 197, 87)",
      pointBackgroundColor: "rgb(72, 197, 87))",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(71, 197, 86)",
    },
  ],
};


export function Diagram() {
  return (

    <main className="p-20 pt-20 space-y-10">
      <div className="flex space-x-12 justify-center border-4 border-[#7dd3fc] shadow-2xl p-5  rounded-[0.75rem] w-8/10 bg-[#e0f2fe] grid-rows-3">
        <div className="h-6 text-center font-quicksand font-bold">
          <h2 className="text-2xl">SUBJECTS</h2>
          <ul className="p-5 flex-auto font-quicksand block space-y-10 mt-10">
            <button className="bg-transparent hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent w-[14rem]">
              Math
            </button>
            <button className="bg-transparent hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent w-[14rem]">
              C Programming
            </button>
            <button className="bg-transparent hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent w-[14rem]">
              Java
            </button>{" "}
            <button className="bg-transparent hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent w-[14rem]">
              English
            </button>
          </ul>
        </div>
        <div className="bg-[#94a3b8] w-[0.1rem] h-[27rem] left-2/3"></div>
        <div className="h-6 text-center font-bold">
          <h2 className="text-2xl">PERFORMANCE</h2>
          <div className="rounded-lg overflow-hidden mt-16">
            <Radar data={data} />
          </div>
        </div>
        <div className="bg-[#94a3b8] w-[0.1rem] h-[27rem] left-2/3"></div>
        <div className="h-6 text-center font-bold px-24">
          <h2 className="text-2xl">COMPLETION</h2>
          <div className="p-15">
            <div className="py-20 scale-x-125">
              <div className="flex justify-between ">
                <span className="text-base font-medium text-blue-700 dark:text-black">
                  CIEs
                </span>
                <span className="text-sm font-medium text-[#9725f2] dark:text-black">
                  45%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#9725f2] h-2.5 rounded-full"
                ></div>
              </div>

              <div className="">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-blue-700 dark:text-black">
                    Assignment
                  </span>
                  <span className="text-sm font-medium text-[#2babf2] dark:text-black">
                    69%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-[#2babf2] h-2.5 rounded-full"
                  // style="width: 69%"
                  ></div>
                </div>

                <div className="">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-black">
                      Quiz
                    </span>
                    <span className="text-sm font-medium text-[#00d75e] dark:text-black">
                      20%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-[#00d75e] h-2.5 rounded-full"
                    // style="width: 20%"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p calss="text-black text-left mt-3"></p>
          <div className="absolute bottom-5 inline-block hover:scale-105"></div>
        </div>
      </div>
    </main>
  );
}
