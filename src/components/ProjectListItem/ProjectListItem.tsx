import React from 'react';
import styles from './ProjectListItem.module.css';
import TagsList from '../TagsList/TagsList'; // Используем твой готовый компонент

interface ProjectProps {
    title: string;
    description: string;
    link: string;
    tags: string[];
}

const ProjectListItem: React.FC<ProjectProps> = ({ title, description, link, tags }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectCard}>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <TagsList tags={tags} containerClassName={styles.projectTags} />
            </div>
            <div className={styles.arrow}>→</div>
        </a>
    );
};

export default ProjectListItem;