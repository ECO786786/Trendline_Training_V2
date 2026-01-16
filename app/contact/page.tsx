import SubHero from "@/components/hero/SubHero";
import ContactForm from "@/components/ContactInfo";

export default function Contact() {
  return (
    <>
      <SubHero
        title="Get in Touch"
        description="Have questions about our training programs or consultancy services? Reach out to our team for more information or to schedule a consultation."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <ContactForm />
    </>
  );
}
