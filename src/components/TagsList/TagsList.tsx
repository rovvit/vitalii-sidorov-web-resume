import React from 'react';
import styles from './TagsList.module.css';

interface TagsListProps {
    tags: string[];
    columns?: number;
    tagClassName?: string;
    containerClassName?: string;
}

const TagsList: React.FC<TagsListProps> = ({tags, columns, tagClassName, containerClassName}) => {
    const gridStyle = columns
        ? {gridTemplateColumns: `repeat(${columns}, 1fr)`}
        : undefined;

    return (
        <div
            className={`${containerClassName ? containerClassName : styles.tags} ${columns ? styles.grid : styles.flex}`}
            style={gridStyle}
        >
            {tags.map((tag) => (
                <span key={tag} className={ tagClassName ? tagClassName : styles.tag}>{tag}</span>
            ))}
        </div>
    );
};

export default TagsList;