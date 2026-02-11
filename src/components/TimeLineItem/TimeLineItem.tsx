import React, {useEffect, useRef, useState} from 'react';
import TagsList from '../TagsList/TagsList';
import styles from './TimeLineItem.module.css';

interface TimeLineItemProps {
    year: string;
    title: string;
    company: string;
    description: string;
    tags?: string[];
    index: number;
}

const TimeLineItem: React.FC<TimeLineItemProps> = ({year, title, company, description, tags, index}) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Перестаем наблюдать после того, как элемент появился
                    observer.unobserve(entry.target);
                }
            },
            {threshold: 0.5} // Элемент считается видимым, когда появилось 10%
        );
        if (itemRef.current) {
            observer.observe(itemRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className={`${styles.item} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 0.5}s` }}
        >
            <div className={styles.dot}/>
            <div className={styles.content}>
                <span className={styles.year}>{year}</span>
                <h3 className={styles.title}>{title}</h3>
                <h4 className={styles.company}>{company}</h4>
                {tags && tags.length > 0 && (
                    <div className={styles.tagsContainer}>
                        <TagsList tags={tags}/>
                    </div>
                )}
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default TimeLineItem;