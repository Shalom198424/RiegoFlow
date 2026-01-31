import type { ReactNode } from 'react';

export type UserRole = 'producer' | 'admin';

export interface NavItemProps {
    icon: ReactNode;
    label: string;
    active?: boolean;
    onClick?: () => void;
}

export interface StatusCardProps {
    lot: string;
    quantity: string;
    date: string;
    status: string;
}

export interface AdminRequestCardProps {
    lot: string;
    producer: string;
    quantity: string;
}
