import { useEffect, useState } from "react";
import socket from "../lib/socket";
import type { Student } from "../interfaces/student.interface";

export default function StudentInfo() {
  const [student, setStudent] = useState<Student | undefined>();

  console.log(student?.profileUrl);

  useEffect(() => {
    socket.on("studentInfo", (payload) => {
      setStudent(payload.data);
    });
  }, []);

  useEffect(() => {
    if (!student) return;

    setTimeout(() => {
      setStudent(undefined);
    }, 5000);
  }, [student]);

  return (
    <div
      className={`flex flex-row gap-4 p-8 bg-white/80 w-[50%] rounded-2xl items-start ${
        student ? "" : "justify-center"
      }`}
    >
      {student ? (
        <>
          {" "}
          <div className="rounded-full border-orange-400 border-4 size-40">
            <img
              src={student?.profileUrl}
              className="size-full border rounded-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start p-4">
            <h5 className="font-extrabold text-3xl">
              {student?.first_name} {student?.middle_name} {student?.last_name}
            </h5>

            <h3 className="font-bold text-xl">
              Grade & Section: {student?.class.grade_lvl} -{" "}
              {student.class.section}
            </h3>

            <h2 className="font-semibold text-lg">
              Teacher: {student.class.class_teacher.first_name}{" "}
              {student.class.class_teacher.middle_name}{" "}
              {student.class.class_teacher.first_name}
            </h2>

            <h2 className="font-semibold text-lg">
              Student ID: {student.rfid_tag_uid}
            </h2>
          </div>
        </>
      ) : (
        <h1 className="font-bold">TAP YOUR ID TO VIEW DETAILS...</h1>
      )}
    </div>
  );
}
