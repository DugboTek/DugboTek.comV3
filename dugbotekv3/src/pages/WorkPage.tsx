import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import { format, isWeekend, parseISO, isWithinInterval } from 'date-fns';
import { supabase } from '../services/supabase';
import { WorkStatus } from '../types/work';

// Simple object to store statuses
type StatusMap = {
  [date: string]: {
    status: WorkStatus;
    reason?: string;
  };
};

const statusColors = {
  'in_office': '#22c55e', // green-500
  'not_in_office': '#ef4444', // red-500
  'pto': '#3b82f6', // blue-500
};

const TRACKING_START_DATE = new Date(2025, 1, 1); // Feb 1, 2025

const statusOptions: { value: WorkStatus; label: string }[] = [
  { value: 'in_office', label: 'In Office' },
  { value: 'not_in_office', label: 'Not in Office' },
  { value: 'pto', label: 'PTO' },
];

export const WorkPage: React.FC = () => {
  const [statuses, setStatuses] = useState<StatusMap>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [weekdayAverage, setWeekdayAverage] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    calculateWeekdayAverage();
  }, [statuses]);

  const calculateWeekdayAverage = () => {
    const today = new Date();
    
    let daysInOffice = 0;
    let totalWeekdays = 0;

    Object.entries(statuses).forEach(([dateStr, { status }]) => {
      const date = parseISO(dateStr);
      if (
        !isWeekend(date) && 
        isWithinInterval(date, { start: TRACKING_START_DATE, end: today })
      ) {
        totalWeekdays++;
        if (status === 'in_office') {
          daysInOffice++;
        }
      }
    });

    const average = totalWeekdays > 0 ? (daysInOffice / (totalWeekdays / 5)) : 0;
    setWeekdayAverage(average);
  };

  const loadData = async () => {
    try {
      setError(null);
      const { data, error } = await supabase
        .from('work_days')
        .select('date, status, reason')
        .eq('user_id', 'default-user');

      if (error) throw error;

      const newStatuses: StatusMap = {};
      data?.forEach(({ date, status, reason }) => {
        newStatuses[date] = { status, reason };
      });
      
      setStatuses(newStatuses);
    } catch (error) {
      console.error('Error loading data:', error);
      setError('Failed to load data. Please try refreshing the page.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDayClick = (date: Date) => {
    if (isWeekend(date)) return;
    setSelectedDate(date);

    const dateStr = format(date, 'yyyy-MM-dd');
    if (!statuses[dateStr]) {
      setStatuses(prev => ({
        ...prev,
        [dateStr]: { status: 'in_office' }
      }));
      setHasChanges(true);
    }
  };

  const handleStatusChange = (status: WorkStatus) => {
    if (!selectedDate) return;
    
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    setStatuses(prev => ({
      ...prev,
      [dateStr]: { ...prev[dateStr], status }
    }));
    setHasChanges(true);
  };

  const handleReasonChange = (reason: string) => {
    if (!selectedDate) return;
    
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    setStatuses(prev => ({
      ...prev,
      [dateStr]: { ...prev[dateStr], reason }
    }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    
    try {
      const { error: deleteError } = await supabase
        .from('work_days')
        .delete()
        .eq('user_id', 'default-user');

      if (deleteError) throw deleteError;

      const updates = Object.entries(statuses)
        .filter(([_, data]) => data.status)
        .map(([date, data]) => ({
          date,
          status: data.status,
          reason: data.reason || '',
          user_id: 'default-user'
        }));

      if (updates.length > 0) {
        const { error: insertError } = await supabase
          .from('work_days')
          .insert(updates);

        if (insertError) throw insertError;
      }

      const { data: verifyData, error: verifyError } = await supabase
        .from('work_days')
        .select('date, status, reason')
        .eq('user_id', 'default-user');

      if (verifyError) throw verifyError;

      const verifiedStatuses: StatusMap = {};
      verifyData?.forEach(({ date, status, reason }) => {
        verifiedStatuses[date] = { status, reason };
      });
      
      setStatuses(verifiedStatuses);
      setHasChanges(false);
    } catch (error: any) {
      console.error('Error saving changes:', error);
      setError(error.message || 'Failed to save changes. Please try again.');
      await loadData();
    } finally {
      setIsSaving(false);
    }
  };

  const tileContent = ({ date }: { date: Date }) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const status = statuses[dateStr]?.status;
    const isWeekendDay = isWeekend(date);
    
    return (
      <div
        style={{
          backgroundColor: isWeekendDay ? '#f3f4f6' : status ? statusColors[status] : '#f9fafb',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0.5rem',
          color: status && !isWeekendDay ? 'white' : '#6b7280',
          cursor: isWeekendDay ? 'not-allowed' : 'pointer',
          opacity: isWeekendDay ? 0.7 : 1
        }}
      >
        {date.getDate()}
      </div>
    );
  };

  const getAverageColor = (average: number) => {
    if (average >= 3.2) return 'text-green-500';
    if (average >= 3.0) return 'text-yellow-500';
    return 'text-red-500';
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-2 sm:px-4 pt-20 sm:pt-24 pb-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center">
          Work Day Tracker
        </h1>
        
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-6">
          {error && (
            <div className="mb-4 p-3 sm:p-4 bg-red-50 text-red-600 rounded-lg text-center text-sm sm:text-base">
              {error}
            </div>
          )}

          <div className="mb-4 sm:mb-6 text-center">
            <p className="text-base sm:text-lg font-medium">
              Average Office Days: <span className={`${getAverageColor(weekdayAverage)} font-bold`}>{weekdayAverage.toFixed(1)}</span> days/week
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Tracking since {format(TRACKING_START_DATE, 'MMMM d, yyyy')} (Mon-Fri only)
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="text-red-500">Below Target (&lt;3.0)</span>
              <span className="text-yellow-500">On Target (3.0-3.2)</span>
              <span className="text-green-500">Above Target (≥3.2)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-2 overflow-x-auto">
              <div className="min-w-[280px]">
                <Calendar
                  onClickDay={handleDayClick}
                  tileContent={tileContent}
                  className="border-0 w-full calendar-no-hover"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              {selectedDate ? (
                <>
                  <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        value={statuses[format(selectedDate, 'yyyy-MM-dd')]?.status || 'in_office'}
                        onChange={(e) => handleStatusChange(e.target.value as WorkStatus)}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base py-1.5 sm:py-2"
                      >
                        {statusOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Comment
                      </label>
                      <textarea
                        value={statuses[format(selectedDate, 'yyyy-MM-dd')]?.reason || ''}
                        onChange={(e) => handleReasonChange(e.target.value)}
                        rows={4}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
                        placeholder="Add a comment about this day..."
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500 text-sm sm:text-base py-4">
                  Select a day to view or edit details
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-center border-t pt-4 sm:pt-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '0.25rem', backgroundColor: statusColors.in_office }} />
              <span>In Office</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '0.25rem', backgroundColor: statusColors.not_in_office }} />
              <span>Not in Office</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '0.25rem', backgroundColor: statusColors.pto }} />
              <span>PTO</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div style={{ width: '0.875rem', height: '0.875rem', borderRadius: '0.25rem', backgroundColor: '#f3f4f6' }} />
              <span>Weekend</span>
            </div>
          </div>

          {hasChanges && (
            <div className="mt-4 sm:mt-6 flex justify-center border-t pt-4 sm:pt-6">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg text-white font-medium bg-green-500 disabled:bg-gray-400 text-sm sm:text-base"
              >
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 