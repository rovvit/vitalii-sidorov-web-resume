import React from 'react';
import TimeLineItem from "../../components/TimeLineItem/TimeLineItem";
import styles from "./TimeLinePage.module.css";
import Layout from "../../components/Layout/Layout";

const TimeLinePage: React.FC = () => {
    const experience = [
        {
            year: "2025 - Present",
            title: "Relocation Gap",
            company: "",
            description: "Working on pet-projects in Python and React.",
            tags: ["React", "Python", "Docker"]
        },
        {
            year: "2024 - 2025",
            title: "Senior QA Engineer",
            company: "Korona Tech Kazakhstan",
            description: "My main focus position was quality assurance of a fintech system’s core in cross functional team ensuring product quality and compliance with financial standards.",
            tags: ["Kotlin", "AQA", "Oracle PL/SQL"]
        },
        {
            year: "2023-2024",
            title: "QA Engineer",
            company: "Samgau",
            description: "Owned QA activities for multiple enterprise projects covering web, mobile, and API testing, driving quality across the full SDLC."
        },
        {
            year: "2022-2023",
            title: "QA Engineer",
            company: "Vista Med",
            description: "Conducted manual testing of a medical information system, documentation managing and onboarding new team members."
        }
    ];

    return (
        <Layout className={styles.fullHeight}>
            <div className={styles.content}>
                <h1 className={styles.pageTitle}>Experience Timeline</h1>
                <div className={styles.timeline}>
                    {experience.map((item, index) => (
                        <TimeLineItem key={index} {...item} index={index}/>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default TimeLinePage;