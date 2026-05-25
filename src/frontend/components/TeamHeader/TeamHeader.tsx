import { useRef, useState } from 'react'
import TeamTooltip from '../TeamTooltip'

interface TeamHeaderProps {
    id: number
    name: string
    className: string
}

const TeamHeader = ({ id, name, className }: TeamHeaderProps) => {
    const [position, setPosition] = useState<{
        top: number
        left: number
    } | null>(null)
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseEnter = () => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        setPosition({
            top: rect.top - 8,
            left: rect.left + rect.width / 2,
        })
    }

    return (
        <div
            ref={ref}
            className={className}
            title={name}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setPosition(null)}
        >
            {name}
            {position && <TeamTooltip teamId={id} position={position} />}
        </div>
    )
}

export default TeamHeader
