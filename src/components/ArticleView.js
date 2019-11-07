import React from "react";
import { Flex, Box, Heading, Text, Link, Image } from "@chakra-ui/core";

export default function ArticleView(props) {
  const articleImage = url =>
    url ? (
      <Image
        src={url}
        width="100%" height= "auto"
        alt="piccy"
      ></Image>
    ) : (
      <div></div>
    );

  return props.article ? (
    <Flex direction="column">
      <Heading>{props.article.title}</Heading>
      <Text>Author: {props.article.author}</Text>
      <Text>Summary: {props.article.description}</Text>
      <Box style={{ width: "100%", height: "auto" }}>
        {articleImage(props.article.urlToImage)}
      </Box>
      <Link href={props.article.url} isExternal>
        Further details
      </Link>
    </Flex>
  ) : (
    <Text>*** No story selected ***</Text>
  );
}
