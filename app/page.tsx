/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import { LinkProfile } from "@/components/link";
import { findByAllUsers } from "@/services/person-service";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Users() {
  const persons = await findByAllUsers();
  return (
    <>
      <main className="min-h-screen w-full bg-black/50 antialiased ">
        <div className="w-full max-w-md py-10 m-auto space-y-6 ">
          <h1 className="text-white font-medium text-2xl">Links Cards</h1>
          {persons.map((person) => (
            <LinkProfile
              href={`/${person.id}`}
              key={person.id}
              className="flex items-center gap-2"
            >
              <img
                src={person.srcImg}
                alt={person.name}
                className="h-14 w-14 object-cover rounded-full  "
              />
              <div className="flex w-full justify-between pr-6 hover:pr-4 transition-all">
                <p className="text-base font-light">@ {person.name}</p>
                <ArrowRight />
              </div>
            </LinkProfile>
          ))}
        </div>
      </main>
    </>
  );
}
