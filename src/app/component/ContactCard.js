import React from 'react';
import styles from '@/app/contact/contact.module.css';
import { MdEmail,MdLocationPin,MdLocalPhone } from "react-icons/md";
import Link from 'next/link';

const ContactCard = () => {
    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.grid_card}>
                        <i><MdEmail /></i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected</p>
                        <p className={styles.last_para}>Response time 72 hours</p>
                        <Link href="mailto:info@test.com">Send Email</Link>
                    </div>

                    <div className={styles.grid_card}>
                        <i><MdLocationPin /></i>
                        <h2>Address</h2>
                        <p>Kolkata, India</p>
                        <p className={styles.last_para}>Response time 72 hours</p>
                        
                    </div>

                    <div className={styles.grid_card}>
                        <i><MdLocalPhone /></i>
                        <h2>Phone </h2>
                        <p>+91-9563644782</p>
                        <p className={styles.last_para}>Response time 72 hours</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard