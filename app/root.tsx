import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

import styles from "./tailwind.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => {
  return { title: "Remix News" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="py-1 px-5">
        <nav className="block p-2 my-2">
          <ul className="flex font-semibold">
            <li className="mr-6">
              <Link to="/" className="text-orange-500 hover:text-orange-300">Home</Link>
            </li>
            <li className="mr-6">
              <Link to="/ask" className="text-orange-500 hover:text-orange-300">Ask HN</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
