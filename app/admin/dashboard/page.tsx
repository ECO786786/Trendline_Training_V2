import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";

type InquiryItem = {
  id: number;
  type: "GENERAL" | "CORPORATE";
  fullName: string;
  email: string;
  phone: string;
  company: string | null;
  subject?: string | null;
  message: string | null;
  serviceName?: string | null;
  servicePrice?: string | null;
  createdAt: Date;
};

import { getCourseBySlug } from "@/data/courseDetails";

export default async function DashboardPage() {
  const [registrations] = await pool.execute<RowDataPacket[]>(
    `SELECT r.*, r.course_slug
     FROM registrations r
     ORDER BY r.created_at DESC`
  );

  const registrationsMapped = registrations.map(reg => {
    const courseDetail = reg.course_slug ? getCourseBySlug(reg.course_slug) : null;
    return {
      id: reg.id as number,
      email: reg.email as string,
      company: reg.company as string | null,
      createdAt: reg.created_at as Date,
      course: courseDetail ? { title: courseDetail.title } : null,
      scheduledCourse: null as any,
      deliveryMethod: reg.delivery_method as string,
      firstName: reg.first_name as string,
      surname: reg.surname as string,
    };
  });

  const [corporateRows] = await pool.execute<RowDataPacket[]>(
    `SELECT id, full_name AS fullName, email, phone, company, service_name AS serviceName, 
            service_price AS servicePrice, message, created_at AS createdAt
     FROM corporate_submissions ORDER BY created_at DESC`
  );

  const [contactRows] = await pool.execute<RowDataPacket[]>(
    `SELECT id, full_name AS fullName, email, phone, company, subject, message,
            created_at AS createdAt
     FROM contact_submissions ORDER BY created_at DESC`
  );

  const inquiries: InquiryItem[] = [
    ...corporateRows.map((row) => ({
      id: row.id,
      type: "CORPORATE" as const,
      fullName: row.fullName,
      email: row.email,
      phone: row.phone,
      company: row.company,
      serviceName: row.serviceName,
      servicePrice: row.servicePrice,
      message: row.message,
      createdAt: new Date(row.createdAt),
    })),
    ...contactRows.map((row) => ({
      id: row.id,
      type: "GENERAL" as const,
      fullName: row.fullName,
      email: row.email,
      phone: row.phone,
      company: row.company,
      subject: row.subject,
      message: row.message,
      createdAt: new Date(row.createdAt),
    })),
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Enrollments
        </h2>
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0 shadow-sm border border-gray-200">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Course
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Method
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Company
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {registrationsMapped.map((reg) => (
                  <tr
                    key={reg.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none hover:bg-gray-50"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <p className="font-medium text-gray-900">
                          {reg.firstName} {reg.surname}
                        </p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">{reg.email}</td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {reg.course?.title || (
                        <span className="text-gray-400 italic">
                          General/Unknown
                        </span>
                      )}
                      {reg.scheduledCourse && (
                        <div className="text-xs text-gray-500 mt-1">
                          Starts: {new Date(reg.scheduledCourse.startDate).toLocaleDateString()}
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 capitalize">
                      {reg.deliveryMethod}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {reg.company || "-"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {new Date(reg.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {registrationsMapped.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No enrollments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Recent Inquiries
        </h2>
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-gray-50 p-2 md:pt-0 shadow-sm border border-gray-200">
            <table className="hidden min-w-full text-gray-900 md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Type
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Contact
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Details
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {inquiries.map((inq) => (
                  <tr
                    key={inq.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none hover:bg-gray-50"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                          inq.type === "CORPORATE"
                            ? "bg-purple-50 text-purple-700 ring-purple-600/20"
                            : "bg-blue-50 text-blue-700 ring-blue-600/20"
                        }`}
                      >
                        {inq.type === "CORPORATE" ? "Corporate" : "General"}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 font-medium text-gray-900">
                      {inq.fullName}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <div className="flex flex-col">
                        <span>{inq.email}</span>
                        <span className="text-gray-500 text-xs">
                          {inq.phone}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 max-w-xs truncate">
                      {inq.type === "CORPORATE" ? (
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">
                            {inq.company}
                          </span>
                          <span className="text-xs text-gray-500">
                            {inq.serviceName || "Custom Inquiry"}
                          </span>
                        </div>
                      ) : (
                        <div className="flex flex-col">
                          <span className="font-medium text-gray-900">
                            {inq.subject}
                          </span>
                          <span className="text-xs text-gray-500 truncate">
                            {inq.message}
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {inquiries.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-8 text-center text-gray-500"
                    >
                      No inquiries found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
