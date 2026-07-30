import { Navbar } from "@thenamespace/uikit";

import { ConnectButton } from "./connect-button";
import { NamespaceLogo } from "./icons/namespace";

const componentLinks = [
  { id: "name-registration", label: "Name registration" },
  { id: "name-renewal", label: "Name renewal" },
  { id: "name-profile-editor", label: "Profile records" },
  { id: "transaction-progress", label: "Transaction progress" },
] as const;

export function AppNavbar() {
  return (
    <Navbar className="border-foreground/12 border-b bg-[#f4f4f4]" maxWidth="xl">
      <Navbar.Header className="px-4 sm:px-6">
        <Navbar.Brand>
          <a
            className="flex items-center gap-2.5 font-bold tracking-[-0.02em]"
            href="/"
            aria-label="ENS Components home"
          >
            <span className="grid size-8 place-items-center">
              <NamespaceLogo aria-hidden className="size-6" />
            </span>
            <span className="text-[14px] sm:text-[15px]">ENS Components</span>
          </a>
        </Navbar.Brand>
        <Navbar.Spacer />
        <Navbar.Content className="mr-2 hidden lg:!flex">
          {componentLinks.map((component) => (
            <Navbar.Item href={`/#${component.id}`} key={component.id}>
              {component.label}
            </Navbar.Item>
          ))}
          <Navbar.Item href="/docs">Docs</Navbar.Item>
        </Navbar.Content>
        <ConnectButton />
      </Navbar.Header>
    </Navbar>
  );
}
