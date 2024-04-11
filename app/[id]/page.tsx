import { Background } from "@/components/background";
import { ContentProfile } from "@/components/content-profile";
import { Footer } from "@/components/footer";
import { ProfileImg } from "@/components/img-people";
import { ContentLinkProfile, LinkProfile } from "@/components/link";
import { MainContent } from "@/components/main-content";
import { NavBar } from "@/components/nav-bar";
import { ProfileTitle } from "@/components/title";
import { UserNotFound } from "@/components/user-not-found";
import { findByAllUsers, findByUserById } from "@/services/person-service";
import { Link } from "@/types/types";
import { findByIcon } from "./icons";
interface HomeProps {
  params: {
    id: string;
  };
  searchParams: {
    name: string;
    id: string;
  };
}

export async function generateMetadata({ params }: HomeProps) {
  const data = await findByUserById(params.id);
  const name = data.name;
  return {
    title: name,
  };
}

export async function generateStaticParams() {
  const persons = await findByAllUsers();
  return persons.map((person) => ({
    params: {
      id: person.id,
    },
  }));
}

export default async function CardLink({ params }: HomeProps) {
  const data = await findByUserById(params.id);

  if (data.name == "") {
    return <UserNotFound />;
  }

  const namePerson: string = data.name ?? "";

  const image = {
    src: data.srcImg,
    alt: `imagem de ${namePerson}`,
  };

  const links: Link[] = data.links;

  return (
    <MainContent>
      <Background {...image} />
      <ContentProfile>
        <NavBar />
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <ProfileImg {...image} />
            <ProfileTitle>{namePerson}</ProfileTitle>
          </div>
          <ContentLinkProfile>
            {links.map((link) => (
              <LinkProfile key={link.url} href={link.url}>
                {findByIcon(link.name.toLocaleLowerCase())}
                {link.name}
              </LinkProfile>
            ))}
          </ContentLinkProfile>
        </div>
        <Footer>{namePerson}</Footer>
      </ContentProfile>
    </MainContent>
  );
}
