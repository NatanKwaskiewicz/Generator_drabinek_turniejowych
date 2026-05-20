import styles from './BracketGraph.module.scss'
import BracketRound from '../BracketRound'
import type { Match } from '../../types'
import { useRef, useEffect, useState } from 'react'

interface BracketGraphProps {
    rounds: Match[][]
}

interface Line {
    x1: number
    y1: number
    x2: number
    y2: number
}

const BracketGraph = ({ rounds }: BracketGraphProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const matchRefsMap = useRef<Record<string, HTMLDivElement | null>>({})
    const [lines, setLines] = useState<Line[]>([])

    const setMatchRef =
        (roundIndex: number, matchIndex: number) =>
        (el: HTMLDivElement | null) => {
            matchRefsMap.current[`${roundIndex}-${matchIndex}`] = el
        }

    const getMatchRef = (roundIndex: number, matchIndex: number) =>
        matchRefsMap.current[`${roundIndex}-${matchIndex}`]

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const calculate = () => {
            const containerRect = container.getBoundingClientRect()
            const newLines: Line[] = []

            for (let r = 0; r < rounds.length - 1; r++) {
                const nextRoundLength = rounds[r + 1].length

                for (let m = 0; m < nextRoundLength; m++) {
                    const topMatch = getMatchRef(r, m * 2)
                    const bottomMatch = getMatchRef(r, m * 2 + 1)
                    const targetMatch = getMatchRef(r + 1, m)

                    if (!topMatch || !bottomMatch || !targetMatch) continue

                    const topRect = topMatch.getBoundingClientRect()
                    const bottomRect = bottomMatch.getBoundingClientRect()
                    const targetRect = targetMatch.getBoundingClientRect()

                    const x1 = topRect.right - containerRect.left
                    const y1top =
                        topRect.top + topRect.height / 2 - containerRect.top
                    const y1bottom =
                        bottomRect.top +
                        bottomRect.height / 2 -
                        containerRect.top
                    const x2 = targetRect.left - containerRect.left
                    const y2 =
                        targetRect.top +
                        targetRect.height / 2 -
                        containerRect.top
                    const midX = x1 + 40

                    newLines.push({ x1: x1, y1: y1top, x2: midX, y2: y1top })
                    newLines.push({
                        x1: x1,
                        y1: y1bottom,
                        x2: midX,
                        y2: y1bottom,
                    })
                    newLines.push({
                        x1: midX,
                        y1: y1top,
                        x2: midX,
                        y2: y1bottom,
                    })
                    newLines.push({ x1: midX, y1: y2, x2, y2 })
                }
            }

            setLines(newLines)
        }

        const frame = requestAnimationFrame(calculate)
        const observer = new ResizeObserver(calculate)
        observer.observe(container)

        return () => {
            cancelAnimationFrame(frame)
            observer.disconnect()
        }
    }, [rounds])

    return (
        <div className={styles.BracketGraph} ref={containerRef}>
            <svg className={styles.BracketGraphSvg}>
                {lines.map((line, i) => (
                    <line
                        className={styles.BracketGraphSvgLine}
                        key={i}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                    />
                ))}
            </svg>
            {rounds.map((matches, roundIndex) => (
                <BracketRound
                    key={roundIndex}
                    matches={matches}
                    isLast={roundIndex === rounds.length - 1}
                    setMatchRef={(matchIndex) =>
                        setMatchRef(roundIndex, matchIndex)
                    }
                />
            ))}
            <div className={styles.BracketMatchConnector} />
        </div>
    )
}

export default BracketGraph
