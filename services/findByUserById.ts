import { db } from "@/lib/db";
import { Link, Person } from "@/types/types";

export async function findByUserById(id: any) {
  try {
    const person = await db.persons.findFirst({
      where: {
        id: id,
      },
    });

    if (person) {
      return {
        name: person.name,
        srcImg: person.srcImg,
        links: person?.links,
      };
    } else {
      return {
        name: "",
        srcImg: "",
        links: [],
      };
    }
  } catch (error) {
    console.log(`erro no findByUserById: ${error}`);
    return {
      name: "",
      srcImg: "",
      links: [],
    };
  }
}
