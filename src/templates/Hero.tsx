import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {"Fab's Firm\n"}
            <span className="text-primary-500">
              {"Design you didn't know you needed"}
            </span>
          </>
        }
        description="Under construction"
        button={
          <Link href="mailto:fabiolabuchele@gmail.com">
            <Button xl>Write us a letter</Button>
          </Link>
        }
      />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <form name="contact" data-netlify="true">
        <p>
          <label>
            Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <button className="submit-button" type="submit">
            Send
          </button>
        </p>
      </form>
    </Section>
  </Background>
);

export { Hero };
