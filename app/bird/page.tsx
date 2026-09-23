import { redirect } from "next/navigation";

/** Legacy bird.php route → services */

export default function BirdRedirect() {
  redirect("/services");
}