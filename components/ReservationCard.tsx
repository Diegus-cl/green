import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  startTime: string;
  endTime: string;
  featuredName: string;
  currReservations: number;
  reservationLimit: number;
  onSubmit: () => Promise<void>;
  tag?: string;
  className?: string;
};

export function ReservationCard({
  startTime,
  endTime,
  featuredName,
  currReservations,
  reservationLimit,
  className,
  tag,
  onSubmit,
}: Props) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    await onSubmit();
    setIsLoading(false);
  };

  // Function to format the currReservations value with leading zero if needed
  const formatReservations = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <Card className={cn("flex flex-col md:flex-row justify-between", className)}>
      <CardHeader>
        <CardTitle>
          {startTime} - {endTime} <Badge variant={"secondary"} className="ml-2 text-[14px]">{tag}</Badge>
        </CardTitle>
        <CardDescription>{featuredName}</CardDescription>
      </CardHeader>
      <CardFooter className="md:pb-0">
        <Button onClick={handleSubmit} className="inline-flex items-center space-x-2 transition-all">
          Reservar
          <span className="ml-1">
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              `(${formatReservations(currReservations)}/${reservationLimit})`
            )}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
