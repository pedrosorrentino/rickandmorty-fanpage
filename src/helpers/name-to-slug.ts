export function slugify(name: string): string {
  let slug = name.toLowerCase()
  slug = slug.replace(/\s+/g, "-")
  slug = slug.replace(/[^a-z0-9-]/g, "")
  slug = slug.replace(/-+/g, "-")
  slug = slug.replace(/^-+|-+$/g, "")
  return slug
}
