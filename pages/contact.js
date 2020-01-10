import Layout from "../components/Layout"
import ContactMail from "../components/Contact/contact-mail"
import ContactSponsor from "../components/Contact/contact-sponso"
import ContactPartner from "../components/Contact/contact-partner"

const Contact = () => (
    <div>
      <Layout>
      <ContactMail />
      <ContactSponsor />
      <ContactPartner />
      </Layout>
    </div>
  );
  
  export default Contact;