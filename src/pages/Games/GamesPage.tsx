import React from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./GamePage.module.css";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem";

const gamesData = [
    {
        title: "Connect Four",
        description: "Classic strategy on a 7x5 grid. Match four of your tokens horizontally, vertically, or diagonally. Test your skills in single-player mode against three distinct AI opponents, each with its own unique strategy and difficulty level.",
        link: "/games/connect-four"
    }
];

const GamesPage: React.FC = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Mini Games</h1>
                <div className={styles.list}>
                    {gamesData.map((game, index) => (
                        <ProjectListItem key={index} {...game} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default GamesPage;