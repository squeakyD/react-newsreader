import React from "react";
import { Heading } from "@chakra-ui/core";
//import * as data from '../data/sources.json';

export function NewsSources(props) {
    //const sources = data.sources.map(d => <option key={d.id} value={d.id}>{d.name} ({d.category})</option>);
    const sources = props.sources.map(d => <option key={d.id} value={d.id}>{d.name} ({d.category})</option>);

    //const categories = data.sources.filter((val, idx, self) => self.indexOf(val) === idx);
    return (
        <div>
        <Heading as="h3">News Sources</Heading>
            <select onChange={props.sourceChanged}>{sources}</select>
        </div>
    );
}

// export class NewsSources extends React.Component{
//     componentDidMount() {
//         //dispatch
//     }

//     render() {
//         const sources = data.sources.map(d => <option key={d.id} value={d.id}>{d.name} ({d.category})</option>);
//         //const categories = data.sources.filter((val, idx, self) => self.indexOf(val) === idx);
//         return (
//             <div>
//                 <Heading as="h3">News Sources</Heading>
//                 <select onChange={this.props.sourceChanged}>{sources}</select>
//             </div>
//         );
//     }
// }