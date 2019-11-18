import React from "react";
import { Heading, Box } from "@chakra-ui/core";

export function NewsSources(props) {

    const sources = props.sources.map(d => <option key={d.id} value={d.id}>{d.name} ({d.category})</option>);

    //const categories = data.sources.filter((val, idx, self) => self.indexOf(val) === idx);
    return (
        <Box maxW="30%">
        <Heading as="h3">News Sources</Heading>
            <select onChange={props.sourceChanged}>{sources}</select>
        </Box>
    );
}
