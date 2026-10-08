import { useEffect } from "react";
import { siteConfig } from "../config/brand";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object) {
  let script = document.head.querySelector<HTMLScriptElement>(`script#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/**
 * Client-side SEO metadata & structured data (JSON-LD).
 * Dynamically synchronizes document title, canonical link, OpenGraph, Twitter card,
 * and Schema.org BreadcrumbList / WebPage schemas on route changes.
 */
export function usePageMeta(meta: PageMeta): void {
  useEffect(() => {
    const url = `${siteConfig.domain}${meta.path === "/" ? "/" : meta.path}`;
    const title = meta.title.includes("BharatX Group")
      ? meta.title
      : `${meta.title} — BharatX Group`;
    const imagePath = meta.image ?? "/bharatxgroup.png";
    const imageUrl = imagePath.startsWith("http")
      ? imagePath
      : `${siteConfig.domain}${imagePath}`;

    document.title = title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:type", meta.type ?? "website");
    upsertMeta("property", "og:site_name", "BharatX Group");
    upsertMeta("property", "og:locale", "en_IN");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertLink("canonical", url);

    // Page-level Schema.org WebPage + BreadcrumbList
    const pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url: url,
      name: title,
      description: meta.description,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        name: "BharatX Group",
        url: siteConfig.domain,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteConfig.domain}/`,
          },
          ...(meta.path !== "/"
            ? [
                {
                  "@type": "ListItem",
                  position: 2,
                  name: meta.title.replace(/(\s*—|\s*\|)\s*BharatX Group.*$/, "").trim(),
                  item: url,
                },
              ]
            : []),
        ],
      },
    };

    upsertJsonLd("bxg-page-jsonld", pageSchema);
  }, [meta.title, meta.description, meta.path, meta.image, meta.type]);
}
