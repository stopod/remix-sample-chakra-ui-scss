import type { MetaFunction } from "@remix-run/node";
import styles from "./styles/_index.module.scss";
import { Link } from "~/components/atoms/link";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <>
      <div className={styles.sampleButton}>
        <Link
          to={"/chakra/sample"}
          bg={"darksalmon"}
          px={3}
          py={1}
          rounded={10}
          _hover={{
            bg: "salmon",
          }}
          _active={{
            bg: "tomato",
          }}
        >
          move chakra-ui sample page
        </Link>
      </div>
      <div className={styles.sampleButton}>
        <Link
          to={"/chakra/grid"}
          bg={"darksalmon"}
          px={3}
          py={1}
          rounded={10}
          _hover={{
            bg: "salmon",
          }}
          _active={{
            bg: "tomato",
          }}
        >
          move chakra-ui grid page
        </Link>
      </div>
    </>
  );
}
