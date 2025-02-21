export type WorkStatus = 'in_office' | 'not_in_office' | 'pto';

export interface WorkDay {
  id: string;
  date: string;
  status: WorkStatus;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export const WorkStatusColors = {
  in_office: 'bg-green-500',
  not_in_office: 'bg-red-500',
  pto: 'bg-blue-500',
} as const; 