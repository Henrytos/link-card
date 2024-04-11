import { db } from "@/lib/db";
import { Link, Person } from "@/types/types";

export async function findByUserById(id: string) {
  const persons = await db.persons.findFirst();
  const person: Person =
    persons?.person.find((person) => person.id === id) ?? {};

  const name = person.name ?? "";
  const srcImg: string = person.srcImg ?? "";
  const links: Link[] = person.links ?? [];

  return {
    name,
    srcImg,
    links,
  };
}
