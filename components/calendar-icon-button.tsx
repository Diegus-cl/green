import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const daysOfWeek = Object.freeze({
  0: "DOM",
  1: "LUN",
  2: "MAR",
  3: "MIER",
  4: "JUE",
  5: "VIE",
  6: "SAB"
} as const);

const months = Object.freeze({
  0: "Enero",
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Octubre",
  10: "Septiembre",
  11: "Noviembre",
  12: "Diciembre",
} as const);

type Props = {
  /** day of the month */
  day: number
  /** number between 1 and 12 to represent month */
  monthId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 
  /** number between 0 and 6 to represent day of the week */
  dayOfWeekId: 0 | 1 | 2 | 3 | 4 | 5 | 6
  /** if this is the current selected item */
  isActive: boolean
}

export function CalendarIconButton({
  day,
  monthId,
  dayOfWeekId,
  isActive = true
}: Props) {

  return (
    <Card className={`flex flex-col justify-between w-20 h-20 py-3 transition-colors hover:bg-zinc-500 ${isActive ? "border-4" : ""}` }>
      <CardTitle className="text-center">
        {`${day} ${months[monthId]}`}
      </CardTitle>
      <CardContent className="p-0 text-center">
        <div>
          {daysOfWeek[dayOfWeekId]}
        </div>
        Hoy
      </CardContent>
    </Card>
  )
}