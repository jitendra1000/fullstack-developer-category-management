import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { styles } from "./css-common"

import AddCategory from "./components/add-category.component";
import Category from "./components/category.component";
import CategoryList from "./components/category-list.component";

import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';

class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography className={classes.name} variant="h6">
              Category Manager
            </Typography>
            <Link to={"/tree-view"} className={classes.link}>
              <Typography variant="body2">
                Category Tree View and Table
              </Typography>
            </Link>
            <Link to={"/add"} className={classes.link}>
              <Typography variant="body2">
                Add Category
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>

          <Switch>
            <Route exact path={["/", "/tree-view"]} component={CategoryList} />
            <Route exact path="/add" component={AddCategory} />
            <Route path="/tree-view/:id" component={Category} />
          </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);