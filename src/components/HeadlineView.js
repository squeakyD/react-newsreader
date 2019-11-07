import React from "react";
import { Heading, Box } from "@chakra-ui/core";
import * as data from "../data/headlines.json";

export default class HeadlineView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data.default
        };
    }

    headlineChanged(e) {
        const url = e.target.value;
        const story = this.state.data.articles.find(d => d.url === url);
        this.props.headlineChanged(story);
    }

    render() {
        if (this.state.data) {
            const filtered = this.state.data.articles.filter(d => d.source.id === this.props.sourceId)
            const sources = filtered.map(d => (
                <option key={d.url} value={d.url}>
                    {d.title}
                </option>
            ));
            return sources.length ? (
              <Box width="100%">
                <Heading as="h3">Headlines</Heading>
                <select
                  style={{width:"100%", maxWidth:"100%"}}
                  multiple
                  onChange={this.headlineChanged.bind(this)}
                >
                  {sources}
                </select>
              </Box>
            ) : (
              <div>No stories found</div>
            );

            //return (<div>{this.state.data.length}</div>)
        } else {
            return 'Loading ...';
        }
    }
}