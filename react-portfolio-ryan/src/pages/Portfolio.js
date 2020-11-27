import React from "react";
import portfolio from "./portfolio"

class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    portfolio
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Portfolio List</Title>
        {this.state.portfolio.map(data => (
          <PortfolioCard
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            description={data.description}
            repoLink={data.repoLink}
            deployedLink={data.deployedLink}
          />
        ))}
      </Wrapper>
    );
  }
}
