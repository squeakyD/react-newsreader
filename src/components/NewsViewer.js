import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/core";
import { NewsSources } from "./NewsSources";
import HeadlineView from "./HeadlineView";
import ArticleView from "./ArticleView";

export default class NewsViewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sourceId: '',
      article:''
    };

    this.sourceChanged = this.sourceChanged.bind(this);
    this.headlineChanged = this.headlineChanged.bind(this);
  }

  sourceChanged(e) {
    const val = e.target.value;
    this.setState({ sourceId: val, article: null });

    console.log('Source id', val)
  }

  headlineChanged(article) {
    this.setState({ article });

    console.log("Headline changed", article);
  }

  render() {
    return (
      <Box>
        <Heading as="h1" bg="aqua" textAlign="center">News Reader</Heading>
        <Flex>
          <Flex direction="column" width="30%" maxW="30%" mx={2}>
            <Flex>
              <NewsSources sourceChanged={this.sourceChanged}></NewsSources>
            </Flex>
            <Flex>
              <HeadlineView
                sourceId={this.state.sourceId}
                headlineChanged={this.headlineChanged}
              ></HeadlineView>
            </Flex>
          </Flex>
          <Flex direction="column" mx={2}>
            <ArticleView article={this.state.article}></ArticleView>
          </Flex>
        </Flex>
      </Box>
    );
  }
}
