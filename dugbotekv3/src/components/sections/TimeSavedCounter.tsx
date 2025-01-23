import { useState, useEffect } from 'react'

const TimeSavedCounter = () => {
  const [timeSaved, setTimeSaved] = useState({
    days: 20,
    hours: 30,
    minutes: 0
  })

  // Static start date - January 1, 2024
  const START_DATE = new Date('2025-01-01T00:00:00Z')

  // Base time in minutes (20 days and 30 hours)
  const BASE_TIME_MINUTES = (20 * 24 * 60) + (30 * 60)

  // Add 1 minute every 10 seconds for a visible effect
  const MINUTES_TO_ADD = 1

  useEffect(() => {
    // Initial calculation
    const calculateInitialTime = () => {
      const now = new Date()
      const elapsedMinutes = Math.floor((now.getTime() - START_DATE.getTime()) / (1000 * 60))
      const totalMinutes = BASE_TIME_MINUTES + elapsedMinutes
      return calculateTime(totalMinutes)
    }

    setTimeSaved(calculateInitialTime())

    // Update counter every 10 seconds
    const interval = setInterval(() => {
      setTimeSaved(prev => {
        let newMinutes = prev.minutes + MINUTES_TO_ADD
        let newHours = prev.hours
        let newDays = prev.days

        if (newMinutes >= 60) {
          newMinutes = 0
          newHours++
        }

        if (newHours >= 24) {
          newHours = 0
          newDays++
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes
        }
      })
    }, 10000) // Update every 10 seconds

    return () => clearInterval(interval)
  }, [])

  const calculateTime = (totalMinutes: number) => {
    const days = Math.floor(totalMinutes / (24 * 60))
    const remainingMinutes = totalMinutes % (24 * 60)
    const hours = Math.floor(remainingMinutes / 60)
    const minutes = remainingMinutes % 60

    return { days, hours, minutes }
  }

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-gray-900 rounded-lg p-3 min-w-[100px]">
      <div className="h-12 flex items-center justify-center">
        <span className="text-2xl font-bold text-green-400">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-sm text-gray-400 mt-1">{label}</span>
    </div>
  )

  return (
    <div className="flex flex-col items-center">
      <div className="text-clay-subtext mb-4 text-center">
        Total Time Saved by Our Customers
      </div>
      <div className="flex gap-4">
        <TimeUnit value={timeSaved.days} label="DAYS" />
        <TimeUnit value={timeSaved.hours} label="HOURS" />
        <TimeUnit value={timeSaved.minutes} label="MINUTES" />
      </div>
      <div className="text-sm text-clay-subtext mt-4 text-center opacity-75">
        Based on average time savings across all customers
      </div>
    </div>
  )
}

export default TimeSavedCounter 