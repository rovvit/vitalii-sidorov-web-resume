import React, { useEffect, useRef, useState } from 'react';
import TagsList from '../TagsList/TagsList';
import styles from './TimeLineItem.module.css';

interface TimeLineItemProps {
    year: string;
    title: string;
    company: string;
    description?: string;
    tags?: string[];
    index: number;
    children?: React.ReactNode;
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({
                                                       year, title, company, description, tags, index, children
                                                   }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (itemRef.current) observer.observe(itemRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`${styles.item} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
        >
            <div className={styles.dot} />
            <div className={styles.content}>
                <span className={styles.year}>{year}</span>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.company}>{company}</h4>
                <p className={styles.description}>{description}</p>
                {children}
                {tags && <TagsList tags={tags} containerClassName={styles.itemTags} />}
            </div>
        </div>
    );
};

export default TimeLineItem;