import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
  /** day of the month */
  day: number
  /** number between 1 and 12 to represent month */
  month: number
  /** number between 1 and 7 to represent day of the week */
  dayOfWeek: number
  /** if this is the current selected item */
  isActive: boolean
}

export function DayCard({
  day,
  month,
  dayOfWeek,
  isActive = true
}: Props) {

  return (
    <Card className={`flex flex-col justify-between w-20 h-20 py-3 transition-colors hover:bg-zinc-500 ${isActive ? "border-4" : ""}` }>
      <CardTitle className="text-center">
        9 DEC
      </CardTitle>
      <CardContent className="p-0 text-center">
        Hoy
      </CardContent>
    </Card>
  )
}