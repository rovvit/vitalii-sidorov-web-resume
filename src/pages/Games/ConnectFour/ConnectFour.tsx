import React, { useState, useEffect, useCallback } from 'react';
import Layout from "../../../components/Layout/Layout";
import DropDownMenu from "../../../components/DropDownMenu/DropDownMenu";
import styles from "./ConnectFour.module.css";

const ROWS = 5;
const COLS = 7;
const CELL = 80;
const PAD = 12;
const TOKEN_R = 32;

type Player = 'red' | 'yellow' | null;

type GameMode = 'local' | 'random_bot';

const ConnectFourGame: React.FC = () => {
    const [board, setBoard] = useState<Player[][]>(
        Array(ROWS).fill(null).map(() => Array(COLS).fill(null))
    );
    const [currentPlayer, setCurrentPlayer] = useState<'red' | 'yellow'>('red');
    const [gameMode, setGameMode] = useState<GameMode>('local');
    const [hoverColumn, setHoverColumn] = useState<number | null>(null);
    const [winner, setWinner] = useState<Player | 'draw'>(null);
    const [isBotThinking, setIsBotThinking] = useState(false);

    const botOptions: { value: GameMode; label: string }[] = [
        { value: 'local',      label: 'Play Locally' },
        { value: 'random_bot', label: 'Random bot' },
    ];

    const BOARD_W = COLS * CELL + PAD * 2;
    const BOARD_H = ROWS * CELL + PAD * 2;

    const cellCenterX = (col: number) => PAD + col * CELL + CELL / 2;
    const cellCenterY = (row: number) => PAD + row * CELL + CELL / 2;

    const checkWinner = (newBoard: Player[][], row: number, col: number): boolean => {
        const color = newBoard[row][col];
        const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];
        for (const [dr, dc] of directions) {
            let count = 1;
            for (const step of [-1, 1]) {
                let r = row + dr * step;
                let c = col + dc * step;
                while (r >= 0 && r < ROWS && c >= 0 && c < COLS && newBoard[r][c] === color) {
                    count++;
                    r += dr * step;
                    c += dc * step;
                }
            }
            if (count >= 4) return true;
        }
        return false;
    };

    const getLowestEmptyRow = (currentBoard: Player[][], col: number): number => {
        for (let r = ROWS - 1; r >= 0; r--) {
            if (!currentBoard[r][col]) return r;
        }
        return -1;
    };

    const getAvailableCols = (currentBoard: Player[][]): number[] =>
        currentBoard[0]
            .map((cell, i) => (cell === null ? i : null))
            .filter((v): v is number => v !== null);

    const randomBotMove = (currentBoard: Player[][]): number => {
        const cols = getAvailableCols(currentBoard);
        return cols[Math.floor(Math.random() * cols.length)];
    };

    const getBotMove = (currentBoard: Player[][], mode: GameMode): number | null => {
        switch (mode) {
            case 'random_bot': return randomBotMove(currentBoard);
            default: return null;
        }
    };

    const dropToken = useCallback((col: number, playerOverride?: 'red' | 'yellow') => {
        const player = playerOverride ?? currentPlayer;
        if (winner || board[0][col]) return;

        const newBoard = board.map(row => [...row]);
        let targetRow = -1;

        for (let r = ROWS - 1; r >= 0; r--) {
            if (!newBoard[r][col]) {
                targetRow = r;
                newBoard[r][col] = player;
                break;
            }
        }

        if (targetRow !== -1) {
            setBoard(newBoard);
            if (checkWinner(newBoard, targetRow, col)) {
                setWinner(player);
            } else if (newBoard[0].every(cell => cell !== null)) {
                setWinner('draw');
            } else {
                setCurrentPlayer(player === 'red' ? 'yellow' : 'red');
            }
        }
    }, [board, currentPlayer, winner]);

    useEffect(() => {
        if (gameMode === 'local') return;
        if (currentPlayer !== 'yellow') return;
        if (winner) return;

        setIsBotThinking(true);

        const timer = setTimeout(() => {
            const col = getBotMove(board, gameMode);
            if (col !== null) dropToken(col, 'yellow');
            setIsBotThinking(false);
        }, 600);

        return () => clearTimeout(timer);
    }, [currentPlayer, gameMode, winner, board]);

    const resetGame = () => {
        setBoard(Array(ROWS).fill(null).map(() => Array(COLS).fill(null)));
        setCurrentPlayer('red');
        setWinner(null);
        setIsBotThinking(false);
    };

    const isPlayerTurn = gameMode === 'local' || currentPlayer === 'red';

    return (
        <Layout>
            <div className={styles.gameWrapper}>
                <h1 className={styles.title}>
                    {winner === 'draw'
                        ? 'Draw'
                        : winner
                            ? `${winner.toUpperCase()} Wins`
                            : isBotThinking
                                ? 'Bot is thinking...'
                                : 'Connect Four'}
                </h1>

                <div className={styles.controls}>
                    <DropDownMenu
                        label="Opponent:"
                        options={botOptions}
                        selectedValue={gameMode}
                        onSelect={(val) => {
                            setGameMode(val as GameMode);
                            resetGame();
                        }}
                    />
                </div>

                <svg
                    className={styles.board}
                    width={BOARD_W}
                    height={BOARD_H}
                    viewBox={`0 0 ${BOARD_W} ${BOARD_H}`}
                    onMouseLeave={() => setHoverColumn(null)}
                >
                    {board.map((row, rIdx) =>
                        row.map((cell, cIdx) => {
                            const cx = cellCenterX(cIdx);
                            const cy = cellCenterY(rIdx);
                            const isGhost =
                                isPlayerTurn &&
                                hoverColumn === cIdx &&
                                !winner &&
                                getLowestEmptyRow(board, cIdx) === rIdx &&
                                !cell;

                            return (
                                <g key={`${rIdx}-${cIdx}`}>
                                    {cell && (
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={TOKEN_R}
                                            fill={cell === 'red' ? '#e74c3c' : '#f1c40f'}
                                            className={styles.tokenCircle}
                                            style={{
                                                '--drop-from': `${-(rIdx + 1) * CELL}px`,
                                                '--drop-duration': `${0.1 * (rIdx + 1) + 0.15}s`,
                                            } as React.CSSProperties}
                                        />
                                    )}
                                    {isGhost && (
                                        <circle
                                            cx={cx}
                                            cy={cy}
                                            r={TOKEN_R}
                                            fill={currentPlayer === 'red' ? '#e74c3c' : '#f1c40f'}
                                            opacity={0.4}
                                        />
                                    )}
                                </g>
                            );
                        })
                    )}

                    <path
                        fillRule="evenodd"
                        fill="var(--color-primary)"
                        d={[
                            `M ${PAD} 0`,
                            `H ${BOARD_W - PAD}`,
                            `Q ${BOARD_W} 0 ${BOARD_W} ${PAD}`,
                            `V ${BOARD_H - PAD}`,
                            `Q ${BOARD_W} ${BOARD_H} ${BOARD_W - PAD} ${BOARD_H}`,
                            `H ${PAD}`,
                            `Q 0 ${BOARD_H} 0 ${BOARD_H - PAD}`,
                            `V ${PAD}`,
                            `Q 0 0 ${PAD} 0`,
                            `Z`,
                            ...Array.from({ length: ROWS }, (_, rIdx) =>
                                Array.from({ length: COLS }, (_, cIdx) => {
                                    const cx = cellCenterX(cIdx);
                                    const cy = cellCenterY(rIdx);
                                    const r = TOKEN_R;
                                    return [
                                        `M ${cx + r} ${cy}`,
                                        `A ${r} ${r} 0 0 0 ${cx - r} ${cy}`,
                                        `A ${r} ${r} 0 0 0 ${cx + r} ${cy}`,
                                        `Z`,
                                    ].join(' ');
                                })
                            ).flat(),
                        ].join(' ')}
                    />

                    {isPlayerTurn && !winner && Array.from({ length: COLS }, (_, cIdx) => (
                        <rect
                            key={cIdx}
                            x={cIdx * CELL + PAD}
                            y={0}
                            width={CELL}
                            height={BOARD_H}
                            fill="transparent"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => setHoverColumn(cIdx)}
                            onClick={() => dropToken(cIdx)}
                        />
                    ))}
                </svg>

                <button className={styles.resetButton} onClick={resetGame}>
                    Reset Game
                </button>
            </div>
        </Layout>
    );
};

export default ConnectFourGame;