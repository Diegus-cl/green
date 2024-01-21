"use client"

import { DayCard } from '@/components/day-card';
import { ReservationCard } from './../components/ReservationCard';
import { CalendarIconButton } from '@/components/calendar-icon-button';

// import Image from 'next/image'

const reservations = [
  {
    startTime: '6:00 AM',
    endTime: '7:00 AM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'crossfit',
  },
  {
    startTime: '7:00 AM',
    endTime: '8:00 AM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'crossfit',
  },
  {
    startTime: '8:00 AM',
    endTime: '9:00 PM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'crossfit',
  },
  {
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'crossfit',
  },
  {
    startTime: '4:00 PM',
    endTime: '5:00 PM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'open box',
  },
  {
    startTime: '5:00 PM',
    endTime: '6:00 PM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'open box',
  },
  {
    startTime: '7:00 PM',
    endTime: '8:00 PM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'crossfit',
  },
  {
    startTime: '8:00 PM',
    endTime: '9:00 PM',
    featuredName: 'Maleno',
    currReservations: 3,
    reservationLimit: 24,
    classType: 'crossfit',
  }
];


export default function Home() {
  return (
    <main className="w-full h-screen p-10 overflow-y-scroll md:pt-10 pt-[180px] ">
      <DayCard />
      <CalendarIconButton day={10} dayOfWeekId={2} monthId={10} isActive={false}/>
      <h1 className="mb-12 font-bold text-transparent uppercase text-step-2 bg-gradient-to-b from-zinc-200 to-zinc-200/30 bg-clip-text">CLASES DE HOY</h1>

      <div className='mb-12'>
        {
          reservations.map((reservation, index) => (
            <ReservationCard
              key={index}
              startTime={reservation.startTime}
              endTime={reservation.endTime}
              featuredName={"Coach: " + reservation.featuredName}
              currReservations={reservation.currReservations}
              reservationLimit={reservation.reservationLimit}
              tag={reservation.classType}
              className='mb-6'
              onSubmit={async () => {
                // fake waiting time that adds a reservation
                await new Promise(resolve => setTimeout(resolve, 1000))
                // update the reservations
                reservations[index].currReservations += 1
              }
              }
            />
          ))
        }
      </div>

      <hr className='mb-10 border-2 mt-14' />
      <h1 className="mb-[12vh] font-bold text-transparent uppercase text-step-2 bg-gradient-to-b from-zinc-200 to-zinc-200/30 bg-clip-text">WOD DE HOY</h1>

    </main>
  )

}

// return (
//   <main className="flex flex-col items-center justify-between min-h-screen p-24">
//     <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
//       <p className="fixed top-0 left-0 flex justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//         Get started by editing&nbsp;
//         <code className="font-mono font-bold">app/page.tsx</code>
//       </p>
//       <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//         <a
//           className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           By{' '}
//           <Image
//             src="/vercel.svg"
//             alt="Vercel Logo"
//             className="dark:invert"
//             width={100}
//             height={24}
//             priority
//           />
//         </a>
//       </div>
//     </div>

//     <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//       <Image
//         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//         src="/next.svg"
//         alt="Next.js Logo"
//         width={180}
//         height={37}
//         priority
//       />
//     </div>

//     <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//       <a
//         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Docs{' '}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//           Find in-depth information about Next.js features and API.
//         </p>
//       </a>

//       <a
//         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//         className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Learn{' '}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//           Learn about Next.js in an interactive course with&nbsp;quizzes!
//         </p>
//       </a>

//       <a
//         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Templates{' '}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//           Explore the Next.js 13 playground.
//         </p>
//       </a>

//       <a
//         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//         className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={`mb-3 text-2xl font-semibold`}>
//           Deploy{' '}
//           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//             -&gt;
//           </span>
//         </h2>
//         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//           Instantly deploy your Next.js site to a shareable URL with Vercel.
//         </p>
//       </a>
//     </div>
//   </main>
// )