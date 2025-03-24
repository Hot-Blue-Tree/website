import React from 'react';


    
interface IconProps {
    className?: string;
}
interface IconGenericProps extends React.SVGProps<SVGSVGElement> {
    children: React.ReactNode;
    className?: string;
}

const Icon: React.FC<IconGenericProps> = ({ children, ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={"1em"}
            height={"1em"}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {children}
        </svg>
    );
};

export const IconHandShake: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /><path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" /><path d="M12.5 15.5l2 2" /><path d="M15 13l2 2" />
    </Icon>
}
export const IconTools: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5l-4 4l5 5" /><path d="M7 8l-1.5 1.5" /><path d="M16 12l5 5l-4 4l-5 -5" /><path d="M16 17l-1.5 1.5" />
    </Icon>
}

export const IconCheckList: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" /><path d="M14 19l2 2l4 -4" /><path d="M9 8h4" /><path d="M9 12h2" />
    </Icon>
}

export const IconGuage: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M13.41 10.59l2.59 -2.59" /><path d="M7 12a5 5 0 0 1 5 -5" />
    </Icon>
}

export const IconUsersGroup: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
    </Icon>
}

export const IconCheck: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" />
    </Icon>
}

export const IconExclaimOutline: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" />
    </Icon>
}

export const IconThreeQuarterCircle: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" />
    </Icon>
}

export const IconClipboardData: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" /><path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M9 17v-4" /><path d="M12 17v-1" /><path d="M15 17v-2" /><path d="M12 17v-1" />
    </Icon>
}

export const IconUpload: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 9l5 -5l5 5" /><path d="M12 4l0 12" />
    </Icon>
}

export const IconChartBarPopular: React.FC<IconProps> = ({ ...props }) => {
    return <Icon {...props}>
        <path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" />
    </Icon>
}

export const IconCaretRightFilled: React.FC<IconProps> = ({ ...props }) => {
    return <Icon fill="currentColor" stroke="none" {...props}>
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
    </Icon>
}