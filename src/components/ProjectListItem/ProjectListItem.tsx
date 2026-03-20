import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./ProjectListItem.module.css";
import TagsList from "../TagsList/TagsList";

interface ProjectProps {
    title: string;
    description: string;
    link: string;
    tags?: string[];
}

const ProjectListItem: React.FC<ProjectProps> = ({ title, description, link, tags }) => {
    const isExternal = link.startsWith('http');

    const content = (
        <>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                {tags && tags.length > 0 && (
                    <TagsList tags={tags} containerClassName={styles.projectTags} />
                )}
            </div>
            <div className={styles.arrow}>→</div>
        </>
    );

    if (isExternal) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
                {content}
            </a>
        );
    }

    return (
        <Link to={link} className={styles.projectCard}>
            {content}
        </Link>
    );
};

export default ProjectListItem;