import React from "react";
import { Heading } from "@chakra-ui/core";
import * as data from '../data/sources.json';

export function NewsSources(props) {
    const sources = data.sources.map(d => <option key={d.id} value={d.id}>{d.name}</option>);
    return (
        <div>
        <Heading as="h3">News Sources</Heading>
            <select onChange={props.sourceChanged}>{sources}</select>
        </div>
    );
}