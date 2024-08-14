export default async function preview(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.NEXT_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Set cookie to None, so it can be read in the Storyblok iframe, remove Secure attr if on localhost
  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) =>
      cookie.replace("SameSite=Lax", "SameSite=None;Secure")
    )
  );

  // Redirect to the entry location
  let { slug = "" } = req.query;
  const params = req.url.split("?");
  slug = `igc/${slug}`.replace(/^igc\/igc\//, "igc/");
  slug = slug.replace(/posts\//, "");
  slug = slug.replace(/student-stories\//, "");

  // Redirect to the path from entry
  res.redirect(`/${slug}?${params[1]}`);
}
