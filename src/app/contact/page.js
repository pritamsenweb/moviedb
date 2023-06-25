import styles from './contact.module.css';
import ContactCard from '../component/ContactCard';
import ContactForm from '../component/ContactForm';

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>We would love to head <span>from you</span></h2>
          <ContactForm />
        </section>
        
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117791.38332723791!2d88.38624253906248!3d22.6917613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f44db212de9%3A0x1df8f78553517d3f!2sNavita%20Condominium%20Complex!5e0!3m2!1sen!2sin!4v1687660421831!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
    </>
  )
}

export default Contact