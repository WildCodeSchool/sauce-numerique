import Layout from "../components/Layout"
import ContactMail from "../components/Contact/contact-mail"
import ContactSponsor from "../components/Contact/contact-sponso"

const Contact = () => (
    <div>
      <Layout>
      <ContactMail />
      <ContactSponsor />
      </Layout>
    </div>
  );
  
  export default Contact;