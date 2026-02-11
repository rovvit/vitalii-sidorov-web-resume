import React from 'react';
import TimeLineItem from "../../components/TimeLineItem/TimeLineItem";
import styles from "./TimeLinePage.module.css";
import Layout from "../../components/Layout/Layout";

interface ExperienceEntry {
    year: string;
    title: string;
    company: string;
    description?: string;
    tags: string[];
    date: string; // "YYYY-MM-DD"
    renderCustom?: () => React.ReactNode;
}
const experienceData: ExperienceEntry[] = [
    {
        date: "2025-06-01",
        year: "2025 - Present",
        title: "Relocation Gap",
        company: "",
        description: "Working on pet-projects in Python and React.",
        tags: ["React", "Python", "Docker"]
    },
    {
        date: "2024-11-01",
        year: "2024 - 2025",
        title: "Senior QA Engineer",
        company: "Korona Tech Kazakhstan",
        description: "My main focus position was quality assurance of a fintech system’s core in cross functional team ensuring product quality and compliance with financial standards.",
        tags: ["Kotlin", "AQA", "REST API", "Oracle PL/SQL"]
    },
    {
        date: "2023-02-01",
        year: "2023-2024",
        title: "QA Engineer",
        company: "Samgau",
        description: "Owned QA activities for multiple enterprise projects covering web, mobile, and API testing, driving quality across the full SDLC.",
        tags: ["Cypress", "Postman", "JMeter", "REST API", "PostgreSQL", "MSSQL", "MongoDB", "SDLC Optimization"]
    },
    {
        date: "2022-03-01",
        year: "2022-2023",
        title: "QA Engineer",
        company: "Vista Med",
        description: "Conducted manual testing of a medical information system, documentation managing and onboarding new team members.",
        tags: ["Manual Testing", "White Box", "Documentation", "MySQL"]
    },
    {
        date: "2023-05-17",
        year: "2023",
        title: "JavaScrpit School",
        company: "Quantori Academy",
        description: "Dived into React basics",
        tags: ["React", "JavaScript", "TypeScript", "API"],
        renderCustom: () => (
            <div className={styles.customContent}>
                <a href="/files/JavaScript School Sidorov.pdf" target="_blank" className={styles.certificateLink}>
                    View Certificate
                </a>
            </div>
        )
    },
    {
        date: "2024-10-17",
        year: "2024",
        title: "ISTQB Certification",
        company: "ISTQB Certified Test Foundation Level (CTFL)",
        tags: ["Test Theory"],
        renderCustom: () => (
            <div className={styles.customContent}>
                <a href="/files/ISTQB_CTFL.pdf" target="_blank" className={styles.certificateLink}>
                    View Certificate
                </a>
            </div>
        )
    }
];

const TimeLinePage: React.FC = () => {
    const sortedExperience = React.useMemo(() => {
        return [...experienceData].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateB - dateA;
        });
    }, []);
    return (
        <Layout className={styles.fullHeight}>
            <div className={styles.content}>
                <h1 className={styles.pageTitle}>Experience</h1>
                <div className={styles.timeline}>
                    {sortedExperience.map((item, index) => (
                        <TimeLineItem
                            key={item.date + item.title}
                            index={index}
                            {...item}
                        >
                            {item.renderCustom?.()}
                        </TimeLineItem>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default TimeLinePage;