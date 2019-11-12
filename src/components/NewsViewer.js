import React from "react";
import { connect } from 'react-redux';

import { Flex, Box, Heading } from "@chakra-ui/core";
import { NewsSources } from "./NewsSources";
import HeadlineView from "./HeadlineView";
import ArticleView from "./ArticleView";
import { fetchSources, fetchHeadlines } from "../redux/actions";

class NewsViewer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sourceId: '',
      article:''
    };

    this.sourceChanged = this.sourceChanged.bind(this);
    this.headlineChanged = this.headlineChanged.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSources());
  }

  sourceChanged(e) {
    const val = e.target.value;
    this.setState({ sourceId: val, article: null });

    const { dispatch } = this.props;
    dispatch(fetchHeadlines(val))
    console.log('Source id', val)
  }

  headlineChanged(article) {
    this.setState({ article });

    console.log("Headline changed", article);
  }

  render() {
    return (
      <Box>
        <Heading as="h1" bg="aqua" textAlign="center">
          Newsreader
        </Heading>
        <Flex>
          <Flex direction="column" width="30%" maxW="30%" mx={2}>
            <Flex>
              <NewsSources
                sources={this.props.sources}
                sourceChanged={this.sourceChanged}
              ></NewsSources>
            </Flex>
            <Flex>
              <HeadlineView
                articles={this.props.headlines}
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

function mapStateToProps(state) {
  const { sources, headlines } = state;

  return {
    sources: sources.items || [],
    headlines: headlines.items || []
  };
}

export default connect(mapStateToProps)(NewsViewer);