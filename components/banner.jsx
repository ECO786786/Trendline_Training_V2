import Link from "next/link";

export default function Banner() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#1E3A8A] text-white ">
      <div className="text-center max-w-[768px] mx-auto">
        <h2 className="mb-5 font-medium text-[52px] leading-[120%] font-heading md:mb-6">
          Ready to Transform Your Organization&apos;s Approach to Data?
        </h2>
        <p className="md:text-md">
          Schedule a consultation with our experts to discuss how our training
          and consultancy services can help your organization leverage data for
          strategic advantage.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-blue-900 bg-white px-6 py-2 text-base font-medium text-blue-900 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
          >
            Schedule a Call
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-border-primary font-medium hover:bg-gray-100 transition-colors fully-rounded"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}
