import { Button, Input, Select } from "@chakra-ui/react";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { LinkAccordion } from "../components/organisms/accordion";
import { BasicTable } from "../components/organisms/table";
import styles from "./styles/chakra.sample.module.scss";
import { useState } from "react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  console.log(formData.get("sample"));
  return redirect("/chakra/sample");
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const loader = async () => {
  console.log("loader");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");
  const data: Post[] = await response.json();
  return json({ posts: data });
};

const accrodionItems = [
  {
    viewTitle: "Accordion Item 1",
    links: [
      { linkTitle: "Link 1", href: "#" },
      { linkTitle: "Link 2", href: "#" },
    ],
  },
  {
    viewTitle: "Accordion Item 2",
    links: [
      { linkTitle: "Link 1", href: "#" },
      { linkTitle: "Link 2", href: "#" },
    ],
  },
  {
    viewTitle: "Accordion Item 3",
    links: [
      { linkTitle: "Link 1", href: "#" },
      { linkTitle: "Link 2", href: "#" },
    ],
  },
  {
    viewTitle: "Accordion Item 4",
    links: [
      { linkTitle: "Link 1", href: "#" },
      { linkTitle: "Link 2", href: "#" },
    ],
  },
  {
    viewTitle: "Accordion Item 5",
    links: [
      { linkTitle: "Link 1", href: "#" },
      { linkTitle: "Link 2", href: "#" },
    ],
  },
];

export default function Sample() {
  const { posts } = useLoaderData<typeof loader>();
  const [selectedValue, setSelectedValue] = useState("all");
  const [curPosts, setCurPosts] = useState(posts);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleClick = () => {
    if (selectedValue === "all") {
      setCurPosts(posts);
    } else {
      const filteredPosts = posts.filter((post) => post.userId === Number(selectedValue));
      setCurPosts(filteredPosts);
    }
  };

  const userIds = [...new Set(posts.map((post) => post.userId))];

  return (
    <div className={styles.body}>
      {/* サイド */}
      <div className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Sample Menu</h2>
        <Form method="post" className="flex">
          <Input placeholder="sample input" bg={"white"} name="sample" />
          <Button type="submit" bg={"aqua"}>
            Button
          </Button>
        </Form>
        <LinkAccordion accordionItems={accrodionItems} />
      </div>
      {/* メイン */}
      <div className={styles.main}>
        {/* ヘッダ */}
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Sample Title</h1>
        </div>
        {/* コンテンツ */}
        <div className={styles.content}>
          <div className={styles.fillterForm}>
            <Select onChange={handleChange} value={selectedValue}>
              <option key={"all"} value={"all"} defaultChecked>
                all
              </option>
              {userIds.map((userId) => (
                <option key={userId} value={userId}>
                  {userId}
                </option>
              ))}
            </Select>
            <Button onClick={handleClick}>抽出</Button>
          </div>
          <BasicTable
            tableHeader={{ headers: ["userId", "id", "title", "body"] }}
            tableRows={curPosts.map((post) => ({
              rows: [post.userId.toString(), post.id.toString(), post.title, post.body],
            }))}
          />
        </div>
      </div>
    </div>
  );
}
