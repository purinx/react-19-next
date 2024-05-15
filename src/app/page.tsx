import { ReactUse } from "@/features/use";
import { Transition } from "@/features/transition";
import { Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Heading size="8" as="h1">
        React 19 Sample App
      </Heading>
      <Transition />
      <ReactUse />
    </main>
  );
}
