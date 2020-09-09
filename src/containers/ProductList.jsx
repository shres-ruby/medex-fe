import React from "react";
import axios from "axios";
import { Container, Dimmer, Image, Item, Label, Loader, Message, 
Segment, Button, Icon } from "semantic-ui-react";
import { productListURL } from "../constants";
import ReactPaginate from 'react-paginate';
import '../App.css'


class ProductList extends React.Component {
  constructor(props){
    super();
    this.state = {
      loading: false,
      error: null,
      offset: 0,
      data: {results:[]},
      perPage: 5,
      currentPage: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

      receivedData () {
      this.setState({ loading: true });
      axios
        .get(productListURL)
        .then(res => {
          this.setState({ data: res.data, loading: false });
          console.log(res.data);
        })
        .catch(err => {
          this.setState({ error: err, loading: false });
        });
    }
    
    handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
        currentPage: selectedPage,
        offset: offset
      }, () => {
        console.log(this.state.currentPage, this.state.offset);
        axios
        .get(`http://127.0.0.1:8000/products/allproducts/?offset=${this.state.offset}`)
        .then(res => {
          this.setState({ data: res.data, loading: false });
        })
        .catch(err => {
          this.setState({ error: err, loading: false });
        });
      });
    };

    componentDidMount(){
      this.receivedData()
    }
  
    render() {
      const { data, error, loading } = this.state;
      return (
        <Container>
          {error && (
            <Message
              error
              header="There was some errors with your submission"
              content={JSON.stringify(error)}
            />
          )}
          {loading && (
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
  
              <Image src="/images/wireframe/short-paragraph.png" />
            </Segment>
          )}

          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={3}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>

          <Item.Group divided>
            {data.results.map((item, index) => {
              return (
                <Item key={index}>
                  <Item.Image src={item.image} />
                  <Item.Content>
                    <Item.Header>
                      {item.title}
                    </Item.Header>
                    <Item.Meta>
                      <span className="cinema">{item.category}</span>
                    </Item.Meta>
                    <Item.Description>{item.description}</Item.Description>
                    <Item.Extra>
                      <Button
                        primary
                        floated="right"
                        icon
                        labelPosition="right"
                      >
                        Add to cart
                        <Icon name="cart plus" />
                      </Button>
                      {item.discount_price && (
                        <Label
                          color={
                            item.label === "primary"
                              ? "blue"
                              : item.label === "secondary"
                              ? "green"
                              : "olive"
                          }
                        >
                          {item.label}
                        </Label>
                      )}
                    </Item.Extra>
                  </Item.Content>
                </Item>
              );
            })}
          </Item.Group>
        </Container>
      );
    }
  }
  
  export default ProductList;