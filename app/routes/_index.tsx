import type { MetaFunction } from "@remix-run/node";
import { Button } from "@chakra-ui/react";
import styles from "./styles/_index.module.scss";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="mt-3 ml-3">
        <Button>Button</Button>
      </div>

      <div className={styles.sampleButton}>
        <Button>Button</Button>
      </div>
    </>
  );
}
