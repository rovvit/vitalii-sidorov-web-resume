import React from 'react';
import Layout from "../../components/Layout/Layout";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem";
import styles from "./ProjectsPage.module.css";

const projectsData = [
    {
        title: "Personal Web Resume",
        description: "The project you are looking at right now. Built with React, TypeScript and CSS Modules.",
        link: "https://github.com/rovvit/vitalii-sidorov-web-resume",
        tags: ["React", "TypeScript", "CSS"]
    },
    {
        title: "Webhook Service for Stripe",
        description: "A specialized microservice built with FastAPI for handling asynchronous payment events. It securely processes Stripe webhooks, validates request signatures, and manages post-payment logic such as order fulfillment and user entitlement updates.",
        link: "https://github.com/rovvit/stripe-webhook-service",
        tags: ["Python", "Tortoise ORM", "FastAPI", "PostgreSQL", "Docker"]
    },
    {
        title: "Telegram Bot for managing Subscribers",
        description: "Build as an interface to automate private channel subscription checks",
        link: "https://github.com/rovvit/verbose-invention",
        tags: ["Python", "Asyncio", "aiogram"]
    },
    {
        title: "Telegram Bot for learning Finnish",
        description: "A specialized bot designed to help users master Finnish vocabulary and grammar. It features automated word-drills, translation exercises, and a structured learning path through Telegram's interactive interface.",
        link: "https://github.com/rovvit/learn_finnish_tg_bot",
        tags: ["Python", "Asyncio", "aiogram", "Tortoise ORM", "SQLite"]
    }
];

const ProjectsPage: React.FC = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Projects</h1>
                <div className={styles.list}>
                    {projectsData.map((project, index) => (
                        <ProjectListItem key={index} {...project} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsPage;