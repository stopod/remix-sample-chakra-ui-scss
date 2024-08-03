import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";
import { Link } from "../atoms/link";

type LinkContent = {
  linkTitle: string;
  href: string;
};

type AccordionItemContent = {
  viewTitle: string;
  links: LinkContent[];
};

type LinkAccordionProps = {
  accordionItems: AccordionItemContent[];
};

export const LinkAccordion = ({ accordionItems }: LinkAccordionProps) => {
  return (
    <Accordion>
      {accordionItems.map((accordionItem, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {accordionItem.viewTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {accordionItem.links.map((link, index) => (
            <AccordionPanel pb={4} key={index}>
              <Link to={link.href}>{link.linkTitle}</Link>
            </AccordionPanel>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
