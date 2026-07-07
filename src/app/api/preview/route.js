import { cookies, draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Entry point for the Storyblok visual editor. Configure the preview URL in
// Storyblok as: https://<host>/api/preview?secret=<STORYBLOK_PREVIEW_SECRET>&slug=
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug") || "";

  if (!secret || secret !== process.env.STORYBLOK_PREVIEW_SECRET) {
    return Response.json({ message: "Invalid token" }, { status: 401 });
  }

  draftMode().enable();

  // The Storyblok editor loads the site in an iframe, so the draft cookie
  // must be sent cross-site: rewrite it with SameSite=None.
  const cookieStore = cookies();
  const bypassCookie = cookieStore.get("__prerender_bypass");
  if (bypassCookie) {
    cookieStore.set("__prerender_bypass", bypassCookie.value, {
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "none",
    });
  }

  // Preserve the Storyblok bridge params (_storyblok, _storyblok_tk, ...) on
  // the redirect so the visual editor can connect.
  searchParams.delete("secret");
  searchParams.delete("slug");
  const query = searchParams.toString();

  redirect(`/${slug}${query ? `?${query}` : ""}`);
}
