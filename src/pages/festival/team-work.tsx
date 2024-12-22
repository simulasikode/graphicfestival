// pages/festival/team-work.tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Head from "next/head";

export default function TeamWork() {
  return (
    <>
      <Head>
        <title>Team Work | Graphic Art Festival</title>
        <meta
          name="description"
          content="Meet the talented team behind the Graphic Art Festival and discover their collaborative efforts."
        />
      </Head>
      <main>
        {/* Breadcrumb Navigation */}
        <Breadcrumb spacing="8px" separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/festival">Festival</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/festival/team-work">
              Team Work
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Page Content */}
        <h1>Our Team</h1>
        <p>
          Get to know the people who make the Graphic Art Festival a success!
        </p>
        <section>
          <h2>Meet the Team</h2>
          <ul>
            <li>
              <strong>John Doe</strong> - Creative Director
            </li>
            <li>
              <strong>Jane Smith</strong> - Program Manager
            </li>
            <li>
              <strong>Emily Johnson</strong> - Marketing Lead
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
