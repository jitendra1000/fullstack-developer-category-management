import React, { Component } from "react";
import CategoryDataService from "../services/category-service";

import { TextField, Button, withStyles } from "@material-ui/core"
import { styles } from "../css-common"

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: "",
            parentid: "",
            submitted: false
        };
    }

    onChangeName =(e)=> {
        this.setState({
            name: e.target.value
        });
    }

    onChangeParentid=(e)=> {
        this.setState({
            parentid: e.target.value
        });
    }

    saveCategory =() =>{
        var data = {
            name: this.state.name,
            parentid: this.state.parentid
        };

        CategoryDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    parentid: response.data.parentid,
                    submitted:true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newCategory=() =>{
        this.setState({
            id: null,
            name: "",
            parentid: "",
            submitted:false
        });
    }

    render() {
        const { classes } = this.props

        return (
            <React.Fragment>
                {this.state.submitted ? (
                    <div className={classes.form}>
                        <h4>You submitted successfully!</h4>
                        <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={this.newCategory}>
                            Add
                        </Button>
                    </div>
                ) : (
                        <div className={classes.form}>
                            <div className={classes.textField}>
                                <TextField
                                    fullWidth
                                    label="Category Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                    required
                                />
                            </div>

                            <div className={classes.textField}>
                                <TextField
                                    fullWidth
                                    label="parentid"
                                    name="Parent Id"
                                    value={this.state.parentid}
                                    onChange={this.onChangeParentid}
                                    required
                                />
                            </div>

                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                onClick={this.saveCategory}>
                                Submit
                            </Button>
                        </div>
                    )}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AddCategory)