// Packages, libraries, dependencies imports - from local (Package.json)
import { hc } from "hono/client";

// Our File system imports
import { AppType } from "@/app/api/[[...route]]/route";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);