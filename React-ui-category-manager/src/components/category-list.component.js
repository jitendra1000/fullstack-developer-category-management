import React, { Component } from "react";
import CategoryDataService from "../services/category-service";
import { Link } from "react-router-dom";

import { styles } from "../css-common"
import {  Grid, ListItem, withStyles } from "@material-ui/core";
import DataTreeView from './tree-view';



class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      treeData:[],
      currentCategory: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.retrieveCategoryList();
  }

  retrieveCategoryList = () => {
    CategoryDataService.getAll()
      .then(response => {
        this.setState({
          categoryList: response.data,
          treeData: this.listToTree(response.data)
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList=()=> {
    this.retrieveCategoryList();
    this.setState({
      currentCategory: null,
      currentIndex: -1
    });
  }

  setActiveCategory=(category, index)=> {
    this.setState({
      currentCategory: category,
      currentIndex: index
    });
  }

  listToTree = (list) => {
    var map = {},
      node,
      roots = [],
      i;
  
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
  
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentid !== null) {
        // if you have dangling branches check that map[node.parentid] exists
        list[map[node.parentid]].children.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
  }
  

 

  render() {
    const { classes } = this.props
    const { categoryList, currentCategory, currentIndex } = this.state;

    return (
      <div className={classes.form}>
        <Grid container>
          <Grid item md={4}>
            <h2>Category List TABLE View</h2>

            <div className="list-group">
              {categoryList &&
                categoryList.map((category, index) => (
                  <ListItem
                    selected={index === currentIndex}
                    onClick={() => this.setActiveCategory(category, index)}
                    divider
                    button	
                    key={index}>
                    {category.name}
                  </ListItem>
                ))}
            </div>
          </Grid>
          <Grid item md={4}>
            {currentCategory ? (
              <div className={classes.tutorial}>
                <h4>Category details</h4>
                <div className={classes.detail}>
                  <label>
                    <strong>Id:</strong>
                  </label>{" "}
                  {currentCategory.id}
                </div>
                <div className={classes.detail}>
                  <label>
                    <strong>Name:</strong>
                  </label>{" "}
                  {currentCategory.name}
                </div>
                <div className={classes.detail}>
                  <label>
                    <strong>Parent Id:</strong>
                  </label>{" "}
                  {currentCategory.parentid}
                </div>

                <Link
                  to={"/tree-view/" + currentCategory.id}
                  className={classes.edit}
                >
                  Edit Category
              </Link>
              </div>
            ) : (
                <div>
                  <br />
                  <p className={classes.tutorial}>No data...</p>
                </div>
              )}
          </Grid>
          <Grid item md={3}>
          <h2>Category List Tree View</h2>
          <DataTreeView treeItems={this.state.treeData} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CategoryList)