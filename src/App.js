import React, { Component } from 'react';
import Card from "./Card.js";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="CardRow1">
      <div className="Card">
      <Card 
      Heading = "MOUNTAIN"
      para = "A mountain is an elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock. A mountain differs from a plateau in having a limited summit area, and is larger than a hill, typically rising at least 300 metres (1000 feet) above the surrounding land. A few mountains are isolated summits, but most occur in mountain ranges."
      />
      </div>
      <div className="Card">
      <Card
      Heading = "RIVERS"
      para = "A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases, a river flows into the ground and becomes dry at the end of its course without reaching another body of water. Small rivers can be referred to using names such as stream, creek, brook, rivulet, and rill. There are no official definitions for the generic term river as applied to geographic features, although in some countries or communities a stream is defined by its size."
      />
      </div>
      </div>
      <div className="CardRow2">
      <div className="Card">
      <Card
      Heading = "TREES"
      para = "A tree typically has many secondary branches supported clear of the ground by the trunk. This trunk typically contains woody tissue for strength, and vascular tissue to carry materials from one part of the tree to another. For most trees it is surrounded by a layer of bark which serves as a protective barrier. Below the ground, the roots branch and spread out widely; they serve to anchor the tree and extract moisture and nutrients from the soil."
      />
      </div>
      <div className="Card">
      <Card
      Heading = "ANIMALS"
      para="Animals (also called Metazoa) are multicellular, eukaryotic organisms in the biological kingdom Animalia. With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually, and go through an ontogenetic stage in which their body consists of a hollow sphere of cells, the blastula, during embryonic development."
      />
      </div>
      </div>
      </div>
    );
  }
}

export default App;