import { prisma } from "../../../lib/prisma.ts";
import { InquiryType } from "@prisma/client";

export default async function DashboardPage() {
  const registrations = await prisma.registration.findMany({
    orderBy: { createdAt: "desc" },
    include: { course: true, scheduledCourse: true },
  });

  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log(registrations, 'registrations')

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
                {registrations.map((reg) => (
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
                {registrations.length === 0 && (
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
            {/* Mobile view for Enrollments can be added here if needed, keeping simple for now */}
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
                          inq.type === InquiryType.CORPORATE
                            ? "bg-purple-50 text-purple-700 ring-purple-600/20"
                            : "bg-blue-50 text-blue-700 ring-blue-600/20"
                        }`}
                      >
                        {inq.type === InquiryType.CORPORATE ? "Corporate" : "General"}
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
                      {inq.type === InquiryType.CORPORATE ? (
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
