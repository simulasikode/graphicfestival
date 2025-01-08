// components/DynamicBreadcrumb.tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import slugTitleMap from "./Slugtitle";

const DynamicBreadcrumb = () => {
  const router = useRouter();
  const pathParts = router.asPath.split("/").filter((part) => part);

  return (
    <Breadcrumb spacing="8px" separator="/">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="/" _hover={"text-decoration: none"}>
          {slugTitleMap["home"] || "Home"}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");
        const title = slugTitleMap[part] || part;

        return (
          <BreadcrumbItem key={href}>
            <BreadcrumbLink as={Link} href={href}>
              {title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;
