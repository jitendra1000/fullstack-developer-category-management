import React, { Component } from "react";
import CategoryDataService from "../services/category-service";

import { styles } from "../css-common"
import { TextField, Button, withStyles } from "@material-ui/core";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: {
                id: null,
                name: "",
                parentid: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getCategory(this.props.match.params.id);
    }

    onChangeName=(e)=>{
        const name = e.target.value;

        this.setState(function (prevState) {
            return {
                currentCategory: {
                    ...prevState.currentCategory,
                    name: name
                }
            };
        });
    }

    onChangeParentid=(e)=>{
        const parentid = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentCategory,
                    parentid: parentid
                }
            };
        });
    }

    getCategory=(id)=>{
        CategoryDataService.get(id)
            .then(response => {
                this.setState({
                    currentCategory: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }



    updateCategory=()=> {
        CategoryDataService.update(
            this.state.currentCategory.id,
            this.state.currentCategory
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The Category was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteCategory=() =>{
        CategoryDataService.delete(this.state.currentCategory.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/tree-view')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentCategory } = this.state;
        const { classes } = this.props

        return (
            <div>
                {currentCategory ? (
                    <div className={classes.form}>
                        <h2>Category Details</h2>
                        <form>
                            <div>
                                <TextField
                                    fullWidth
                                    className={classes.textField}
                                    label="Category Name"
                                    name="name"
                                    value={currentCategory.name}
                                    onChange={this.onChangeName}
                                    required
                                />
                            </div>
                            <div>
                                <TextField
                                    fullWidth
                                    className={classes.textField}
                                    label="Category Parent id"
                                    name="parentid"
                                    value={currentCategory.parentid}
                                    onChange={this.onChangeParentid}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <strong>Category Id: </strong>
                                </label>
                                {currentCategory.id}
                            </div>
                        </form>
                        <div className={classes.buttonWrapper}>
                            <Button
                                className={`${classes.delete} ${classes.button}`}
                                onClick={this.deleteCategory}
                            >
                                Delete Category
                            </Button>

                            <Button
                                type="submit"
                                className={`${classes.update} ${classes.button}`}
                                onClick={this.updateCategory}
                            >
                                Update Category
                            </Button>
                        </div>
                        <p>{this.state.message}</p>
                    </div>
                ) : ""}
            </div>
        );
    }
}

export default withStyles(styles)(Category)