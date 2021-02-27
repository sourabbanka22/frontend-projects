import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchQuotes, newQuote } from "../actions/index";
import "./randomQuotes.css";

import { Grid, Card, Button, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import { FaTwitter } from "react-icons/fa"

class RandomQuotes extends Component {
  constructor() {
    super();
    this.getNewQuote = this.getNewQuote.bind(this);
  }
  componentDidMount() {
    this.props.fetchQuotes();
    this.getNewQuote();
  }

  getNewQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * 102);
    this.props.newQuote(randomQuoteIndex);
  }
  render() {
    if (this.props.loading) {
      return <h2>Connecting...</h2>;
    }
    const { quote, author } = this.props.quotes[this.props.randomNumber];
    return (
          <Grid style={{display: 'flex', height: '100vh', alignItems: 'center'}} justify="center" container>
              <Grid xs={11} lg={8} item >
              {
                  <Card id="quote-box">
                      <CardContent className="content">
                          <Typography id="text" align="center">
                              {quote}
                          </Typography>
                          <Typography align="right">
                              <span id="author"> ~ {author}</span>
                          </Typography>
                      </CardContent>
                      <CardActions className="actions">
                        <Grid justify="space-between" container>
                          <Grid item sm={3} >
                            <IconButton
                            id="tweet-quote"
                            target="_blank"
                            href={encodeURI('https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="' + quote + ' ~' + author + " ")}
                            className="button"
                            >
                              <FaTwitter color="blue"/>
                            </IconButton>
                          </Grid>
                          <Grid item>
                            <Button id="new-quote" size="small" className="button" onClick={this.getNewQuote} color="primary">
                              Next Quote
                            </Button>
                          </Grid>
                        </Grid>
                      </CardActions>
                  </Card>
              }
              </Grid>
          </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  quotes: state.quotes.data,
  randomNumber: state.quotes.randomNumber,
  loading: state.quotes.loading,
  randomColor: state.quotes.colors
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchQuotes,
      newQuote
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomQuotes);