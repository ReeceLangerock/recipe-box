import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  width: calc(100% * (1/4) - 20px - 1px);
  min-width: 200px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  margin: 10px 5px 10px 5px;
  box-sizing: border-box;
  overflow: hidden;
  text-align: left;
  transition: all 0.75s ease-in;
  max-height: ${props => (props.expanded ? '400px' : '60px')};
  background-color: ${props => (props.expanded ? 'white' : 'white')};
  box-shadow: ${props => (props.expanded ? '0 10px 20px rgba(155,197,61, 0.29), 0 6px 6px rgba(155,197,61, 0.23)' : '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)')};
  border-radius: 3px;

  &:hover {
    transition: all 0.75s ease-out;

    box-shadow: 0 10px 20px rgba(155, 197, 61, 0.29), 0 6px 6px rgba(155, 197, 61, 0.23);
  }
  @media (max-width: 920px) {
    width: calc(100% * (1/3) - 10px - 2px);
  }

  @media (max-width: 700px) {
    width: calc(100% * (1/2) - 10px - 2px);
  }
  @media (max-width: 500px) {
    width: calc(100% - 10px - 1px);
  }
`

const Name = styled.div`
  font-size: 1.35rem;
  overflow: hidden;
  transition: all 0.75s ease-in-out;
  text-overflow: ellipsis;
  white-space: ${props => (props.expanded ? 'wrap' : 'nowrap')};
`

const IngredientsContainer = styled.div`
  border: 1px solid;
  border-radius: 2px;
  padding: 2px 0px 2px 0px;
  margin: 2px 5px 10px 5px;
  max-height: 320px;
  overflow-y: auto;
  flex-grow:2;
`
const Ingredient = styled.div`
  padding: 1px 4px 1px 4px;
  &:nth-child(even) {
    background: rgba(155, 197, 61, 0.15);
    border-bottom: 1px solid rgba(155, 197, 61, 1);
    border-top: 1px solid rgba(155, 197, 61, 1);
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 5px 17px 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid;
  transition: all 0.75s ease-in-out;
  min-height: 61px;
  box-sizing: border-box;

  background-color: ${props => (props.expanded ? 'rgba(155,197,61,1)' : 'white')};
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding-bottom: 5px;
  
`

export class Recipe extends React.Component {
  constructor (props) {
    super(props)
    this.handleExpand = this.handleExpand.bind(this)

    this.state = {
      expanded: false
    }
  }

  handleExpand () {
    this.setState({
      expanded: !this.state.expanded
    })
  }
  renderIngredients () {
    return this.props.ingredients.map((ingredient, index) => {
      return <Ingredient key={ingredient + index}>{ingredient}</Ingredient>
    })
  }
  render () {
    return (
      <Container expanded={this.state.expanded}>
        <Header expanded={this.state.expanded} onClick={this.handleExpand}>
          <Name expanded={this.state.expanded}>{this.props.name}</Name>
        </Header>

        <IngredientsContainer>{this.renderIngredients()}</IngredientsContainer>
        <Footer>
          <Button buttonType={'confirm'} buttonMethod={'setEditModal'} buttonText={'Edit'} payload={[this.props.index]} />
          <Button buttonType={'cancel'} buttonMethod={'deleteRecipe'} buttonText={'Delete'} payload={[this.props.index]} />
        </Footer>
      </Container>
    )
  }
}
export default Recipe
