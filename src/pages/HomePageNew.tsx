import React from 'react';
import Layout from '../components/Layout/Layout';
import styles from './HomePageNew.module.css';
import DownloadButton from "../components/Buttons/DownloadButton";
import LinkedInButton from "../components/Buttons/LinkedInButton";
import TelegramButton from "../components/Buttons/TelegramButton";
import MailButton from "../components/Buttons/MailButton";
import TagsList from "../components/TagsList/TagsList";
import photo from "./../assets/photo.jpg"

const HomePageNew: React.FC = () => {
    const tags = ['Automation', 'API', 'Python', 'Kotlin', 'SQL', 'Left-Shift', 'T-Shape'];

    return (
        <Layout className={styles.fullHeight}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className={styles.title}>
                        <p>Hi!👋🏻</p>
                        <p>My name is Vitalii Sidorov,</p>
                        <p>I am a ISTQB® Certified QA Engineer.</p>
                    </div>
                    <div className={styles.tags}>
                        {tags && tags.length > 0 && (
                                <TagsList
                                    tags={tags}
                                    tagClassName={styles.tag}
                                    containerClassName={styles.tagsContainer}
                                />
                        )}
                    </div>
                    <div className={styles.text}>
                        <p>Looking for a QA Engineer? You found one!</p>
                        <p>As you can see I've developed this page using React and TypeScript - things <strong>I've
                            learned to
                            get the job done</strong>. I enjoy making things better, faster, and safer - and I’m always
                            up for
                            learning something new to do it. </p>
                        <p>I have 3+ years making sure <strong>web, backend, and mobile</strong> apps work the way they
                            should - securely and reliably. I’m into test automation, clean CI/CD pipelines, and smart
                            ways to catch bugs early.</p>
                        <p>I’ve worked in fintech, enterprise, and healthcare projects, automating frontend and backend
                            tests using <strong>Python, Kotlin and Cypress</strong>. I like working with agile teams,
                            sharing ideas, and
                            picking up new tools - especially anything with AI or cloud tech.</p>
                    </div>
                </div>
                <div className={styles.media}>
                    <div className={styles.photoWrappper}>
                        <img src={photo} className={styles.photo} alt={"My face"}></img>
                    </div>
                    <div className={styles.buttons}>
                        <LinkedInButton />
                        <TelegramButton />
                        <MailButton />
                    </div>
                    <div className={styles.download}>
                        <DownloadButton/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HomePageNew;